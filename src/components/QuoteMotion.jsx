import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Reference cadence: each 2px dot has a 0–6s rest and a 0–500ms blue flash.
export function DotField({ width = 160, height = 20, background = false, circle = false }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;
    let frame = 0, visible = true;
    const dots = [];
    let seed = width * 31 + height;
    const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const spacing = background ? 16 : 4;
    for (let y = 0; y < height; y += spacing) for (let x = 0; x < width; x += spacing) dots.push({ x, y, delay: random() * 6000, duration: random() * 500 });
    const draw = time => {
      ctx.clearRect(0, 0, width, height);
      const blue = getComputedStyle(canvas).getPropertyValue('--accent').trim();
      const ink = getComputedStyle(canvas).getPropertyValue('--ink').trim();
      for (const dot of dots) {
        const flashing = !reduced && time % (dot.delay + dot.duration + 1) > dot.delay;
        ctx.globalAlpha = flashing ? .39 : .06;
        ctx.fillStyle = flashing ? blue : ink;
        ctx.fillRect(dot.x, dot.y, 2, 2);
      }
      if (!reduced && visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const restart = () => { cancelAnimationFrame(frame); draw(performance.now()); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; restart(); });
    observer.observe(canvas);
    document.addEventListener('visibilitychange', restart);
    restart();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); document.removeEventListener('visibilitychange', restart); };
  }, [width, height, background, reduced]);
  return <canvas ref={ref} width={width} height={height} aria-hidden="true" className={`quote-dots ${background ? 'quote-dots-background' : ''} ${circle ? 'quote-dots-circle' : ''}`} />;
}

export function QuoteZone({ step, active, title, onSelect, children, className = '' }) {
  return <div className={`quote-zone ${className}`} data-active={active}>
    <button type="button" className="quote-zone-target" onClick={() => onSelect(step)} aria-label={`Editar ${title}`} aria-current={active ? 'step' : undefined} />
    {active && <div key={step} className="quote-visor" aria-hidden="true">{['tl', 'tr', 'bl', 'br'].map(corner => <span key={corner} className={`quote-corner ${corner}`}><i /></span>)}</div>}
    {children}
    <span className="quote-zone-tip" aria-hidden="true"><b>{step + 1}</b>{title}</span>
  </div>;
}

export function StepPanel({ children, step }) {
  const reduced = useReducedMotion();
  return <motion.div key={step} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .3, ease: 'easeIn' }}>{children}</motion.div>;
}
