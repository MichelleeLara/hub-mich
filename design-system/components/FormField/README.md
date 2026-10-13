# FormField

Campo de formulario del brief: label arriba, input en `surface` y foco en `accent`.

- Label `small` 500, `space-3` sobre el campo.
- Input: padding 14×16, `radius-sm`, borde 1px `muted`, fondo `surface`, texto `small` en `ink`, placeholder en `muted`.
- Foco: 2px de `accent` con 3px de separación (los botones usan 5px).
- Entre campos `space-5`; texto de ayuda `caption` en `muted` debajo.
- El formulario vive en un acordeón (`details`/`summary` de 76px, el "+" gira 45° al abrir) y se envía con un `.btn .btn-primary`.

El consumidor pone un `id` estable por campo, su `label for`, un placeholder con ejemplo real y la acción al enviar (en el sitio, armar el brief en el navegador; nada se envía a un servidor).
