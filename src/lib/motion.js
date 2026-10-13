// Motion del design system ./mich (decidido 2026-10-10).
// Espejo en JS de los tokens de src/styles/product.css para framer-motion.
// Patrones: entrar, revelar, señalar, confirmar, cambiar. Rebote siempre en 0.

export const DUR = { fast: 0.15, base: 0.3, slow: 0.5, reveal: 0.7 };

/** Cambiar: pill del menú, toggles, swaps de ícono */
export const SPRING = { type: 'spring', duration: DUR.base, bounce: 0 };

/** Entrar: islas del menú, barra móvil */
export const SPRING_SLOW = { type: 'spring', duration: DUR.slow, bounce: 0 };

/** Entrar en grupo: escalonado entre elementos */
export const STAGGER = 0.12;
