import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SPRING } from '../lib/motion';

export default function MotionToggle() {
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotionPreference();
  useEffect(() => {
    const sync = () => setPaused(document.documentElement.classList.contains('motion-paused'));
    sync(); const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  const toggle = () => {
    const next = !paused;
    document.documentElement.classList.toggle('motion-paused', next);
    try { localStorage.setItem('motion', next ? 'paused' : 'on'); } catch {}
    document.dispatchEvent(new Event('motionchange'));
    setPaused(next);
  };
  return <motion.button type="button" onClick={toggle} aria-label={reduced ? 'Movimiento reducido por tu sistema' : paused ? 'Activar animaciones' : 'Pausar animaciones'} aria-pressed={!paused && !reduced} disabled={!!reduced}
    title={reduced ? 'Movimiento reducido por tu sistema' : paused ? 'Activar animaciones' : 'Pausar animaciones'}
    className="relative flex items-center justify-center w-11 h-11 rounded-full text-ink disabled:opacity-50"
    whileTap={reduced ? undefined : { scale: .96 }}>
    <AnimatePresence initial={false}><motion.span key={paused ? 'play' : 'pause'} className="absolute flex items-center justify-center"
      initial={reduced ? { opacity: 0 } : { opacity: 0, scale: .25, filter: 'blur(4px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} exit={reduced ? { opacity: 0 } : { opacity: 0, scale: .25, filter: 'blur(4px)' }} transition={SPRING}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {paused ? <path d="m9 5 11 7-11 7Z"/> : <><path d="M9 5v14M15 5v14"/></>}
      </svg>
    </motion.span></AnimatePresence>
  </motion.button>;
}
