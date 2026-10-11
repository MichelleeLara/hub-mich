# SurfaceCard

Tarjeta sobre `surface` para contenido que se lee: las tarjetas Problema, Solución y Resultado del caso, y el resultado del brief.

- Fondo `surface`, padding `space-6`, radio `radius-md` (paneles grandes `radius-lg`).
- Con elevación (`shadow-lift`) cuando se separa del fondo, como las tres tarjetas del caso; sin elevación cuando está dentro del flujo, como el resultado del brief.
- Ícono opcional de 20px en una caja de 40px, `radius-sm`, fondo `accent-soft` e ícono en `accent`.
- Eyebrow `micro` 600 en mayúsculas `muted`, título `lead` 650, texto `small` o `body` en `muted`.
- Variante panel oscuro: envolver en `.theme-dark` (tokens de oscuro en ambos modos), usado en la métrica destacada del caso.

El consumidor pone el eyebrow (si es una secuencia real, numerado), el título y el texto.
