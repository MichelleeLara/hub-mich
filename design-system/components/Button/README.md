# Button

Un solo botón con dos variantes, primario y secundario, más el enlace con flecha para acciones de lectura.

- **Primario** (`.btn .btn-primary`): fondo `ink`, texto `bg`. Una acción principal por bloque ("Ver proyectos", "Crear mi brief").
- **Secundario** (`.btn .btn-secondary`): borde `line` que pasa a `muted` en hover. Acción alternativa ("Leer mi CV").
- **Enlace con flecha** (`.text-link`): small 600, sin caja, mínimo 44px de alto. Para seguir leyendo ("Leer las decisiones").

Medidas: 48px de alto, padding 0×24, `radius-sm`, texto `small` 500, ícono de 16px con trazo 1.5 y gap 10.

Estados: hover mueve la flecha (`.btn-arrow`) 4px a la derecha en 300ms; foco con 2px de `accent` separado 5px; presionado `scale(.96)` en 150ms. Sin hover de color en el primario.

El consumidor pone el texto, el ícono opcional (SVG `aria-hidden`) y usa `<a>` si navega o `<button>` si actúa. Se invierte solo en modo oscuro: no lleva clases `dark:`.
