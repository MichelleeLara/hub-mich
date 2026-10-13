# Hero · Retrato lateral

Composición elegida el 10 de octubre de 2026. Fuente: `src/components/Hero.astro`.

- Contenedor de 920px máximo, gutter del sistema; dos columnas desde 768px: texto flexible y retrato de 240×344px. Gap `space-7`.
- Nombre completo en dos líneas, ClashDisplay 600, mayúsculas, `clamp(42px, 6.6vw, 68px)`, altura de línea 1.06 y tracking −0.045em. Esta escala pertenece al Hero lateral, no sustituye los títulos de sección.
- Rol y disponibilidad: caption 500; descripción: body, altura de línea 1.7, ancho máximo 490px. Acciones con Button primario y secundario, alineadas a la izquierda y con ajuste de línea.
- Móvil: una columna, retrato de 112×152px arriba a la derecha, gap `space-5`, nombre `clamp(38px, 10vw, 60px)`; rol micro. Contenido en flujo normal, sin una altura de pantalla fija.
- Retrato: `radius-full`, `surface`, `line` y `shadow-lift`. Imagen WebP con `srcset`, tamaños explícitos y carga prioritaria.
- Se conserva la navegación en islas de escritorio y barra inferior móvil.
- Movimiento: flotado existente y parallax limitado a ±6px. Pausa global y preferencia de movimiento reducido se respetan. La posición del retrato permanece independiente de la del nombre.

Los tamaños internos anteriores son la especificación de este componente. Los colores, familias, espacios, radios, sombras y botones consumen los tokens existentes.
