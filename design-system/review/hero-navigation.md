# Hero y navegación · Primera propuesta

Fecha: 10 de octubre de 2026.
Base: `f4413a8523be54f98cf9ec6770cf7efc8a039801`.
Estado: **Implementado y verificado**.

## Objetivo

Comparar la jerarquía entre identidad, retrato, mensaje y acciones en la primera pantalla. Mantener los textos, la paleta y las familias tipográficas actuales para evaluar la composición.

## Opciones presentadas

- **Base actual:** nombre centrado en dos líneas, retrato superpuesto, navegación en tres islas. Conserva el protagonismo visual de la identidad.
- **Retrato lateral:** nombre y mensaje a la izquierda, retrato a la derecha, navegación en islas. En móvil el retrato pasa arriba y los contenidos se apilan. Permite leer el nombre completo.
- **Editorial compacto:** identidad pequeña con retrato; el mensaje pasa a ser el título principal. Navegación superior sin las tres superficies flotantes en escritorio. Da prioridad a lo que se ofrece.

Las tres propuestas incluyen navegación inferior en móvil y los controles de tema y movimiento. La vista de comparación es estática: no reproduce el fondo de partículas ni la animación del sitio.

## Alcance de esta revisión

Se presentaron las tres opciones visuales antes de modificar el sitio. Tras la elección se implementó el retrato lateral en `Hero.astro`, conservando los enlaces y controles de la navegación en islas.

## Decisión

Michelle eligió **Retrato lateral** y confirmó que estaba de acuerdo. Se mantienen las familias tipográficas y los textos actuales. La selección de un carrusel anterior de tipografía no se interpretó como una elección nueva para este cambio.

## Comprobación

- Compilación de las 10 páginas completada.
- Revisión visual en escritorio, tablet (768px) y móvil (375px y 320px); Hero sin desbordamiento horizontal.
- Nombre completo visible, retrato separado y acciones con ajuste de línea.
- Enlaces a proyectos y al PDF del CV conservados; PDF presente.
- Temas claro y oscuro revisados; botón de pausa detiene el flotado. Se conservan las reglas y guardas de `prefers-reduced-motion`.
- [Ficha del componente](../components/Hero/README.md) añadida al sistema de diseño.
