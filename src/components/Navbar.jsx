import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  { id: "inicio", label: "Inicio", path: "/", Icon: HomeIcon },
  { id: "proyectos", label: "Proyectos", path: "/#proyectos", Icon: WorkIcon },
  { id: "yo", label: "Sobre mí", path: "/#yo", Icon: UserIcon },
  { id: "contacto", label: "Contacto", path: "/#footer", Icon: MailIcon },
];

const SPRING = { type: "spring", stiffness: 420, damping: 34 };

export default function AnimatedTabs() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const hash = window.location.hash;
    const match = TABS.find((t) => t.path === `/${hash}`);
    if (match) setActive(match.id);
  }, []);

  return (
    <motion.nav
      className="fixed bottom-6 inset-x-0 z-[100] flex md:hidden justify-center pointer-events-none"
      initial={{ opacity: 0, y: 44, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.15 }}
    >
      <ul
        className="pointer-events-auto flex items-center gap-1 p-2 rounded-full
                   backdrop-blur-md bg-white/75 dark:bg-[#1c1c1c]/85
                   border border-black/5 dark:border-white/10
                   shadow-2xl shadow-black/10 dark:shadow-black/50
                   transition-colors duration-500"
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
                className={`relative flex items-center h-11 rounded-full px-4 transition-colors duration-300 ${
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-terteary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-black/[0.06] dark:bg-white/10"
                    transition={SPRING}
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
                        transition={{ duration: 0.25, ease: "easeInOut" }}
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
    </motion.nav>
  );
}
