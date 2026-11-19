import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SPRING } from '../lib/motion';

// Dos estados visibles: "sistema" (sin valor guardado) y el contrario del sistema.
const systemDark = () => !matchMedia('(prefers-color-scheme: light)').matches;
// Copia en memoria: si localStorage está bloqueado, el override se respeta igual durante la sesión.
let memoryOverride;
const readStored = () => {
  try { const v = localStorage.getItem('theme'); return v === 'light' || v === 'dark' ? v : null; } catch { return memoryOverride ?? null; }
};
// Aplica el override (o "light dark" = sistema) al <meta> y a la clase .dark de Tailwind.
const applyScheme = (stored) => {
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) meta.content = stored ?? 'light dark';
  document.documentElement.classList.toggle('dark', stored ? stored === 'dark' : systemDark());
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const reduced = useReducedMotionPreference();
  useEffect(() => {
    const sync = () => setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    // Sin override, la página sigue los cambios del sistema en vivo.
    const media = matchMedia('(prefers-color-scheme: light)');
    const onSystem = () => { if (!readStored()) applyScheme(null); };
    // El override puede cambiar desde otra pestaña.
    const onStorage = (event) => { if (event.key === 'theme' || event.key === null) applyScheme(readStored()); };
    media.addEventListener('change', onSystem);
    window.addEventListener('storage', onStorage);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', onSystem);
      window.removeEventListener('storage', onStorage);
    };
  }, []);
  const toggle = () => {
    // Objetivo = lo contrario de lo que se ve ahora, no del sistema.
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    // Si coincide con el sistema, la persona deshace su ajuste: se borra el override.
    const stored = (next === 'dark') === systemDark() ? null : next;
    const style = document.createElement('style');
    style.textContent = '*:not(.theme-glyph):not(.theme-glyph *), *::before, *::after { transition: none !important; }';
    document.head.append(style);
    applyScheme(stored);
    memoryOverride = stored;
    try { stored ? localStorage.setItem('theme', stored) : localStorage.removeItem('theme'); } catch {}
    setTheme(next);
    void document.documentElement.offsetHeight;
    requestAnimationFrame(() => requestAnimationFrame(() => style.remove()));
  };
  return <motion.button type="button" onClick={toggle}
    aria-label={theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'}
    title={theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}
    className="theme-toggle relative flex items-center justify-center w-11 h-11 rounded-full text-ink"
    whileTap={reduced ? undefined : { scale: .96 }}>
    <AnimatePresence initial={false}>
      <motion.span key={theme} className="theme-glyph absolute flex items-center justify-center"
        initial={reduced ? { opacity: 0 } : { opacity: 0, scale: .25, filter: 'blur(4px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={reduced ? { opacity: 0 } : { opacity: 0, scale: .25, filter: 'blur(4px)' }}
        transition={SPRING}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {theme === 'dark' ? <><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></> : <path d="M20.8 13.4A9 9 0 0 1 10.6 3.2 9 9 0 1 0 20.8 13.4Z"/>}
        </svg>
      </motion.span>
    </AnimatePresence>
  </motion.button>;
}
