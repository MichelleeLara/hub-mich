import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SPRING } from '../lib/motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const reduced = useReducedMotionPreference();
  useEffect(() => {
    const sync = () => setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  const toggle = () => {
    const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    const style = document.createElement('style');
    style.textContent = '*:not(.theme-glyph):not(.theme-glyph *), *::before, *::after { transition: none !important; }';
    document.head.append(style);
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.style.colorScheme = next;
    try { localStorage.setItem('theme', next); } catch {}
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
