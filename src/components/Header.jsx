import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./Themetoggle";

/* -------------------------------------------------------------------------- */
/*  Iconos de línea (trazo fino, 16px para acompañar la barra compacta)       */
/* -------------------------------------------------------------------------- */
const iconBase = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const MailIcon = (p) => (
  <svg {...iconBase} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*  Config de navegación (sitio de una página → anclas)                       */
/* -------------------------------------------------------------------------- */
const LINKS = [
  { id: "inicio", label: "Inicio", path: "/" },
  { id: "proyectos", label: "Proyectos", path: "/#proyectos" },
  { id: "yo", label: "Sobre mí", path: "/#yo" },
];

const SPRING = { type: "spring", stiffness: 380, damping: 30 };

// Base compartida de cada "isla".
const ISLAND =
  "rounded-full backdrop-blur-md bg-white/70 dark:bg-[#1c1c1c]/70 " +
  "border border-black/5 dark:border-white/10 " +
  "shadow-lg shadow-black/5 dark:shadow-black/40 " +
  "transition-colors duration-500";

// Píldora gris de seguimiento (única, compartida entre islas via layoutId).
const Pill = () => (
  <motion.span
    layoutId="nav-pill"
    className="absolute inset-0 rounded-full bg-black/[0.06] dark:bg-white/10"
    transition={SPRING}
  />
);

/* -------------------------------------------------------------------------- */
/*  Animación de carga "gotas": las islas nacen unidas al centro y se separan */
/* -------------------------------------------------------------------------- */
const groupVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

// dir: -1 izquierda, 0 centro, +1 derecha → arrancan convergidas hacia el centro
const islandVariants = {
  hidden: (dir) => ({ opacity: 0, x: dir * 64, scale: 0.8, filter: "blur(6px)" }),
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 240, damping: 20 },
  },
};

export default function Header() {
  const [active, setActive] = useState("inicio");
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    const hash = window.location.hash;
    const match =
      LINKS.find((l) => l.path === `/${hash}`) ||
      LINKS.find((l) => (l.path === "/" ? path === "/" : path.startsWith(l.path)));
    if (match) setActive(match.id);
  }, []);

  // Qué link muestra la píldora deslizante: el hovered, o el activo si no hay hover.
  const highlighted = hover ?? active;

  return (
    <>
      {/* ------------------------------ DESKTOP ------------------------------ */}
      <div className="fixed top-8 inset-x-0 z-[100] hidden md:flex justify-center pointer-events-none px-6">
        <motion.nav
          className="flex items-center gap-2.5 pointer-events-auto"
          variants={groupVariants}
          initial="hidden"
          animate="show"
          onMouseLeave={() => setHover(null)}
        >
          {/* Isla izquierda: logo */}
          <motion.a
            href="/"
            aria-label="Mich — inicio"
            custom={-1}
            variants={islandVariants}
            onMouseEnter={() => setHover("logo")}
            className={`${ISLAND} h-11 px-2 flex items-center`}
          >
            <span className="relative flex items-center h-8 px-3 rounded-full">
              {highlighted === "logo" && <Pill />}
              <span className="relative z-10 font-ClashDisplay font-semibold text-base text-gray-800 dark:text-secondary">
                ./mich
              </span>
            </span>
          </motion.a>

          {/* Isla central: links */}
          <motion.div
            custom={0}
            variants={islandVariants}
            className={`${ISLAND} h-11 px-1.5 flex items-center gap-0.5`}
          >
            {LINKS.map((link) => {
              const isOn = highlighted === link.id;
              return (
                <a
                  key={link.id}
                  href={link.path}
                  onMouseEnter={() => setHover(link.id)}
                  onClick={() => setActive(link.id)}
                  className={`relative flex items-center h-8 px-4 text-xs font-medium uppercase tracking-wide rounded-full transition-colors duration-300 ${
                    isOn
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-500 dark:text-terteary hover:text-gray-800 dark:hover:text-secondary"
                  }`}
                >
                  {isOn && <Pill />}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </motion.div>

          {/* Isla derecha: CTA contacto + toggle de tema */}
          <motion.div
            custom={1}
            variants={islandVariants}
            className={`${ISLAND} h-11 pl-2 pr-1.5 flex items-center gap-1`}
          >
            <a
              href="/#footer"
              onMouseEnter={() => setHover("contacto")}
              className={`relative flex items-center gap-2 h-8 px-3 rounded-full text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                highlighted === "contacto"
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-700 dark:text-secondary hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {highlighted === "contacto" && <Pill />}
              <span className="relative z-10 flex items-center gap-2">
                <MailIcon />
                Contáctame
              </span>
            </a>
            <span className="w-px h-5 bg-black/10 dark:bg-white/10" />
            <div
              onMouseEnter={() => setHover("toggle")}
              className="relative flex items-center justify-center h-8 w-8 rounded-full"
            >
              {highlighted === "toggle" && <Pill />}
              <div className="relative z-10">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </motion.nav>
      </div>

      {/* ------------------------------ MOBILE (top) ------------------------- */}
      <motion.div
        className="fixed top-4 inset-x-0 z-[100] flex md:hidden items-center justify-between px-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 24, delay: 0.1 }}
      >
        <a
          href="/"
          aria-label="Mich — inicio"
          className="font-ClashDisplay font-semibold text-lg text-gray-800 dark:text-secondary"
        >
          ./mich
        </a>
        <ThemeToggle />
      </motion.div>
    </>
  );
}
