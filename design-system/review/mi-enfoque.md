# Mi enfoque · Primera propuesta

Fecha: 10 de octubre de 2026.
Estado: **Propuesta, pendiente de elección**.
Componente de referencia: `src/components/AboutStats.astro`.

## Objetivo

Comparar la relación entre encabezado, presentación, figura de partículas y evidencia. Se mantienen el texto actual, las tres cifras y las familias tipográficas del sistema. Los previews muestran la geometría isométrica original en un estado estático de construcción completa; no reproducen el scroll animado.

## Opciones

- **Base actual:** texto a la izquierda, figura a la derecha y franja de cifras debajo de ambas columnas.
- **Texto y evidencia:** presentación y cifras reunidas a la izquierda; figura en una superficie gris más compacta a la derecha. En móvil se lee presentación, evidencia y figura.
- **Encabezado abierto:** encabezado independiente arriba; figura a la izquierda y presentación a la derecha, con evidencia al final. En móvil se lee encabezado, figura, presentación y evidencia.

[Fuente de los previews](previews/mi-enfoque-options.html).

Se revisaron las tres composiciones en el navegador, incluido un ancho pequeño de 320px; sin desbordamiento horizontal. Se puede ajustar el ancho de la vista con los controles del preview.

## Decisión

Michelle eligió **Encabezado abierto**, pidió centrar el título y propuso una narrativa por scroll: eliminar el pie de la figura y cambiar el texto al construir cada nivel. Confirmó que imagina el contenido a la derecha.

Se preparó un segundo preview interactivo con encabezado centrado, figura a la izquierda y las tres etapas junto al contenido de la derecha. Los botones prueban la secuencia; el scroll del sitio todavía no se implementa. Los textos de las etapas son propuestas para revisar. Se conserva la evidencia al final.

### Preview editorial con scroll real

Se creó `/preview-enfoque` como vista independiente para evaluar la animación en el navegador. Sustituye las tabs por un número naranja grande (01, 02, 03) junto al título. Las partículas de la geometría original se construyen por capas con el scroll y el contenido de la derecha cambia con cada etapa. El encabezado está centrado y la evidencia aparece al terminar el recorrido.

Fuente: `src/pages/preview-enfoque.astro`. Incluye una presentación estática cuando se pausan las animaciones, se reduce el movimiento o no cabe el bloque en la pantalla. Se revisó el cambio de etapas en escritorio y a 375px, sin desbordamiento horizontal.

La composición y el contenido siguen pendientes de elección. No se ha modificado la sección del home.

### Refinamiento de los tres pasos

El número ahora aparece encima del título a 64px (48px en móvil), para evitar competir con él. El recorrido se divide en tres tercios sincronizados con el contenido: partículas dispersas que se reúnen; capas que se alinean; estructura conectada con un trazo que recorre exactamente sus pisos y postes. El movimiento depende del scroll y es reversible. La figura completa se ajusta dentro de su área para conservar todas sus aristas.

### Narrativa por etapa

Tras revisar la relación con el contenido, Entender representa señales que convergen en un foco; Diseñar muestra cuatro módulos planos unidos por un recorrido discontinuo, sin volumen; Construir ensambla esos módulos en la estructura isométrica, añade superficies y nodos, y activa el recorrido. El cubo queda reservado para la tercera etapa. El texto saliente se desenfoca y desvanece con una estela breve de partículas; el entrante recupera nitidez. Las transiciones se cancelan al invertir rápidamente el scroll.

### Alternativa orgánica actual

Se sustituye la metáfora arquitectónica por una trama paramétrica (`src/data/enfoqueGeometry.ts`): señales dispersas se convierten en corrientes convergentes, después en caminos abiertos y finalmente en un volumen toroidal entrelazado. Las mismas 1.200 partículas conservan su identidad durante la transformación reversible. El cierre revela trayectorias continuas y señales activas. Se mantiene el blur y la estela del contenido, y el estado estático utiliza la nueva figura. Esta alternativa sigue siendo un preview pendiente de elección.

### Dirección de interfaz de producto

Michelle eligió probar una interfaz de producto. La geometría actual muestra una tarea interrumpida por una fricción, tres esquemas de pantalla conectados y finalmente una interfaz de solicitudes con navegación, resumen, actividad y confirmación. El contenido de la interfaz aparece cuando termina el ensamblaje; el estado pasa de En revisión a Resuelto al completar el recorrido. Se mantienen el scroll reversible, los números editoriales y el blur con partículas. Esta dirección permanece en la vista previa.

### Revisión de Entender

Se invierte la composición: texto a la izquierda y gráfico a la derecha; en móvil el texto precede a la figura. Se conserva la dispersión inicial aprobada. La primera etapa distingue la tarea y el objetivo de la fricción central, delimitada por dos marcas de enfoque. La revisión se concentra en esta primera transformación antes de refinar las siguientes etapas.

### Historia continua: desenredar

Michelle pidió visualizar una madeja compleja cuyas formaciones estén conectadas. La alternativa actual conserva nueve hilos y sus 1.080 muestras durante todo el recorrido: la dispersión revela la madeja, un hilo destacado permite seguir sus cruces, los recorridos se separan y finalmente se agrupan en tres canales conectados. La señal avanza sin reiniciarse entre etapas. Se mantienen la composición con gráfico a la derecha y las transiciones de texto; no se añaden etiquetas explicativas dentro de la figura. Pendiente de revisión visual.

### Retorno a las bases cuadradas (dirección actual)

Michelle identificó como favorita la versión con bases cuadradas en Diseñar y su ensamblaje en un volumen por niveles al entrar en Construir. Se recupera esa geometría y transición usando `ideasGeometry.ts`, conservando el gráfico a la derecha, la dispersión inicial y el blur del texto. Entender mantiene únicamente el campo disperso; el refinamiento de esa etapa sigue pendiente. No se modifica el home.

### Movimiento natural sobre las formas aprobadas

Se conservan las bases y el volumen, con trayectorias curvas y tiempos de llegada independientes por partícula. La forma asentada mantiene una oscilación sutil y variaciones suaves de intensidad. Se sustituye el conector discontinuo por señales flotantes entre bases y se atenúan las aristas de soporte. En el volumen circulan tres estelas continuas. La animación se detiene fuera de pantalla, con la página oculta o al pausar/reducir movimiento.

### Claridad e interacción

Los moldes de Diseñar incorporan una superficie tenue, contorno estable y marca central de registro. Se reduce la oscilación de los bordes y se mantiene libertad en las partículas internas. El mouse desplaza partículas dentro de un radio local; un resorte amortiguado las devuelve al salir. La interacción no intercepta gestos táctiles y respeta pausa/reducción de movimiento. Se verificó en el navegador el desplazamiento sobre una base.

Se guardó por separado la [referencia del listón para footer o CTA](../references/footer-cta-liston.md).


## Integración aprobada · 11 de octubre de 2026

La versión aprobada se integró en `src/components/AboutStats.astro`, en la sección `#yo` de la página principal. El preview `/preview-enfoque-elegante` reutiliza ese mismo componente.

Se conserva el encabezado centrado, texto a la izquierda, gráfico a la derecha y números editoriales. La dispersión se ordena en un plano claro, se divide en cuatro bases y llega al edificio isométrico original, con niveles rectos y partículas abiertas. El texto se ilumina por palabras con el scroll; se conserva la interacción del mouse.

Validación: compilación de producción, recorrido de etapas en la página principal, pausa y reanudación, ausencia de errores del navegador y vista móvil de 375px sin desbordamiento. Sin JavaScript o con movimiento reducido, las tres etapas permanecen legibles.


## Campo único de partículas

El fondo y Mi enfoque comparten ahora las mismas partículas y el mismo renderizador. AboutStats aporta destinos; ParticlesBackground mueve sus partículas existentes hacia ellos. Al entrar son neutras (blancas en tema oscuro), y toman el acento cuando llegan a las formaciones. Al salir recuperan sus destinos del fondo. El canvas local deja de pintar cuando está disponible el campo global.

Se acercó el encabezado al grupo y se alineó el contenido arriba para reducir el vacío entre el título y las etapas. Se verificó entrada, formación, pausa/reanudación y ancho móvil de 375px sin errores del navegador.
