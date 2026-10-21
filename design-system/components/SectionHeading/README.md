# SectionHeading

Abre cada sección: una etiqueta a mano en `accent` y un título `h2` en Inter Tight 650.

- Estructura: `.section-heading` > `.section-label` (anotación Rock Salt en gris) + `.section-title` (`h2`, ClashDisplay), con 14px entre ellos (12px en móvil).
- Variante `.section-heading-compact` usa `h2-compact` (footer).
- Del encabezado al contenido van `space-7` (48px).
- El consumidor pone la etiqueta (2–3 palabras) y el título (una frase con opinión, máximo dos líneas). El título lleva `id` si la sección se enlaza.

En el sitio es `src/components/SectionHeading.astro` con props `label`, `title`, `id` y `compact`.
