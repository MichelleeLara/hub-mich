import { useCallback, useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';
import { SPRING } from '../lib/motion';

// Teclado mecánico interactivo (adaptado de Aceternity UI · Keyboard).
// Sprite de sonido: public/sounds/keyboard.m4a, recortado del pack CherryMX Black. [inicioMs, duraciónMs]
const SOUND_DOWN = {
  Escape: [2894, 113], F1: [3610, 98], F2: [4210, 90], F3: [4758, 90], F4: [5250, 100], F5: [5831, 105], F6: [6396, 105],
  F7: [6900, 105], F8: [7443, 111], F9: [7955, 91], F10: [8504, 105], F11: [9046, 94], F12: [9582, 96],
  Backquote: [12476, 100], Digit1: [12946, 96], Digit2: [13470, 95], Digit3: [13963, 100], Digit4: [14481, 102],
  Digit5: [14994, 94], Digit6: [15505, 109], Digit7: [15990, 97], Digit8: [16529, 92], Digit9: [17012, 103],
  Digit0: [17550, 87], Minus: [18052, 93], Equal: [18553, 89], Backspace: [19065, 110], Tab: [21734, 119],
  KeyQ: [22245, 95], KeyW: [22790, 89], KeyE: [23317, 83], KeyR: [23817, 92], KeyT: [24297, 92], KeyY: [24811, 93],
  KeyU: [25313, 95], KeyI: [25795, 91], KeyO: [26309, 84], KeyP: [26804, 83], BracketLeft: [27330, 85],
  BracketRight: [27883, 99], Backslash: [28393, 100], CapsLock: [31011, 126], KeyA: [31542, 85], KeyS: [32031, 88],
  KeyD: [32492, 85], KeyF: [32973, 87], KeyG: [33453, 94], KeyH: [33986, 93], KeyJ: [34425, 88], KeyK: [34932, 90],
  KeyL: [35410, 95], Semicolon: [35914, 95], Quote: [36428, 87], Enter: [36902, 117], ShiftLeft: [38136, 133],
  KeyZ: [38694, 80], KeyX: [39148, 76], KeyC: [39632, 95], KeyV: [40136, 94], KeyB: [40621, 107], KeyN: [41103, 90],
  KeyM: [41610, 93], Comma: [42110, 92], Period: [42594, 90], Slash: [43105, 95], ShiftRight: [43565, 137],
  Fn: [44251, 110], ControlLeft: [45327, 83], AltLeft: [45750, 82], MetaLeft: [46199, 100], Space: [51541, 144],
  MetaRight: [47929, 75], AltRight: [49329, 82], ArrowUp: [44251, 110], ArrowLeft: [49837, 88], ArrowDown: [50333, 90],
  ArrowRight: [50783, 111],
};
// Al soltar: la cola de cada muestra, más corta y ligera
const releaseOf = ([start, dur]) => [start + dur + 5, Math.max(70, dur - 10)];
const SOUND_SRC = '/sounds/keyboard.m4a';

// Carácter que escribe cada tecla al tocarla (sin teclado físico): [normal, con shift]
const TAP_CHARS = {
  Backquote: ['`', '~'], Digit1: ['1', '!'], Digit2: ['2', '@'], Digit3: ['3', '#'], Digit4: ['4', '$'], Digit5: ['5', '%'],
  Digit6: ['6', '^'], Digit7: ['7', '&'], Digit8: ['8', '*'], Digit9: ['9', '('], Digit0: ['0', ')'], Minus: ['-', '_'],
  Equal: ['=', '+'], BracketLeft: ['[', '{'], BracketRight: [']', '}'], Backslash: ['\\', '|'], Semicolon: [';', ':'],
  Quote: ["'", '"'], Comma: [',', '<'], Period: ['.', '>'], Slash: ['/', '?'], Space: [' ', ' '],
};

const isTypingTarget = el => el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

let charId = 0;
const toChars = text => [...text].map(ch => ({ id: ++charId, ch }));

function useKeySound(enabled) {
  const ctxRef = useRef(null);
  const bufferRef = useRef(null);
  const loadingRef = useRef(false);
  // Se descarga en la primera interacción con el teclado, nunca al cargar la página
  const prime = useCallback(() => {
    if (!enabled) return;
    if (ctxRef.current) { if (ctxRef.current.state === 'suspended') ctxRef.current.resume().catch(() => {}); return; }
    if (loadingRef.current) return;
    loadingRef.current = true;
    try {
      const ctx = new AudioContext();
      ctxRef.current = ctx;
      ctx.resume().catch(() => {});
      fetch(SOUND_SRC).then(r => r.ok ? r.arrayBuffer() : Promise.reject()).then(b => ctx.decodeAudioData(b))
        .then(buffer => { bufferRef.current = buffer; }).catch(() => {});
    } catch {}
  }, [enabled]);
  const play = useCallback((code, up = false) => {
    const ctx = ctxRef.current, buffer = bufferRef.current;
    if (!enabled || !ctx || !buffer) return;
    const def = SOUND_DOWN[code] ?? SOUND_DOWN.KeyF;
    const [start, dur] = up ? releaseOf(def) : def;
    const source = ctx.createBufferSource();
    const gain = ctx.createGain();
    gain.gain.value = up ? .55 : .9;
    source.buffer = buffer;
    source.connect(gain).connect(ctx.destination);
    source.start(0, start / 1000, dur / 1000);
  }, [enabled]);
  useEffect(() => () => { ctxRef.current?.close().catch(() => {}); }, []);
  return { prime, play };
}


// Modo reto: frases cortas, sin acentos para que se puedan tocar en el teclado de pantalla
const WORDS = 'casa luz mar cielo nube tiempo idea mano camino ciudad noche dia agua fuego tierra viento musica libro papel mesa sol luna verde azul rojo nuevo claro simple suave rapido lento juntos hacer pensar crear mirar sentir buscar abrir cerrar volar correr escribir leer andar subir bajar pausa calma respiro ritmo tecla codigo diseno forma linea punto color sonido silencio jardin puerta ventana camino historia futuro equipo producto detalle paso'.split(' ');
const GAME_WORDS = 12;
const newTarget = () => Array.from({ length: GAME_WORDS }, () => WORDS[Math.floor(Math.random() * WORDS.length)]).join(' ');
const freshGame = () => ({ target: newTarget(), typed: [], startedAt: null, endedAt: null, strokes: 0, misses: 0 });
// Modo "Escríbeme": mensaje → a dónde responder (WhatsApp o correo) → se envía a /api/contact
const MSG_CAP = { message: 500 };
const CONTACT_CAP = { whatsapp: 16, email: 80 };
const freshMsg = () => ({ step: 'message', message: '', contact: '', channel: null, rawContact: '', startedAt: null, error: null, hint: null });
const lineText = chars => chars.map(c => c.ch).join('').trim();
const canType = msg => msg.step === 'message' || msg.step === 'contact';

// WhatsApp: solo dígitos (y un + al inicio). Correo: sin espacios y en minúsculas.
const filterContact = (channel, current, text) => {
  if (channel === 'whatsapp') return [...text].filter((ch, i) => /\d/.test(ch) || (ch === '+' && current.length === 0 && i === 0)).join('');
  return text.replace(/\s/g, '').toLowerCase();
};
// El primer carácter decide el canal si aún no se eligió: número → WhatsApp, letra → correo
const detectChannel = ch => (/[\d+]/.test(ch) ? 'whatsapp' : 'email');

// Grupos para leer el número: 55 1234 5678 · +52 55 1234 5678 · +1 555 123 4567
function phoneGroups(raw) {
  const plus = raw.startsWith('+');
  const digits = raw.replace(/\D/g, '');
  const cc = plus ? (digits.startsWith('1') ? 1 : 2) : 0;
  const sizes = cc === 1 ? [3, 3, 4] : [2, 4, 4];
  const starts = new Set(); // índices del texto (con +) donde empieza un grupo nuevo
  let i = (plus ? 1 : 0) + cc;
  if (cc) starts.add(i);
  for (const size of [...sizes, 4]) { i += size; starts.add(i); }
  return starts;
}
const formatPhone = raw => {
  const starts = phoneGroups(raw);
  return [...raw].map((ch, i) => (starts.has(i) ? ` ${ch}` : ch)).join('');
};
// Autocompletar del correo: sugiere el dominio más común que encaja con lo escrito (se acepta con Tab o →)
const EMAIL_DOMAINS = ['gmail.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'yahoo.com'];
const emailSuggestion = text => {
  if (!text) return '';
  const at = text.indexOf('@');
  if (at < 0) return `@${EMAIL_DOMAINS[0]}`;
  const typed = text.slice(at + 1);
  if (text.indexOf('@', at + 1) >= 0) return '';
  const match = EMAIL_DOMAINS.find(d => d.startsWith(typed) && d !== typed);
  return match ? match.slice(typed.length) : '';
};
const validContact = (channel, raw) => channel === 'whatsapp'
  ? raw.replace(/\D/g, '').length >= 10 && raw.replace(/\D/g, '').length <= 15
  : /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(raw);
// Lo que le llega a Mich: listo para responder con un toque
const contactLabel = (channel, raw) => {
  if (channel === 'email') return `Correo ${raw}`;
  const digits = raw.replace(/\D/g, '');
  const intl = raw.startsWith('+') ? digits : digits.length === 10 ? `52${digits}` : digits;
  return `WhatsApp ${formatPhone(raw.startsWith('+') ? raw : `+${intl}`)} · https://wa.me/${intl}`;
};

// Atajos que se respetan aunque la sección bloquee el teclado nativo: recargar y devtools
const isEscapeHatch = e => e.key === 'F5' || e.key === 'F12' || ((e.metaKey || e.ctrlKey) && (e.key === 'r' || e.key === 'R' || (e.altKey && /^[ij]$/i.test(e.key))));

// Hasta dónde borra: una letra, la palabra anterior (⌥⌫ / Ctrl⌫) o toda la línea (⌘⌫)
function eraseTo(list, scope = 'char') {
  if (scope === 'all') return 0;
  if (scope === 'char') return Math.max(0, list.length - 1);
  let i = list.length;
  while (i > 0 && list[i - 1].ch === ' ') i--;
  while (i > 0 && list[i - 1].ch !== ' ') i--;
  return i;
}
const eraseScope = e => e.metaKey ? 'all' : (e.altKey || e.ctrlKey) ? 'word' : 'char';

function reducer(state, action) {
  const { mode, game, msg } = state;
  switch (action.type) {
    case 'mode':
      return action.mode === mode ? state : { ...state, mode: action.mode, chars: [], game: freshGame(), msg: freshMsg() };
    case 'channel':
      // Cambiar de canal limpia el campo: un número no sirve como correo ni al revés
      return mode === 'msg' && msg.step === 'contact' && action.channel !== msg.channel ? { ...state, chars: [], msg: { ...msg, channel: action.channel, hint: null } } : state;
    case 'type': {
      if (mode === 'msg') {
        if (!canType(msg)) return state;
        const startedAt = msg.startedAt ?? Date.now();
        if (msg.step === 'message') return { ...state, chars: [...state.chars, ...toChars(action.ch)].slice(0, MSG_CAP.message), msg: { ...msg, startedAt } };
        const channel = msg.channel ?? detectChannel(action.ch[0]);
        const current = lineText(state.chars);
        const add = filterContact(channel, current, action.ch);
        if (!add) return state.chars.length || msg.channel ? state : { ...state, msg: { ...msg, channel } };
        return { ...state, chars: [...state.chars, ...toChars(add)].slice(0, CONTACT_CAP[channel]), msg: { ...msg, channel, startedAt, hint: null } };
      }
      if (game.endedAt || game.typed.length >= game.target.length) return state;
      const now = performance.now();
      const ok = action.ch === game.target[game.typed.length];
      const typed = [...game.typed, { ok, ch: action.ch }];
      return { ...state, game: { ...game, typed, startedAt: game.startedAt ?? now, endedAt: typed.length === game.target.length ? now : null, strokes: game.strokes + 1, misses: game.misses + (ok ? 0 : 1) } };
    }
    case 'erase':
      if (mode === 'msg') {
        if (!canType(msg)) return state;
        return { ...state, chars: state.chars.slice(0, eraseTo(state.chars, action.scope)), msg: { ...msg, hint: null } };
      }
      if (game.endedAt) return state;
      return { ...state, game: { ...game, typed: game.typed.slice(0, eraseTo(game.typed, action.scope)) } };
    case 'enter':
      if (mode === 'msg') {
        const text = lineText(state.chars);
        if (msg.step === 'message') return text.length >= 2 ? { ...state, chars: [], msg: { ...msg, step: 'contact', message: text } } : state;
        if (msg.step === 'contact') {
          if (!text || !msg.channel) return state;
          if (!validContact(msg.channel, text)) return { ...state, msg: { ...msg, hint: msg.channel } };
          return { ...state, chars: [], msg: { ...msg, step: 'sending', rawContact: text, contact: contactLabel(msg.channel, text), error: null, hint: null } };
        }
        if (msg.step === 'error') return { ...state, msg: { ...msg, step: 'sending', error: null } };
        if (msg.step === 'sent') return { ...state, chars: [], msg: freshMsg() };
        return state;
      }
      return game.endedAt || game.typed.length === 0 ? { ...state, game: freshGame() } : state;
    case 'restart':
      if (mode === 'msg') {
        // esc: regresa un paso con lo que ya había escrito
        if (msg.step === 'contact') return { ...state, chars: toChars(msg.message), msg: { ...msg, step: 'message', hint: null } };
        if (msg.step === 'error') return { ...state, chars: toChars(msg.rawContact), msg: { ...msg, step: 'contact', error: null } };
        if (msg.step === 'sending') return state;
        return { ...state, chars: [], msg: msg.step === 'sent' ? freshMsg() : msg };
      }
      return { ...state, game: freshGame() };
    case 'sent':
      return msg.step === 'sending' ? { ...state, msg: { ...msg, step: 'sent' } } : state;
    case 'failed':
      return msg.step === 'sending' ? { ...state, msg: { ...msg, step: 'error', error: action.error } } : state;
    default:
      return state;
  }
}

function gameStats(game, now) {
  const end = game.endedAt ?? now;
  const seconds = game.startedAt ? Math.max(.001, (end - game.startedAt) / 1000) : 0;
  const correct = game.typed.filter(t => t.ok).length;
  const words = game.target.slice(0, game.typed.length).split(' ').length - 1 + (game.endedAt ? 1 : 0);
  return {
    seconds,
    wpm: seconds ? Math.round((correct / 5) / (seconds / 60)) : 0,
    accuracy: game.strokes ? Math.round(((game.strokes - game.misses) / game.strokes) * 100) : 100,
    words,
  };
}

const channelIcon = paths => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths}</svg>;
const CHANNELS = [
  { id: 'whatsapp', label: 'WhatsApp', icon: channelIcon(<><path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></>) },
  { id: 'email', label: 'Correo', icon: channelIcon(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>) },
];

export default function RelaxKeyboard() {
  const rootRef = useRef(null);
  const lineRef = useRef(null);
  const trackRef = useRef(null);
  const caretRef = useRef(null);
  const reduced = useReducedMotionPreference();
  const [pressed, setPressedKeys] = useState(() => new Set());
  const [state, dispatch] = useReducer(reducer, null, () => ({ mode: 'msg', chars: [], game: freshGame(), msg: freshMsg() }));
  const [shift, setShift] = useState(false);
  // Modificador de borrado al tocar: ⌘ = línea completa, ⌥ / ⌃ = palabra (se suelta al usarlo)
  const [eraseMod, setEraseMod] = useState(null);
  const [sound, setSound] = useState(true);
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const [now, setNow] = useState(0);
  const { prime, play } = useKeySound(sound);
  const { mode, chars, game, msg } = state;
  const modeRef = useRef(mode);
  modeRef.current = mode;
  const msgRef = useRef(msg);
  msgRef.current = msg;
  const suggestion = mode === 'msg' && msg.step === 'contact' && msg.channel === 'email' ? emailSuggestion(lineText(chars)) : '';
  const suggestionRef = useRef(suggestion);
  suggestionRef.current = suggestion;

  // Envío del modo "Escríbeme"
  useEffect(() => {
    if (msg.step !== 'sending') return;
    const controller = new AbortController();
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: msg.message, contact: msg.contact, website: '', elapsed: Date.now() - (msg.startedAt ?? Date.now()) }),
      signal: controller.signal,
    })
      .then(r => r.json().catch(() => ({})).then(data => (r.ok && data.ok ? dispatch({ type: 'sent' }) : dispatch({ type: 'failed', error: data.error || 'delivery' }))))
      .catch(err => { if (err.name !== 'AbortError') dispatch({ type: 'failed', error: 'network' }); });
    return () => controller.abort();
  }, [msg.step, msg.message, msg.contact, msg.startedAt]);

  useEffect(() => {
    try { if (localStorage.getItem('kb-sound') === 'off') setSound(false); } catch {}
  }, []);
  const toggleSound = () => {
    const next = !sound;
    setSound(next);
    try { localStorage.setItem('kb-sound', next ? 'on' : 'off'); } catch {}
  };

  const press = useCallback(code => setPressedKeys(prev => new Set(prev).add(code)), []);
  const release = useCallback(code => setPressedKeys(prev => { const next = new Set(prev); next.delete(code); return next; }), []);

  // Una sola línea: el texto se desliza para que el cursor siempre quede a la vista
  useLayoutEffect(() => {
    const line = lineRef.current, track = trackRef.current, caret = caretRef.current;
    if (!line || !track || !caret) return;
    const cw = line.clientWidth;
    if (mode !== 'game') {
      const tw = chars.length ? caret.offsetLeft + caret.offsetWidth : track.scrollWidth;
      setOffset(Math.min((cw - tw) / 2, cw * .9 - tw));
    } else {
      const slot = caret.closest('.relax-slot');
      setOffset(Math.min(cw * .04, cw * .42 - ((slot?.offsetLeft ?? 0) + caret.offsetLeft)));
    }
  }, [mode, chars, game.typed.length, game.target, msg.step]);

  // Cronómetro del reto
  useEffect(() => {
    if (mode !== 'game' || !game.startedAt || game.endedAt) return;
    const id = setInterval(() => setNow(performance.now()), 200);
    return () => clearInterval(id);
  }, [mode, game.startedAt, game.endedAt]);

  // Solo captura el teclado físico mientras la sección está a la vista
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const onDown = e => {
      if (isTypingTarget(e.target)) return;
      // En "Escríbeme" se deja pegar (⌘V / Ctrl V); el texto llega por el evento paste
      const isPaste = modeRef.current === 'msg' && (e.metaKey || e.ctrlKey) && (e.key === 'v' || e.key === 'V');
      // Bloquea lo nativo (scroll, buscar, atajos, atrás) salvo Tab, recargar y devtools
      // Con una sugerencia de correo a la vista, Tab la completa en vez de mover el foco
      const completes = (e.key === 'Tab' || e.code === 'ArrowRight') && !e.shiftKey && Boolean(suggestionRef.current);
      if ((e.key !== 'Tab' || completes) && !isEscapeHatch(e) && !isPaste) e.preventDefault();
      if (e.key === 'Tab' && !completes) return;
      const code = e.code;
      if (e.repeat) { if (code === 'Backspace') dispatch({ type: 'erase', scope: eraseScope(e) }); return; }
      prime();
      play(code);
      press(code);
      // Con ⌘ presionado macOS no manda keyup de la otra tecla: se suelta sola
      if (e.metaKey && e.key !== 'Meta') setTimeout(() => release(code), 220);
      if (e.key === 'Backspace') return dispatch({ type: 'erase', scope: eraseScope(e) });
      if (completes) return dispatch({ type: 'type', ch: suggestionRef.current });
      if ((code === 'ArrowLeft' || code === 'ArrowRight') && modeRef.current === 'msg' && msgRef.current.step === 'contact') {
        return dispatch({ type: 'channel', channel: msgRef.current.channel === 'whatsapp' ? 'email' : 'whatsapp' });
      }
      if (e.metaKey || e.ctrlKey) return;
      else if (e.key === 'Enter') dispatch({ type: 'enter' });
      else if (e.key === 'Escape') dispatch({ type: 'restart' });
      else if (e.key.length === 1) dispatch({ type: 'type', ch: e.key });
    };
    const onUp = e => {
      if (isTypingTarget(e.target)) return;
      if (e.key !== 'Tab' && !isEscapeHatch(e)) e.preventDefault();
      play(e.code, true);
      release(e.code);
      if (e.key === 'Meta') setPressedKeys(new Set());
    };
    const onBlur = () => setPressedKeys(new Set());
    const onPaste = e => {
      if (modeRef.current !== 'msg' || isTypingTarget(e.target)) return;
      e.preventDefault();
      const text = (e.clipboardData?.getData('text') || '').replace(/\s+/g, ' ');
      if (text) dispatch({ type: 'type', ch: text });
    };
    document.addEventListener('paste', onPaste);
    document.addEventListener('keydown', onDown);
    document.addEventListener('keyup', onUp);
    window.addEventListener('blur', onBlur);
    return () => {
      document.removeEventListener('paste', onPaste);
      document.removeEventListener('keydown', onDown);
      document.removeEventListener('keyup', onUp);
      window.removeEventListener('blur', onBlur);
    };
  }, [visible, prime, play, press, release]);

  // Tocar o hacer clic en una tecla
  const tappedRef = useRef(new Set());
  const tapDown = code => {
    prime();
    play(code);
    press(code);
    tappedRef.current.add(code);
    if (code === 'Backspace') { dispatch({ type: 'erase', scope: eraseMod ?? 'char' }); return setEraseMod(null); }
    if (code === 'MetaLeft' || code === 'MetaRight') return setEraseMod(m => m === 'all' ? null : 'all');
    if (code === 'AltLeft' || code === 'AltRight' || code === 'ControlLeft') return setEraseMod(m => m === 'word' ? null : 'word');
    setEraseMod(null);
    if ((code === 'Tab' || code === 'ArrowRight') && suggestion) return dispatch({ type: 'type', ch: suggestion });
    if (code === 'Enter') return dispatch({ type: 'enter' });
    if (code === 'Escape') return dispatch({ type: 'restart' });
    if (code === 'ShiftLeft' || code === 'ShiftRight' || code === 'CapsLock') return setShift(s => !s);
    let ch = null;
    if (code.startsWith('Key')) ch = shift ? code.slice(3) : code.slice(3).toLowerCase();
    else if (TAP_CHARS[code]) ch = TAP_CHARS[code][shift ? 1 : 0];
    if (ch) { dispatch({ type: 'type', ch }); if (shift && code !== 'Space') setShift(false); }
  };
  // Ref en vez del estado: un clic muy rápido suelta antes de que React vuelva a pintar
  const tapUp = code => { if (tappedRef.current.delete(code)) { play(code, true); release(code); } };

  const letterIn = reduced ? { opacity: 0 } : { opacity: 0, y: 22, scale: .5, filter: 'blur(8px)' };
  const letterOut = reduced ? { opacity: 0 } : { opacity: 0, y: -10, scale: .8, filter: 'blur(6px)' };
  const stats = gameStats(game, now);
  const MSG_ERRORS = { rate: 'Muchos mensajes seguidos; intenta en unos minutos', 'too-fast': 'Escribe con calma y vuelve a intentarlo' };
  const CONTACT_HINTS = { whatsapp: 'Revisa el número: van 10 dígitos o más', email: 'Revisa el correo: falta la @ o el dominio' };
  const msgStatus = {
    message: `return para seguir · ${chars.length}/${MSG_CAP.message}`,
    contact: msg.hint ? CONTACT_HINTS[msg.hint] : suggestion ? 'tab o → completa · return envía' : 'return envía · esc vuelve',
    sending: 'Enviando…',
    sent: 'return para escribir otro',
    error: `${MSG_ERRORS[msg.error] || 'No se pudo enviar'} · return reintenta · esc corrige`,
  };
  const placeholder = mode === 'msg'
    ? { message: 'Escríbeme algo…', contact: { whatsapp: '55 1234 5678', email: 'tu@correo.com' }[msg.channel] ?? '¿A dónde te respondo?', sending: 'Enviando…', sent: 'Enviado. Te respondo pronto ✓', error: 'No se pudo enviar' }[msg.step]
    : 'Escribe algo…';
  const showCaret = mode !== 'msg' || canType(msg);
  // Ayudas de lectura en el paso 2: el número se agrupa (55 1234 5678) y el dominio del correo va más tenue
  const contactText = mode === 'msg' && msg.step === 'contact' ? chars.map(c => c.ch).join('') : '';
  const groupStarts = msg.channel === 'whatsapp' && contactText ? phoneGroups(contactText) : null;
  const atIndex = msg.channel === 'email' ? contactText.indexOf('@') : -1;
  const charClass = i => `relax-char${groupStarts?.has(i) ? ' is-group' : ''}${atIndex >= 0 && i >= atIndex ? ' is-domain' : ''}`;
  const status = mode === 'msg' ? msgStatus[msg.step] : game.endedAt
      ? null
      : game.startedAt ? `${stats.words}/${GAME_WORDS} · ${stats.seconds.toFixed(1)} s · esc reinicia` : `${GAME_WORDS} palabras · empieza a escribir`;

  return (
    <div ref={rootRef} className="relax-kb" onContextMenu={e => e.preventDefault()}>
      {/* Pantalla: una sola línea */}
      <div ref={lineRef} className="relax-line" data-mode={mode}>
        <motion.div ref={trackRef} className="relax-track" animate={{ x: offset }} initial={false}
          transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 38, mass: .7 }}>
          {mode !== 'game' ? (
            <>
              <AnimatePresence initial={false} mode="popLayout">
                {chars.map((c, i) => (
                  <motion.span key={c.id} className={charClass(i)} initial={letterIn} animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }} exit={letterOut}
                    transition={reduced ? { duration: .15 } : { type: 'spring', stiffness: 520, damping: 26, mass: .55 }}>
                    {c.ch === ' ' ? ' ' : c.ch}
                  </motion.span>
                ))}
              </AnimatePresence>
              <span ref={caretRef} className="relax-caret" aria-hidden="true" hidden={!showCaret} />
              {suggestion && <span className="relax-suggestion" aria-hidden="true">{suggestion}</span>}
              {chars.length === 0 && <span key={placeholder} className={`relax-placeholder ${mode === 'msg' && msg.step === 'sent' ? 'is-sent' : ''}`}>{placeholder}</span>}
            </>
          ) : (
            [...game.target].map((ch, i) => {
              const t = game.typed[i];
              const cls = t ? (t.ok ? 'is-ok' : 'is-miss') : '';
              return (
                <span key={`${game.target}-${i}`} className="relax-slot">
                  {i === game.typed.length && <span ref={caretRef} className="relax-caret relax-caret-game" aria-hidden="true" />}
                  <span className={`relax-gchar ${cls}`}>{ch === ' ' ? ' ' : ch}</span>
                  {i === game.target.length - 1 && game.typed.length === game.target.length && <span ref={caretRef} className="relax-caret relax-caret-game" aria-hidden="true" />}
                </span>
              );
            })
          )}
        </motion.div>
      </div>
      <span className="sr-only" aria-live="polite">
        {mode === 'game' && game.endedAt ? `${stats.wpm} palabras por minuto, ${stats.accuracy}% de precisión` : mode === 'msg' && (msg.step === 'sent' || msg.step === 'error') ? placeholder : ''}
      </span>

      {/* Estado del reto / pista */}
      <div className="relax-status">
        <AnimatePresence mode="wait" initial={false}>
          {mode === 'game' && game.endedAt ? (
            <motion.p key="result" className="relax-result" initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0 }} transition={SPRING}>
              <strong>{stats.wpm}</strong> ppm <span className="relax-dot">·</span> <strong>{stats.accuracy}%</strong> precisión <span className="relax-dot">·</span> <strong>{stats.seconds.toFixed(1)}</strong> s <span className="relax-dot">·</span> <kbd>return</kbd> otra
            </motion.p>
          ) : mode === 'msg' && msg.step === 'contact' ? (
            <motion.div key="msg-contact" className="relax-contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={SPRING}>
              <div className="relax-channels" role="radiogroup" aria-label="¿Por dónde te respondo?">
                {CHANNELS.map(c => (
                  <button key={c.id} type="button" role="radio" aria-checked={msg.channel === c.id} onMouseDown={e => e.preventDefault()} onClick={() => dispatch({ type: 'channel', channel: c.id })}>
                    {c.icon}<span>{c.label}</span>
                  </button>
                ))}
              </div>
              <p className={msg.hint ? 'is-hint' : ''}>{status}</p>
            </motion.div>
          ) : (
            <motion.p key={mode === 'msg' ? `msg-${msg.step}` : mode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={SPRING}>{status}</motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Barra pegada al teclado */}
      <div className="relax-toolbar">
        <p className="note-label relax-label">Un respiro</p>
        <div className="relax-controls">
          <div className="relax-modes" role="group" aria-label="Modo del teclado">
            {[['msg', 'Escríbeme'], ['game', 'Reto']].map(([id, label]) => (
              <button key={id} type="button" aria-pressed={mode === id} onMouseDown={e => e.preventDefault()} onClick={() => dispatch({ type: 'mode', mode: id })}>
                {mode === id && <motion.span layoutId="relax-mode-pill" className="relax-mode-pill" transition={SPRING} />}
                <span>{label}</span>
              </button>
            ))}
          </div>
          <button type="button" className="relax-sound" onMouseDown={e => e.preventDefault()} onClick={toggleSound} aria-pressed={sound} aria-label={sound ? 'Silenciar teclado' : 'Activar sonido del teclado'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M11 5 6 9H3v6h3l5 4V5Z" />
              {sound ? <><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M18.5 5.5a9 9 0 0 1 0 13" /></> : <path d="m16 9 5 6m0-6-5 6" />}
            </svg>
          </button>
        </div>
      </div>

      <div className="relax-stage" aria-hidden="true">
        <Keypad pressed={pressed} tapDown={tapDown} tapUp={tapUp} shift={shift} eraseMod={eraseMod} />
      </div>
    </div>
  );
}

function Key({ code, w, className = '', align = 'center', children, pressed, tapDown, tapUp, active }) {
  const down = (code && pressed.has(code)) || active;
  return (
    <div
      className={`kb-key kb-align-${align} ${down ? 'is-down' : ''} ${className}`}
      style={w ? { width: w } : undefined}
      onPointerDown={code ? e => { e.preventDefault(); tapDown(code); } : undefined}
      onPointerUp={code ? () => tapUp(code) : undefined}
      onPointerLeave={code ? () => tapUp(code) : undefined}
      onPointerCancel={code ? () => tapUp(code) : undefined}
    >
      {children}
    </div>
  );
}

const Row = ({ children }) => <div className="kb-row">{children}</div>;

function Keypad(props) {
  const k = (code, children, extra = {}) => <Key key={code} code={code} {...props} {...extra}>{children}</Key>;
  const dual = (top, bottom) => <><span>{top}</span><span>{bottom}</span></>;
  const { shift: shiftOn, eraseMod } = props;
  return (
    <div className="kb-deck">
      <Row>
        {k('Escape', 'esc', { w: 40, align: 'start' })}
        {Array.from({ length: 12 }, (_, i) => k(`F${i + 1}`, `F${i + 1}`, { className: 'kb-fn' }))}
        <Key {...props}><span className="kb-touchid" /></Key>
      </Row>
      <Row>
        {k('Backquote', dual('~', '`'))}
        {[['!', 1], ['@', 2], ['#', 3], ['$', 4], ['%', 5], ['^', 6], ['&', 7], ['*', 8], ['(', 9], [')', 0]].map(([t, d]) => k(`Digit${d}`, dual(t, d)))}
        {k('Minus', dual('_', '–'))}
        {k('Equal', dual('+', '='))}
        {k('Backspace', 'delete', { w: 40, align: 'end' })}
      </Row>
      <Row>
        {k('Tab', 'tab', { w: 40, align: 'start' })}
        {'QWERTYUIOP'.split('').map(l => k(`Key${l}`, l, { className: 'kb-letter' }))}
        {k('BracketLeft', dual('{', '['))}
        {k('BracketRight', dual('}', ']'))}
        {k('Backslash', dual('|', '\\'))}
      </Row>
      <Row>
        {k('CapsLock', 'caps lock', { w: 44.8, align: 'start' })}
        {'ASDFGHJKL'.split('').map(l => k(`Key${l}`, l, { className: 'kb-letter' }))}
        {k('Semicolon', dual(':', ';'))}
        {k('Quote', dual('"', "'"))}
        {k('Enter', 'return', { w: 45.6, align: 'end' })}
      </Row>
      <Row>
        {k('ShiftLeft', 'shift', { w: 58.4, align: 'start', active: shiftOn })}
        {'ZXCVBNM'.split('').map(l => k(`Key${l}`, l, { className: 'kb-letter' }))}
        {k('Comma', dual('<', ','))}
        {k('Period', dual('>', '.'))}
        {k('Slash', dual('?', '/'))}
        {k('ShiftRight', 'shift', { w: 58.4, align: 'end', active: shiftOn })}
      </Row>
      <Row>
        {k('Fn', dual('fn', '◎'), { align: 'mod' })}
        {k('ControlLeft', dual('⌃', 'control'), { align: 'mod', active: eraseMod === 'word' })}
        {k('AltLeft', dual('⌥', 'option'), { align: 'mod', active: eraseMod === 'word' })}
        {k('MetaLeft', dual('⌘', 'command'), { w: 32, align: 'mod', active: eraseMod === 'all' })}
        {k('Space', null, { w: 131.2 })}
        {k('MetaRight', dual('⌘', 'command'), { w: 32, align: 'mod', active: eraseMod === 'all' })}
        {k('AltRight', dual('⌥', 'option'), { align: 'mod', active: eraseMod === 'word' })}
        <div className="kb-arrows">
          {k('ArrowLeft', '◀', { className: 'kb-arrow' })}
          <div className="kb-arrows-col">
            {k('ArrowUp', '▲', { className: 'kb-arrow kb-half' })}
            {k('ArrowDown', '▼', { className: 'kb-arrow kb-half' })}
          </div>
          {k('ArrowRight', '▶', { className: 'kb-arrow' })}
        </div>
      </Row>
    </div>
  );
}
