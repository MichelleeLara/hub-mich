// Clínica Vecina · interacciones. Todo funciona sin JS; esto solo agrega movimiento y datos en vivo.
const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Revelar al entrar en pantalla
const revelar = new IntersectionObserver((entradas) => {
  for (const e of entradas) {
    if (e.isIntersecting) {
      e.target.classList.add('visto');
      revelar.unobserve(e.target);
    }
  }
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
document.querySelectorAll('[data-revelar]').forEach((el) => revelar.observe(el));

// Header compacto al hacer scroll + botón flotante de WhatsApp
const header = document.getElementById('header');
const fab = document.querySelector('[data-fab]');
const hero = document.querySelector('.hero');
const cierre = document.getElementById('contacto');
let heroVisible = true;
let cierreVisible = false;
const actualizarFab = () => fab.classList.toggle('visible', !heroVisible && !cierreVisible);
new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; actualizarFab(); }, { threshold: 0.15 }).observe(hero);
new IntersectionObserver(([e]) => { cierreVisible = e.isIntersecting; actualizarFab(); }, { threshold: 0.2 }).observe(cierre);
const alScroll = () => header.classList.toggle('compacto', scrollY > 12);
addEventListener('scroll', alScroll, { passive: true });
alScroll();

// Sección activa en la navegación
const enlaces = [...document.querySelectorAll('.nav a')];
const secciones = enlaces.map((a) => document.querySelector(a.getAttribute('href')));
const navObs = new IntersectionObserver((entradas) => {
  for (const e of entradas) {
    if (!e.isIntersecting) continue;
    enlaces.forEach((a) => {
      const activo = a.getAttribute('href') === `#${e.target.id}`;
      a.classList.toggle('activo', activo);
      if (activo) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    });
  }
}, { rootMargin: '-45% 0px -50% 0px' });
secciones.forEach((s) => s && navObs.observe(s));

// Pasos de la primera visita: la línea avanza con el scroll
const lista = document.querySelector('[data-pasos]');
const pasos = [...document.querySelectorAll('[data-paso]')];
let pendiente = false;
const avanzar = () => {
  pendiente = false;
  const r = lista.getBoundingClientRect();
  const linea = innerHeight * 0.6;
  const avance = Math.min(1, Math.max(0, (linea - r.top) / r.height));
  lista.parentElement.style.setProperty('--avance', avance.toFixed(3));
  pasos.forEach((p) => p.classList.toggle('hecho', p.getBoundingClientRect().top + 24 < linea));
};
addEventListener('scroll', () => { if (!pendiente) { pendiente = true; requestAnimationFrame(avanzar); } }, { passive: true });
avanzar();

// Horario en vivo (hora de la Ciudad de México), se actualiza cada minuto
const partesCDMX = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Mexico_City', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' });
const DIAS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
const horario = (d) => (d === 0 ? [600, 840] : [540, 1200]); // domingo 10–14, resto 9–20
const hhmm = (m) => `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')}`;
const actualizarHorario = () => {
  const p = Object.fromEntries(partesCDMX.formatToParts(new Date()).map((x) => [x.type, x.value]));
  const dia = DIAS[p.weekday];
  const minutos = Number(p.hour) * 60 + Number(p.minute);
  const [abre, cierra] = horario(dia);
  const abierto = minutos >= abre && minutos < cierra;
  const soloUrgencias = !abierto && minutos >= abre && minutos < 1320;
  // Si ya pasó la hora de abrir, la próxima apertura es la de mañana
  const proxima = minutos < abre ? abre : horario((dia + 1) % 7)[0];
  document.querySelectorAll('[data-horario] .hoy').forEach((li) => li.classList.remove('hoy'));
  document.querySelector(`[data-horario] [data-dia="${dia}"]`)?.classList.add('hoy');
  document.querySelectorAll('[data-estado]').forEach((el) => {
    el.classList.toggle('cerrado', !abierto && !soloUrgencias);
    if (abierto) el.textContent = el.closest('.hero') ? 'Abierto · urgencias hasta 22:00' : 'Abierto ahora';
    else if (soloUrgencias) el.textContent = 'Solo urgencias hasta las 22:00';
    else el.textContent = `Cerrado · abrimos a las ${hhmm(proxima)}`;
  });
};
actualizarHorario();
setInterval(actualizarHorario, 60000);

// Pausar la cinta en movimiento
const cinta = document.querySelector('.cinta');
cinta.querySelector('.cinta-pausa').addEventListener('click', (e) => {
  const pausada = cinta.classList.toggle('pausada');
  e.currentTarget.setAttribute('aria-pressed', pausada);
  e.currentTarget.setAttribute('aria-label', pausada ? 'Reanudar la cinta' : 'Pausar la cinta en movimiento');
});

// Contadores: calificación y cifras del equipo
const formato = new Intl.NumberFormat('es-MX');
const contar = (el) => {
  const meta = parseFloat(el.dataset.contar);
  const decimales = el.dataset.contar.includes('.') ? 1 : 0;
  const sufijo = el.dataset.sufijo || '';
  const pinta = (v) => { el.textContent = (decimales ? v.toFixed(1) : formato.format(Math.round(v))) + sufijo; };
  if (quieto) return pinta(meta);
  pinta(0);
  const inicio = performance.now();
  const paso = (t) => {
    const k = Math.min(1, (t - inicio) / 1400);
    pinta(meta * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
};
const obsContar = new IntersectionObserver((entradas) => {
  for (const e of entradas) if (e.isIntersecting) { obsContar.unobserve(e.target); contar(e.target); }
}, { threshold: 0.6 });
document.querySelectorAll('[data-contar]').forEach((el) => obsContar.observe(el));

// Titular del hero palabra por palabra (solo el efecto visual; el texto se lee igual)
if (!quieto) {
  const h1 = document.querySelector('.hero .titular');
  h1.setAttribute('aria-label', h1.textContent);
  h1.innerHTML = h1.textContent.split(' ').map((w, i) => `<span class="palabra" aria-hidden="true" style="--i:${i}">${w}</span>`).join(' ');
}

// Destello que sigue al cursor en las tarjetas de servicio (solo mouse, un cálculo por cuadro)
document.querySelectorAll('.servicio').forEach((card) => {
  let rect = null;
  let cuadro = 0;
  card.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') rect = card.getBoundingClientRect(); });
  card.addEventListener('pointerleave', () => { rect = null; });
  card.addEventListener('pointermove', (e) => {
    if (!rect || cuadro) return;
    cuadro = requestAnimationFrame(() => {
      cuadro = 0;
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
});

// Rastro de huellitas: el elemento gráfico que acompaña todo el sitio y termina en el perro del cierre
const curvas = {
  s: 'M8 14 C 90 10, 70 92, 150 88 S 250 30, 292 70',
  lazo: 'M8 96 C 70 100, 120 70, 170 52 C 230 30, 236 96, 196 92 C 160 88, 190 20, 292 16',
  arco: 'M8 20 C 80 110, 210 110, 292 34',
  final: 'M292 14 C 230 6, 190 50, 140 82 S 50 120, 8 112',
};
const SVG = 'http://www.w3.org/2000/svg';
const huella = '<ellipse cx="0" cy="3.2" rx="5.4" ry="4.6"/><circle cx="-6" cy="-3" r="2.1"/><circle cx="-2.2" cy="-6.8" r="2.1"/><circle cx="2.2" cy="-6.8" r="2.1"/><circle cx="6" cy="-3" r="2.1"/>';
const verRastro = new IntersectionObserver((entradas) => {
  for (const e of entradas) if (e.isIntersecting) { e.target.classList.add('visto'); verRastro.unobserve(e.target); }
}, { threshold: 0.6 });
document.querySelectorAll('[data-rastro]').forEach((el) => {
  const svg = document.createElementNS(SVG, 'svg');
  svg.setAttribute('viewBox', '0 0 300 124');
  const guia = document.createElementNS(SVG, 'path');
  guia.setAttribute('d', curvas[el.dataset.rastro]);
  svg.append(guia);
  el.append(svg);
  const largo = guia.getTotalLength();
  const paso = 36;
  let i = 0;
  for (let d = 10; d < largo - 4; d += paso, i++) {
    const p = guia.getPointAtLength(d);
    const q = guia.getPointAtLength(Math.min(d + 1, largo));
    const ang = Math.atan2(q.y - p.y, q.x - p.x);
    const lado = i % 2 ? 8 : -8; // izquierda / derecha, como al caminar
    const x = p.x - Math.sin(ang) * lado;
    const y = p.y + Math.cos(ang) * lado;
    const g = document.createElementNS(SVG, 'g');
    g.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(ang * 180 / Math.PI + 90).toFixed(0)}) scale(1.05)`);
    g.innerHTML = `<g class="huella" style="--i:${i}">${huella}</g>`;
    svg.append(g);
  }
  guia.remove();
  if (quieto) el.classList.add('visto'); else verRastro.observe(el);
});
