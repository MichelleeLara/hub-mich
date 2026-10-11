# ProjectCard

Tarjeta de proyecto: foto a sangre con degradado, tags arriba y título abajo; toda la tarjeta enlaza al caso.

- `radius-lg`, proporción 1.25 (destacada 2.05, en móvil alto mínimo 350px).
- Oscura en ambos modos porque va sobre foto: fondo `#171717`, degradado a `#111`, texto blanco y meta en `#e0e0e0`. Son constantes del componente, no tokens de tema.
- Tags `.tag-photo` arriba a la derecha, a 24px del borde (16px en móvil), separados por `space-2`.
- Padding `space-6` (móvil `space-5`). Título `h3` en ClashDisplay; en la destacada, `h1`. Meta `small`; en la destacada, descripción `body` y estado en `micro` mayúsculas.
- Grid de 2 columnas con gap `space-6`; una sola en móvil.

El consumidor pone la foto (con `alt` descriptivo), los tags del proyecto, el título y la meta ("Firmware · Bego — 2025–26"). En el sitio vive en `ProjectsBento.astro`.
