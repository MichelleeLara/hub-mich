# Proyectos · Opciones de presentación

Estado: propuestas para comparar, pendientes de elección.

Preview: `/preview-proyectos`. La página principal conserva su sección actual.

- **Actual:** componente existente, imágenes grandes con texto superpuesto y Luz.ia destacado.
- **Editorial:** imagen y relato separados en filas alternadas; incluye contexto, resultado y enlace al caso.
- **Impacto:** cuadrícula de dos columnas con las cifras y el contexto fuera de las imágenes.

Se reutilizan las imágenes y datos actuales del proyecto. Luz.ia conserva el estado de MVP en prevalidación; el ahorro de AnamSeals se identifica como proyectado. No se añaden resultados nuevos.

Las tres opciones se pueden alternar con botones y consultar con teclado. Las propuestas se adaptan a una columna en móvil y respetan la pausa y la preferencia de movimiento reducido. Revisión en temas claro y oscuro y ancho de 375px, sin desbordamiento horizontal.

Fuente: `src/pages/preview-proyectos.astro`.

## Refinamiento elegido: editorial apilado

Michelle prefiere la opción 02 y pidió tarjetas que se apilen con una «cola» visible para reducir el recorrido. El preview editorial ahora usa superficies opacas con imagen y relato separados. Cada tarjeta se detiene debajo de la navegación y la siguiente la cubre, conservando el número y nombre del proyecto anterior en una franja superior. El desplazamiento funciona en ambos sentidos.

Se reduce la distancia entre tarjetas mediante solapamiento. A 375×812 se mantiene la lectura completa por encima de la navegación inferior. En pantallas de poca altura, al pausar las animaciones o con movimiento reducido, se muestran como tarjetas normales sin apilado. El foco de teclado eleva la tarjeta enfocada para que su enlace no quede oculto. La página principal sigue pendiente de integrar esta propuesta.

### Corrección del cierre y lectura

El apilado ahora se mueve dentro de un único contenedor fijo durante el recorrido. Cada tarjeta permanece completa durante un tramo de scroll antes de iniciar la entrada de la siguiente. La última también tiene su tramo de lectura. Al acabar, el contenedor entero sale conservando las franjas entre tarjetas, en lugar de que cada tarjeta llegue por separado al límite inferior.

Se comprueba el tamaño real de todos los casos, incluida la tipografía cargada, antes de activar la pila. Si no cabe la tarjeta más alta junto a las franjas y la navegación, se conserva la lista normal. Verificado a 1280×720 y 375×812; al salir las posiciones de las tarjetas mantienen exactamente la separación de sus franjas.

## Integración aprobada

Michelle aprobó el apilado y pidió integrarlo cuidando la animación de entrada. La página principal ahora utiliza `src/components/ProjectsStack.astro`, compartido con la opción editorial del preview. Se conserva el identificador `#proyectos` y los enlaces a los cinco casos.

La entrada interpola el avance del scroll con un asentamiento suave de 70 ms y una curva sin saltos al empezar o terminar. La animación sólo solicita cuadros mientras hay movimiento y la sección está cerca de la pantalla. El tramo de lectura y la salida del contenedor completo se mantienen. La pausa, el movimiento reducido y las pantallas que no permiten leer la tarjeta completa conservan una lista estática.

Validación: compilación de las 13 páginas, revisión en la página principal, 375×812 sin desbordamiento, pausa y reactivación correctas. La versión anterior permanece en la opción 01 del preview.

### Suavidad del apilado

Se reemplazó el seguimiento de 70 ms por un resorte amortiguado sin rebote, integrado de forma independiente de la frecuencia de cuadros. La curva de entrada ahora tiene velocidad y aceleración nulas en sus extremos: la tarjeta arranca y se asienta suavemente. Se conserva el tramo de lectura, el movimiento reversible y la salida conjunta.

Se ralentiza el avance real del apilado: cada etapa pasa de 280–360 px a 540–680 px de scroll, y la entrada ocupa el 65% del intervalo. Se reduce la rigidez del resorte de 14 a 9 para un asentamiento más pausado. Esto amplía el recorrido de la sección manteniendo sus tramos de lectura.

Michelle confirmó la velocidad del scroll y pidió ralentizar sólo la entrada. Se conserva el intervalo de 540–680 px y la curva; se reduce la rigidez del resorte de 9 a 4.5, duplicando su tiempo de respuesta para una llegada más lenta.

Se ajusta la respuesta al scroll tras observar demasiado retraso: rigidez del resorte 11, conservando el intervalo largo y la curva suave. La tarjeta sigue más de cerca el gesto y termina de asentarse antes, sin añadir rebote ni modificar el tramo de lectura.

Se compacta el recorrido por petición de Michelle: cada etapa usa 360–440 px en lugar de 540–680 px, aproximadamente un tercio menos de scroll tanto para apilar como para desapilar. Se mantiene el resorte 11, la curva suave, los tramos de lectura y la salida conjunta.

Michelle aprobó el recorrido compacto y pidió una transición ligeramente más lenta. Se mantiene el intervalo de 360–440 px y se ajusta el resorte de 11 a 9.5, aumentando aproximadamente un 16% su tiempo de respuesta.
