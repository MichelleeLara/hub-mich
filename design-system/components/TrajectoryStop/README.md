# TrajectoryStop

Una parada de la línea de tiempo de experiencia: nodo sobre el riel, fechas, rol, empresa, resumen y tags.

- Riel de 1px en `line`; nodo de 14px con borde de 2px en `line` (el trabajo actual en `success`, relleno `success` al 20%).
- Fechas `caption` 600 en mayúsculas, `muted`. Rol `h3` en ClashDisplay, `ink`, a `space-3`. Empresa `lead` en `muted`. Resumen `body` en `muted`, a `space-5`. Tags `.tag` a `space-6`.
- En escritorio las paradas alternan izquierda y derecha del riel; en móvil van todas a la derecha.
- Entra con el patrón revelar: opacidad y 16px (32px de lado en escritorio) en 700ms, una vez.

El consumidor pone fechas, rol tal como se llamó el puesto, empresa, resumen y tecnologías. En el sitio: `Trayectoria.astro`.
