import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { DUR, SPRING } from "../lib/motion";

/* -------------------------------------------------------------------------- */
/*  Iconos de línea (coherentes con el header)                                */
/* -------------------------------------------------------------------------- */
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const HomeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
  </svg>
);
const WorkIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);
const UserIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
  </svg>
);
const MailIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const ChevronIcon = ({ direction = 'right', ...p }) => (
  <svg {...base} {...p}>
    <path d={direction === 'left' ? 'm15 18-6-6 6-6' : 'm9 18 6-6-6-6'} />
  </svg>
);
const SparkIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
    <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
  </svg>
);
const BrowserIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 8h18M7 6h.01M10 6h.01" />
  </svg>
);
const FlowIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="6" height="6" rx="1.5" />
    <rect x="15" y="15" width="6" height="6" rx="1.5" />
    <path d="M9 6h3a3 3 0 0 1 3 3v6M12 18H9a3 3 0 0 1-3-3V9" />
  </svg>
);
const VideoIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="6" width="12" height="12" rx="3" />
    <path d="m15 10 5-3v10l-5-3" />
  </svg>
);
const WhatsAppIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" />
    <path d="M9 8.5c.4 2.5 2 4 4.5 4.5M13.5 13l1.5-1" />
  </svg>
);
const LinkedInIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M8 10v6M8 7.5v.01M12 16v-3.5a2.5 2.5 0 0 1 5 0V16M12 10v6" />
  </svg>
);

const SERVICE_ICONS = { spark: SparkIcon, browser: BrowserIcon, flow: FlowIcon };

/* -------------------------------------------------------------------------- */
/*  Tabs (máx. 4 para respetar el área táctil)                                */
/* -------------------------------------------------------------------------- */
const TABS = [
  { id: "inicio", label: "Inicio", path: "/#inicio", sectionId: "inicio", Icon: HomeIcon },
  { id: "proyectos", label: "Proyectos", path: "/#proyectos", sectionId: "proyectos", Icon: WorkIcon },
  { id: "yo", label: "Sobre mí", path: "/#yo", sectionId: "yo", Icon: UserIcon },
  { id: "contacto", label: "Contacto", path: "/#contacto", sectionId: "contacto", Icon: MailIcon },
];

const CONTACT_ACTIONS = [
  { label: 'Agendar', href: 'mailto:mich.ia@hotmail.com?subject=Agendemos%20una%20videollamada', Icon: VideoIcon },
  { label: 'WhatsApp', href: 'https://wa.me/525578934420', Icon: WhatsAppIcon, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michelle-rodriguez-lara/', Icon: LinkedInIcon, external: true },
];


export default function AnimatedTabs() {
  const reduced = useReducedMotionPreference();
  const [active, setActive] = useState("inicio");
  const [context, setContext] = useState(null);

  useEffect(() => {
    const syncFromLocation = () => {
      const path = window.location.pathname.replace(/\/$/, "") || "/";
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        const byHash = TABS.find((tab) => tab.sectionId === hash);
        if (byHash) setActive(byHash.id);
        return;
      }

      if (path.startsWith("/proyectos")) {
        setActive("proyectos");
        return;
      }

      setActive("inicio");
    };

    let scrollFrame = 0;
    const syncFromScroll = () => {
      const path = window.location.pathname.replace(/\/$/, "") || "/";
      if (path !== "/") return;

      const current = TABS
        .map((tab) => {
          const node = document.getElementById(tab.sectionId);
          if (!node) return null;
          return {
            id: tab.id,
            top: node.getBoundingClientRect().top,
          };
        })
        .filter((item) => item && item.top <= 120)
        .sort((a, b) => b.top - a.top)[0];

      if (current) setActive(current.id);
    };

    const queueScroll = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(() => { scrollFrame = 0; syncFromScroll(); });
    };
    syncFromLocation();
    syncFromScroll();

    window.addEventListener("hashchange", syncFromLocation);
    window.addEventListener("scroll", queueScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", syncFromLocation);
      window.removeEventListener("scroll", queueScroll);
      cancelAnimationFrame(scrollFrame);
    };
  }, []);

  useEffect(() => {
    let cleanupContext = () => {};
    const setupContext = () => {
      const getSections = () => [...document.querySelectorAll('[data-context-stepper], [data-contact-assistant]')];

      const readContext = (section) => {
        if (section.hasAttribute('data-contact-assistant')) {
          return {
            type: 'contact',
            sectionId: section.id,
            title: section.dataset.contextTitle || 'Contacto',
            steps: [],
            icons: [],
            index: 0,
          };
        }
        let steps = [];
        let icons = [];
        try { steps = JSON.parse(section.dataset.contextSteps || '[]'); } catch {}
        try { icons = JSON.parse(section.dataset.contextIcons || '[]'); } catch {}
        return {
          type: 'steps',
          sectionId: section.id,
          title: section.dataset.contextTitle || 'Sección',
          steps,
          icons,
          index: Number(section.dataset.contextIndex || 0),
        };
      };
      const update = (event) => setContext((current) => {
        if (!current || current.type !== 'steps' || current.sectionId !== event.detail?.sectionId) return current;
        return { ...current, index: event.detail.index };
      });
      const syncContext = () => {
        const sections = getSections();
        const upperGuide = window.innerHeight * .18;
        const lowerGuide = window.innerHeight * .58;
        const visibleSection = sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top < lowerGuide && rect.bottom > upperGuide;
        });
        const next = visibleSection ? readContext(visibleSection) : null;
        setContext((current) => {
          if (!next) return current ? null : current;
          if (current?.sectionId === next.sectionId && current.index === next.index) return current;
          return next;
        });
      };

      // Un cálculo por frame como máximo, solo cuando hay scroll o resize.
      let frame = 0;
      const scheduleSync = () => {
        if (frame) return;
        frame = window.requestAnimationFrame(() => { frame = 0; syncContext(); });
      };

      syncContext();
      window.addEventListener('scroll', scheduleSync, { passive: true });
      window.addEventListener('resize', scheduleSync);
      window.addEventListener('context-stepper:update', update);
      cleanupContext = () => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener('scroll', scheduleSync);
        window.removeEventListener('resize', scheduleSync);
        window.removeEventListener('context-stepper:update', update);
      };
    };

    setupContext();
    return () => {
      cleanupContext();
    };
  }, []);

  const selectContextStep = (index) => {
    if (!context || context.type !== 'steps') return;
    const section = document.getElementById(context.sectionId);
    section?.dispatchEvent(new CustomEvent('context-stepper:select', { detail: { index } }));
  };

  const moveContextStep = (direction) => {
    if (context?.type !== 'steps' || !context.steps.length) return;
    selectContextStep((context.index + direction + context.steps.length) % context.steps.length);
  };

  const ActiveServiceIcon = context?.type === 'steps'
    ? (SERVICE_ICONS[context.icons[context.index]] || SparkIcon)
    : null;

  return (
    <MotionConfig reducedMotion="user"><motion.nav
      aria-label="Navegación flotante"
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] md:bottom-5 inset-x-0 z-[100] flex justify-center px-3 md:px-6 pointer-events-none"
      initial={reduced ? false : { opacity: 0, y: 44, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={reduced ? { duration: 0 } : { ...SPRING, delay: .15 }}
    >
      <div className="pointer-events-auto relative h-[68px] w-full max-w-[366px] overflow-hidden rounded-[22px] border border-line-subtle dark:border-line bg-surface-glass p-1.5 shadow-float backdrop-blur-md transition-colors duration-base md:hidden">
          {context?.type === 'steps' ? (
            <motion.ul
              key={`context-${context.sectionId}`}
              aria-label={`Pasos de ${context.title}`}
              className="absolute inset-1.5 grid grid-cols-4 gap-1"
              initial={reduced ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduced ? 0 : DUR.fast }}
            >
              <li className="min-w-0">
                <a href="/#inicio" aria-label="Volver al inicio" className="group relative flex h-full w-full touch-manipulation flex-col items-center justify-center gap-0.5 rounded-[16px] text-muted transition-[color,background-color,transform] duration-150 hover:bg-black/[0.035] hover:text-ink active:scale-[.97] dark:hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent">
                  <HomeIcon className="h-[18px] w-[18px]" />
                  <span className="text-[10px] font-medium">Inicio</span>
                </a>
              </li>
              {context.steps.map((step, index) => {
                const isActive = context.index === index;
                return (
                  <li key={step} className="min-w-0">
                    <button
                      type="button"
                      onClick={() => selectContextStep(index)}
                      aria-label={`Paso ${index + 1}: ${step}`}
                      aria-current={isActive ? 'step' : undefined}
                      className={`group relative flex h-full w-full touch-manipulation flex-col items-center justify-center gap-0.5 rounded-[16px] px-1.5 transition-[color,background-color,transform] duration-150 hover:bg-black/[0.035] hover:text-ink active:scale-[.97] dark:hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent ${isActive ? 'text-ink' : 'text-muted'}`}
                    >
                      {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-[16px] bg-black/[0.065] dark:bg-white/10" transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 520, damping: 38, mass: .7 }} />}
                      <span className="relative z-10 font-mono text-[9px] leading-none">0{index + 1}</span>
                      <span className="relative z-10 block max-w-full truncate text-[10px] font-medium leading-tight">{step}</span>
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          ) : context?.type === 'contact' ? (
            <motion.ul
              key="contact-actions"
              aria-label="Opciones de contacto"
              className="absolute inset-1.5 grid grid-cols-4 gap-1"
              initial={reduced ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduced ? 0 : DUR.fast, ease: [0.16, 1, 0.3, 1] }}
            >
              <li className="min-w-0">
                <a href="/#inicio" aria-label="Volver al inicio" className="flex h-full w-full touch-manipulation flex-col items-center justify-center gap-0.5 rounded-[16px] text-muted transition-[color,background-color,transform] duration-150 hover:bg-black/[0.035] hover:text-ink active:scale-[.97] dark:hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent">
                  <HomeIcon className="h-[18px] w-[18px]" />
                  <span className="text-[10px] font-medium">Inicio</span>
                </a>
              </li>
              {CONTACT_ACTIONS.map(({ label, href, Icon, external }) => (
                <li key={label} className="min-w-0">
                  <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="flex h-full w-full touch-manipulation flex-col items-center justify-center gap-0.5 rounded-[16px] text-muted transition-[color,background-color,transform] duration-150 hover:bg-black/[0.035] hover:text-ink active:scale-[.97] dark:hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent" aria-label={`Contactar por ${label}`}>
                    <Icon className="h-[18px] w-[18px]" />
                    <span className="block max-w-full truncate text-[10px] font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </motion.ul>
          ) : (
            <motion.ul
              key="global-navigation"
              className="absolute inset-1.5 grid grid-cols-4 gap-1"
              initial={reduced ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduced ? 0 : DUR.fast }}
            >
              {TABS.map((tab) => {
                const isActive = active === tab.id;
                const { Icon } = tab;
                return (
                  <li key={tab.id} className="min-w-0">
                    <a
                      href={tab.path}
                      onClick={() => setActive(tab.id)}
                      aria-label={tab.label}
                      aria-current={isActive ? "page" : undefined}
                      className={`group relative flex h-full w-full touch-manipulation flex-col items-center justify-center gap-0.5 rounded-[16px] px-1.5 transition-[color,background-color,transform] duration-150 hover:bg-black/[0.035] hover:text-ink active:scale-[.97] dark:hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent ${isActive ? 'text-ink' : 'text-muted'}`}
                    >
                      {isActive && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-[16px] bg-black/[0.065] dark:bg-white/10" transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 520, damping: 38, mass: .7 }} />}
                      <Icon className="relative z-10 h-[18px] w-[18px]" />
                      <span className="relative z-10 block max-w-full truncate text-[10px] font-medium leading-tight">{tab.label}</span>
                    </a>
                  </li>
                );
              })}
            </motion.ul>
          )}
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {context?.type === 'steps' && ActiveServiceIcon ? (
          <motion.aside
            key={`desktop-steps-${context.sectionId}`}
            aria-label={`Asistente de ${context.title}`}
            className="pointer-events-auto hidden h-[68px] w-full max-w-[720px] grid-cols-[230px_minmax(0,1fr)_104px] items-center gap-5 rounded-full border border-line-subtle bg-surface-glass px-3 py-2 shadow-float backdrop-blur-md dark:border-line md:grid"
            initial={reduced ? false : { opacity: 0, y: 18, scale: .985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 10, scale: .99, transition: { duration: .18, ease: [0.4, 0, 1, 1] } }}
            transition={reduced ? { duration: 0 } : { duration: .3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex min-w-0 items-center gap-3 border-r border-line px-2 pr-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/[0.055] text-accent dark:bg-white/10"><ActiveServiceIcon className="h-5 w-5" /></span>
              <div className="min-w-0">
                <p className="m-0 font-mono text-[9px] uppercase tracking-[.14em] text-muted">Servicio 0{context.index + 1}</p>
                <p className="mt-1 mb-0 truncate text-sm font-semibold text-ink">{context.steps[context.index]}</p>
              </div>
            </div>

            <div className="min-w-0" aria-live="polite">
              <div className="mb-2 flex items-center justify-between gap-4">
                <p className="m-0 truncate text-xs text-muted">Selecciona una etapa o usa las flechas</p>
                <span className="shrink-0 font-mono text-[10px] text-muted">0{context.index + 1} / 0{context.steps.length}</span>
              </div>
              <div className="grid grid-cols-3 gap-2" aria-label="Progreso del recorrido">
                {context.steps.map((step, index) => (
                  <button key={step} type="button" onClick={() => selectContextStep(index)} aria-label={`Ir al paso ${index + 1}: ${step}`} aria-current={context.index === index ? 'step' : undefined} className="group relative h-3 touch-manipulation rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                    <span className={`absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full transition-[height,background-color] duration-150 group-hover:h-1.5 ${index <= context.index ? 'bg-ink' : 'bg-line'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 border-l border-line pl-3">
              <button type="button" onClick={() => moveContextStep(-1)} aria-label="Paso anterior" className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full text-muted transition-[color,background-color,transform] duration-150 hover:bg-black/[0.05] hover:text-ink active:scale-[.94] dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><ChevronIcon direction="left" /></button>
              <button type="button" onClick={() => moveContextStep(1)} aria-label="Paso siguiente" className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-full bg-ink text-bg transition-[opacity,transform] duration-150 hover:opacity-85 active:scale-[.94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><ChevronIcon /></button>
            </div>
          </motion.aside>
        ) : context?.type === 'contact' ? (
          <motion.aside
            key="desktop-contact-actions"
            aria-label="Asistente de Contacto"
            className="pointer-events-auto hidden h-[68px] w-full max-w-[660px] grid-cols-[1fr_auto] items-center gap-5 rounded-full border border-line-subtle bg-surface-glass px-3 py-2 shadow-float backdrop-blur-md dark:border-line md:grid"
            initial={reduced ? false : { opacity: 0, y: 18, scale: .985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 10, scale: .99, transition: { duration: .18, ease: [0.4, 0, 1, 1] } }}
            transition={reduced ? { duration: 0 } : { duration: .3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex min-w-0 items-center gap-3 px-2">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/[0.055] text-accent dark:bg-white/10"><MailIcon className="h-5 w-5" /></span>
              <div className="min-w-0"><p className="m-0 font-mono text-[9px] uppercase tracking-[.14em] text-muted">Siguiente paso</p><p className="mt-1 mb-0 truncate text-sm font-semibold text-ink">Conversemos sobre tu idea</p></div>
            </div>
            <div className="flex items-center gap-2">
              {CONTACT_ACTIONS.map(({ label, href, Icon, external }) => (
                <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} aria-label={`Contactar por ${label}`} className="flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted transition-[color,background-color,transform] duration-150 hover:bg-black/[0.055] hover:text-ink active:scale-[.97] dark:hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><Icon className="h-[18px] w-[18px]" /><span>{label}</span></a>
              ))}
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </motion.nav></MotionConfig>
  );
}
