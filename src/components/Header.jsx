import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';
import React, { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import ThemeToggle from "./Themetoggle";
import MotionToggle from "./MotionToggle";

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
  { id: "inicio", label: "Inicio", path: "/#inicio", sectionId: "inicio" },
  { id: "proyectos", label: "Proyectos", path: "/#proyectos", sectionId: "proyectos" },
  { id: "yo", label: "Sobre mí", path: "/#yo", sectionId: "yo" },
];

const SECTIONS = [
  ...LINKS,
  { id: "contacto", sectionId: "contacto" },
];

const SPRING = { type: "spring", duration: .3, bounce: 0 };

// Base compartida de cada "isla".
const ISLAND =
  "rounded-full backdrop-blur-md bg-surface-glass " +
  "border border-line-subtle dark:border-line " +
  "shadow-lg shadow-black/5 dark:shadow-black/40 " +
  "transition-colors duration-base";

// Píldora gris de seguimiento (única, compartida entre islas via layoutId).
const Pill = ({ reduced }) => (
  <motion.span
    layoutId="nav-pill"
    className="absolute inset-0 rounded-full bg-black/[0.06] dark:bg-white/10"
    transition={reduced ? { duration: 0 } : SPRING}
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
    transition: { type: "spring", duration: .5, bounce: 0 },
  },
};

export default function Header() {
  const reduced = useReducedMotionPreference();
  const [active, setActive] = useState("inicio");
  const [hover, setHover] = useState(null);

  const reloadHome = (event) => {
    event.preventDefault();

    if (window.location.pathname === "/" && !window.location.search) {
      window.location.reload();
      return;
    }

    window.location.assign("/");
  };

  useEffect(() => {
    const syncFromLocation = () => {
      const path = window.location.pathname.replace(/\/$/, "") || "/";
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        const byHash = SECTIONS.find((section) => section.sectionId === hash);
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

      const current = SECTIONS
        .map((section) => {
          const node = document.getElementById(section.sectionId);
          if (!node) return null;
          return {
            id: section.id,
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

  // Qué link muestra la píldora deslizante: el hovered, o el activo si no hay hover.
  const highlighted = hover ?? active;

  return (
    <MotionConfig reducedMotion="user">
      {/* ------------------------------ DESKTOP ------------------------------ */}
      <div className="fixed top-8 inset-x-0 z-[100] hidden md:flex justify-center pointer-events-none px-6">
        <motion.nav
          aria-label="Navegación principal"
          className="flex items-center gap-2.5 pointer-events-auto"
          variants={reduced ? { hidden: {}, show: { transition: { duration: 0 } } } : groupVariants}
          initial={reduced ? false : "hidden"}
          animate="show"
          onMouseLeave={() => setHover(null)}
        >
          {/* Isla izquierda: logo */}
          <motion.a
            href="/"
            aria-label="Mich — inicio"
            custom={-1}
            variants={reduced ? { hidden: { opacity: 0 }, show: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0 } } } : islandVariants}
            onMouseEnter={() => setHover("logo")}
            onClick={reloadHome}
            className={`${ISLAND} h-11 px-2 flex items-center`}
          >
            <span className="relative flex items-center h-8 px-3 rounded-full">
              {highlighted === "logo" && <Pill reduced={reduced} />}
              <span className="relative z-10 font-ClashDisplay font-semibold text-base text-ink">
                ./mich
              </span>
            </span>
          </motion.a>

          {/* Isla central: links */}
          <motion.div
            custom={0}
            variants={reduced ? { hidden: { opacity: 0 }, show: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0 } } } : islandVariants}
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
                  aria-current={active === link.id ? "page" : undefined}
                  className={`relative flex items-center h-8 px-4 text-xs font-medium uppercase tracking-wide rounded-full transition-colors duration-base ${
                    isOn
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {isOn && <Pill reduced={reduced} />}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </motion.div>

          {/* Isla derecha: CTA contacto + toggle de tema */}
          <motion.div
            custom={1}
            variants={reduced ? { hidden: { opacity: 0 }, show: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0 } } } : islandVariants}
            className={`${ISLAND} h-11 pl-2 pr-1.5 flex items-center gap-1`}
          >
            <a
              href="/#contacto"
              onMouseEnter={() => setHover("contacto")}
              aria-current={active === "contacto" ? "page" : undefined}
              className={`relative flex items-center gap-2 h-8 px-3 rounded-full text-xs font-medium uppercase tracking-wide transition-colors duration-base ${
                highlighted === "contacto"
                  ? "text-ink"
                  : "text-ink"
              }`}
            >
              {highlighted === "contacto" && <Pill reduced={reduced} />}
              <span className="relative z-10 flex items-center gap-2">
                <MailIcon />
                Contáctame
              </span>
            </a>
            <span className="w-px h-5 bg-line" />
            <MotionToggle />
            <div
              onMouseEnter={() => setHover("toggle")}
              className="relative flex items-center justify-center h-11 w-11 rounded-full"
            >
              {highlighted === "toggle" && <Pill reduced={reduced} />}
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
        initial={reduced ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: reduced ? 0 : .3, bounce: 0, delay: reduced ? 0 : .1 }}
      >
        <a
          href="/"
          aria-label="Mich — inicio"
          onClick={reloadHome}
          className="font-ClashDisplay font-semibold text-lg text-ink"
        >
          ./mich
        </a>
        <div className="flex items-center rounded-full bg-surface-glass backdrop-blur-md"><MotionToggle /><ThemeToggle /></div>
      </motion.div>
    </MotionConfig>
  );
}
