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
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
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

/* -------------------------------------------------------------------------- */
/*  Tabs (máx. 4 para respetar el área táctil)                                */
/* -------------------------------------------------------------------------- */
const TABS = [
  { id: "inicio", label: "Inicio", path: "/#inicio", sectionId: "inicio", Icon: HomeIcon },
  { id: "proyectos", label: "Proyectos", path: "/#proyectos", sectionId: "proyectos", Icon: WorkIcon },
  { id: "yo", label: "Sobre mí", path: "/#yo", sectionId: "yo", Icon: UserIcon },
  { id: "contacto", label: "Contacto", path: "/#contacto", sectionId: "contacto", Icon: MailIcon },
];


export default function AnimatedTabs() {
  const reduced = useReducedMotionPreference();
  const [active, setActive] = useState("inicio");

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

    syncFromLocation();
    syncFromScroll();

    window.addEventListener("hashchange", syncFromLocation);
    window.addEventListener("scroll", syncFromScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", syncFromLocation);
      window.removeEventListener("scroll", syncFromScroll);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user"><motion.nav
      aria-label="Navegación móvil"
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] inset-x-0 z-[100] flex md:hidden justify-center px-4 pointer-events-none"
      initial={reduced ? false : { opacity: 0, y: 44, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={reduced ? { duration: 0 } : { ...SPRING, delay: .15 }}
    >
      <ul
        className="pointer-events-auto flex max-w-full items-center gap-1 overflow-hidden p-2 rounded-full
                   backdrop-blur-md bg-surface-glass
                   border border-line-subtle dark:border-line
                   shadow-2xl shadow-black/10 dark:shadow-black/50
                   transition-colors duration-base"
      >
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          const { Icon } = tab;
          const onClick = () => setActive(tab.id);
          return (
            <li key={tab.id}>
              <a
                href={tab.path}
                onClick={onClick}
                aria-label={tab.label}
                aria-current={isActive ? "page" : undefined}
                className={`relative flex items-center h-11 rounded-full px-3 xs:px-4 transition-colors duration-base ${
                  isActive
                    ? "text-ink"
                    : "text-muted"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-black/[0.06] dark:bg-white/10"
                    transition={reduced ? { duration: 0 } : SPRING}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon />
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.span
                        key="label"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: reduced ? 0 : DUR.fast, ease: "easeInOut" }}
                        className="text-sm font-medium whitespace-nowrap overflow-hidden"
                      >
                        {tab.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav></MotionConfig>
  );
}
