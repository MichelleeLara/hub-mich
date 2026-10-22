// Función de Vercel: recibe el mensaje del modo "Escríbeme" del teclado y lo reenvía a Mich.
// Canales (cada uno se activa solo si tiene sus variables de entorno en Vercel):
//   WhatsApp con CallMeBot → CALLMEBOT_PHONE, CALLMEBOT_APIKEY
//   Telegram con un bot    → TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
// Responde ok si al menos un canal entregó el mensaje.

const MAX_MESSAGE = 500;
const MAX_CONTACT = 120;
const MIN_TYPING_MS = 1500; // nadie escribe un mensaje en menos tiempo: casi siempre es un bot
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 3;

// Límite por IP en memoria: es de mejor esfuerzo (cada instancia de la función tiene el suyo)
const hits = new Map();
const rateLimited = ip => {
  const now = Date.now();
  for (const [key, times] of hits) if (now - times[times.length - 1] >= RATE_WINDOW_MS) hits.delete(key);
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) return true;
  hits.set(ip, [...recent, now]);
  return false;
};

const clean = (value, max) => (typeof value === 'string' ? value : '').replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, '').trim().slice(0, max);

const allowedOrigin = req => {
  const origin = req.headers.origin;
  if (!origin) return false;
  try {
    const { host } = new URL(origin);
    return host === req.headers.host || host === 'itsmich.com.mx' || host.endsWith('.itsmich.com.mx');
  } catch {
    return false;
  }
};

async function sendWhatsApp(text) {
  const { CALLMEBOT_PHONE: phone, CALLMEBOT_APIKEY: apikey } = process.env;
  if (!phone || !apikey) return null;
  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apikey)}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
  const body = await res.text();
  // CallMeBot responde 200 con texto; los fallos (clave inválida, número no activado) vienen en el cuerpo
  const ok = res.ok && !/error|invalid|not\s+activated/i.test(body);
  if (!ok) console.error('contact: CallMeBot respondió', res.status, body.replace(/<[^>]+>/g, ' ').trim().slice(0, 160));
  return ok;
}

async function sendTelegram(text) {
  const { TELEGRAM_BOT_TOKEN: token, TELEGRAM_CHAT_ID: chatId } = process.env;
  if (!token || !chatId) return null;
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    signal: AbortSignal.timeout(8000),
  });
  const data = await res.json().catch(() => ({}));
  return res.ok && data.ok === true;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method' });
  }
  if (!allowedOrigin(req)) return res.status(403).json({ ok: false, error: 'origin' });
  if (!String(req.headers['content-type'] || '').includes('application/json')) return res.status(415).json({ ok: false, error: 'invalid' });
  if (Number(req.headers['content-length'] || 0) > 4096) return res.status(413).json({ ok: false, error: 'invalid' });

  let body;
  try { body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {}; }
  catch { return res.status(400).json({ ok: false, error: 'invalid' }); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return res.status(400).json({ ok: false, error: 'invalid' });
  // Campo trampa: la página siempre lo manda vacío. Un bot que lo llena recibe "ok" y no se envía nada.
  if (body.website) return res.status(200).json({ ok: true });
  if (!(typeof body.elapsed === 'number' && Number.isFinite(body.elapsed) && body.elapsed >= MIN_TYPING_MS)) return res.status(400).json({ ok: false, error: 'too-fast' });

  const message = clean(body.message, MAX_MESSAGE);
  const contact = clean(body.contact, MAX_CONTACT);
  if (message.length < 2 || !contact) return res.status(400).json({ ok: false, error: 'invalid' });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) return res.status(429).json({ ok: false, error: 'rate' });

  const text = `✉️ Nuevo mensaje desde el teclado de itsmich.com.mx\n\n${message}\n\nResponder a: ${contact}`;
  const results = await Promise.allSettled([sendWhatsApp(text), sendTelegram(text)]);
  const outcomes = results.map(r => (r.status === 'fulfilled' ? r.value : false));
  // Registro por canal (sin teléfono, token ni clave) para detectar un canal roto aunque el otro entregue
  console.log('contact:', JSON.stringify({ whatsapp: outcomes[0], telegram: outcomes[1] }));

  if (outcomes.every(o => o === null)) {
    console.error('contact: no hay ningún canal configurado');
    return res.status(503).json({ ok: false, error: 'not-configured' });
  }
  if (!outcomes.some(o => o === true)) {
    console.error('contact: ningún canal entregó el mensaje', outcomes);
    return res.status(502).json({ ok: false, error: 'delivery' });
  }
  return res.status(200).json({ ok: true });
}
