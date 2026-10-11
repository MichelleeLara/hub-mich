# Navigation

Menú en islas flotantes en escritorio y barra inferior en móvil, con una pill que marca la sección activa.

- **Isla**: 44px de alto, `radius-full`, fondo `surface-glass` con `backdrop-blur`, borde `line-subtle` (en oscuro `line`) y `shadow-float`. Tres islas: wordmark `./mich` (ClashDisplay 600, 16px), enlaces, y contacto con los toggles de tema y movimiento.
- **Pill**: 32px de alto, `caption` 500 en mayúsculas con `0.025em`. El activo lleva un fondo negro al 6% (blanco al 10% en oscuro) que se desliza entre enlaces con el spring de 300ms. Inactivo en `muted`, activo en `ink`.
- **Barra móvil**: abajo, sobre el área segura; ítems de 44px con ícono de 20px; la etiqueta solo aparece en el activo.
- Entrada: las islas nacen juntas al centro y se separan (blur 6→0, scale .8→1, escalonado 120ms).

El consumidor define los enlaces (Inicio, Proyectos, Sobre mí) y marca el activo con `aria-current="page"`. En el sitio: `Header.jsx` y `Navbar.jsx` (framer-motion).
