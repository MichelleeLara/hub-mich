# ProofStrip

Franja de cifras de prueba: cada cifra es un enlace al caso que la respalda.

- Grid de 3 columnas entre dos divisores `line`; columnas separadas por un divisor vertical `line`. En móvil, una columna con divisores horizontales.
- Cifra `h3` en ClashDisplay; etiqueta `small` en `muted` a `space-2`; flecha ↗ en `muted` arriba a la derecha.
- Padding `space-6` por celda.
- Solo cifras que tienen un caso detrás. Nada de "10+ clientes felices".

Mismo lenguaje para los datos del caso de estudio (`CaseHero.astro`): un `dl` en 3 columnas, `dt` en `micro` mayúsculas `muted` y `dd` en `small` `ink`. En el sitio: `AboutStats.astro`.
