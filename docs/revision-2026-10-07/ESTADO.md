# Continuación nocturna autorizada

Dirección: demostrar diseño + ingeniería + IA para productos de impacto, bien pensados y fáciles de usar. Mantener el diseño del hero, navegación, footer y trayectoria. El usuario autoriza cambiar/agregar secciones, ajustar contenido y una interacción útil. No requiere preguntas rutinarias.

## Estado verificado
- Trabajo principal: feat/hero en /Users/michelle/workspace/hub-mich. Cambios previos del usuario preservados. Respaldo previo: /tmp/hub-mich-review-20261007/before-site.tar.gz y before.patch. No hacer reset ni descartar cambios.
- better-ui instalada global; UI/UX Pro Max instalada en .agents/skills.
- Rediseñados Sobre mí, proyectos y proceso. Luz.ia destacada; proceso Entender/Diseñar/Construir interactivo. Partículas forman un retrato frontal reconocible; pausa/reanudación verificadas.
- Toggle de tema corregido; control de movimiento con estado persistente y preferencia del sistema. Se quitó el círculo que confundía el icono de pausa en la navegación.
- Cinco casos con portadas y tarjetas del siguiente caso usando visuales existentes, descritos como visuales, no capturas verificadas de producción.
- Brief local: validación requerida, generación, copiar y descargar TXT comprobados en navegador. Mailto preparado; no se envió ningún correo. No necesita credenciales.
- Imágenes optimizadas: public ~2,8 MB (antes ~21 MB), originales preservados en assets/source-images/. Generador scripts/optimize-images.mjs. No volver a publicar los PNG originales.
- SEO: descripción, favicon SVG, canonical, robots, sitemap y preview-stack noindex. Fuentes WOFF2 válidas. Main/H1, enlaces y recursos locales verificados en home y cinco casos para ambas versiones (12 páginas).
- Lighthouse móvil: home Astro5 95/100/100/100; home Astro7 96/100/100/100; Luz.ia Astro5 99/100/100/100. Antes: 74/96/100/92. Evidencias en lighthouse/summary.json y HTML.
- QA visual realizada: home escritorio oscuro, home móvil claro, Luz.ia móvil claro/oscuro, pausa/reanudación, tema, proceso y brief. Imágenes cargan después de recargar la compilación final. Sin desbordamiento en muestras 390px.

## Migración aislada
- Rama codex/astro-7, worktree /Users/michelle/.codex/worktrees/astro-7/hub-mich.
- Builds incrementales Astro5 original, Astro5 con PostCSS, Astro6.4.8, Astro7.3.7 aprobados. npm ci + build final aprobado.
- Tailwind3 conservado vía PostCSS, porque @astrojs/tailwind no soporta Astro7. Layout agrega global.css SOLO en esta rama.
- React18 conservado, @astrojs/react7.0.1 + oxc-transform-react0.145.0. Override @vitejs/plugin-react6.1.1 para mantener compatibilidad con oxc; npm ls sin peers inválidos.
- Quitados astro-og-canvas, react-router-dom y clx no utilizados. npm audit fix sin force: quedan 7 avisos (5 high/2 moderate) de cadena Tailwind3/herramientas de compilación. No aplicar upgrade forzado Tailwind4 sin evaluación y QA.
- No fusionar ni desplegar. Si sincronizas diseño a la rama, preservar package/lock/config/PostCSS/import global.css.

## Cierre del alcance — 8 de octubre, 00:30 CDMX
Validación nocturna completada. Continuación mejoras-nocturnas-de-itsmich desactivada (PAUSED confirmado por la app). No seguir haciendo cambios por iniciativa propia después del cierre.

- Otros cuatro casos revisados en 320px oscuro, 390px claro y 1440px en ambos temas; 16 vistas. Desbordamiento de White-Label a 320px corregido en métricas y siguiente caso. Screenshots y night-browser.json guardados.
- Trayectoria mantiene diseño; se contuvo el desplazamiento de entrada que producía 8px de desborde en el ancho natural de 954px. Contenido visible sin JS y al pausar; revelado progresivo no oculta contenido de base.
- Contraste claro: etiquetas de casos, métricas sin degradado insuficiente, fechas/tags de trayectoria y estado Disponible ajustados. Comprobación DOM de contraste del home después: sin fallos de texto (se excluyen separadores decorativos aria-hidden).
- Movimiento reducido emulado en Chrome invitado: activar durante sesión deshabilita el control y detiene efectos; cargar con reduce conserva foto fallback; desactivar restaura el control. Cambiar la preferencia no requiere recargar. Emulación restaurada y sesión de invitado cerrada.
- Hook propio para preferencia viva porque Framer11 solo la captura al montar. Parallax ya no mantiene RAF al estar quieto, fuera de pantalla, pausado u oculto. Springs sin rebote corrigen avisos de blur negativo en Chrome; tras recargar no reaparecieron.
- Teclado: Tab muestra skip link con foco visible; Enter enfoca main-content. Space activa Diseñar/Construir con estado y texto correctos. Enter abre summary del brief; formulario vacío lleva al campo requerido; formulario válido enfoca brief-result.
- Manifest de imágenes declara anchos/altos reales y sizes ajustados a la columna; no se declaran 1440w para imágenes que eran 1122/1312/1396/1405px.
- Lighthouse: los cinco casos con 100 accesibilidad/SEO. Luz.ia 99 rendimiento; Tracking 98 con movimiento reducido; home Astro7 final 96/100/100/100. Builds definitivos de ambas ramas y smoke de 12 páginas aprobados. Robots/sitemap servidos y preview noindex confirmados.

Límites de cobertura: pruebas de laboratorio en Chromium, no dispositivos físicos ni Safari/Firefox. No se reprodujeron animaciones al 10% en panel Animations. Los 7 avisos de cadena Tailwind3 siguen documentados como mantenimiento separado, sin upgrade forzado ni publicación. No hay bloqueo para la revisión visual del usuario.

Servidores: dev 4321, producción Astro5 4322, producción Astro7 4323 (Astro7 preview arranca en background). Confirmar disponibilidad al retomar.

## Ajuste solicitado por Michelle — 8 de octubre, 06:41 CDMX
Nueva autorización después del cierre nocturno: retrato sin forma circular, menos arrastre al hacer scroll y sección 3 con cambios por desplazamiento como la sección Producto de Ommia.

- Retrato: eliminado recorte elíptico. Muestreo con bordes difusos irregulares y dispersión adicional solo en la periferia, conservando definición en el centro. Fallback fotográfico con bordes difuminados, sin border-radius ovalado. Partículas formadas compensan directamente el cambio de posición del anchor y parallax; fuerza de cursor reducida al 6% en el rostro completo.
- Proceso: relato de tres pasos visible en el documento, visual sticky y transformación continua de las mismas partículas al avanzar o retroceder. Composiciones: piezas sueltas → tres grupos → interfaz. Botones mantienen selección manual y teclado; resultados, etiqueta y barra de avance acompañan el estado visual. Scroll nativo sin interceptar rueda ni gestos.
- Preferencias: pausa/movimiento reducido quitan sticky y grandes espacios de scroll, mantienen los textos y selección estática. Pantallas de poca altura también usan visual sin sticky. Sin aria-live que anuncie cada cambio del scroll.
- Fuente visual: Ommia observada en navegador; imagen fija con texto que recorre estados. No se copió código ni se integraron servicios externos.
- Sincronizados solo AboutStats, ParticlesBackground y SkillsStack a codex/astro-7. Builds finales Astro5 y Astro7 aprobados. HTML compilado verificado: tres pasos visibles sin JS, tres controles con destinos existentes; archivos iguales entre ramas. Evidencia: retrato-scroll-checks.json.
- Dev estaba apagado: levantado nuevamente en http://127.0.0.1:4321/, HTTP200 confirmado.
- Límite material: el navegador automático rechazó vincular la vista local por su política de URL. No se intentó sortear el bloqueo. Esta nueva iteración NO tiene prueba visual local, móvil ni captura nueva; las capturas y Lighthouse anteriores no validan estos ajustes. Pendiente comprobar reconocimiento/difuminado del rostro, estabilidad durante scroll y sticky/transición de los tres pasos en móvil/escritorio, ambos temas y con pausa/reduce.
- Continuación nocturna permanece desactivada; no se publicó ni fusionó Astro7. Respaldo de los tres componentes antes de esta iteración: /tmp/hub-mich-followup/.

## Footer — 8 de octubre, 06:53 CDMX
Michelle aclaró que pedía cambiar el diseño general, no únicamente el texto del botón. MegaFooter rehecho: titular breve en dos niveles, descripción de diseño/ingeniería/IA, contacto integrado sobre línea con flecha circular, navegación compacta con nombres accesibles y metadatos. Conservados tema invertido, firma SVG MICH. y destinos existentes. Se retiraron píldora con estrella y pulso de disponibilidad. Hover solo con puntero compatible; movimiento de presión limitado a no-preference, foco con acento del footer. Diseño móvil en una columna y enlaces en dos grupos.

Build Astro5 y Astro7 aprobados; HTML de home/cinco casos verificado con siete enlaces y parámetros mailto válidos. Sin envío de correo. Cambio sincronizado a codex/astro-7. Validación visual nueva pendiente: bloqueo de navegador local de la iteración anterior. Preview para Michelle: http://127.0.0.1:4321/#contacto. Respaldo antes de rediseño: /tmp/hub-mich-followup/MegaFooter-before-redesign.astro.

## Preferencia final del footer — 8 de octubre, 06:55 CDMX
Michelle prefiere la composición anterior y la tipografía nueva. Recuperado el footer anterior completo (texto, CTA tipo píldora, columnas, metadatos y firma), conservando ClashDisplay en el texto principal y CTA con el peso/espaciado de la propuesta nueva. Esta elección sustituye el rediseño descrito arriba. Sincronizada a Astro7.

## Ajustes finales — 8 de octubre, 07:01 CDMX
Footer: composición original, título Inter Tight semibold (600) en dos tonos; contacto como enlace subrayado con flecha diagonal, sin píldora/estrella. Esta es la preferencia vigente de Michelle.

Partículas del proceso: ventana de morph más breve, easing quintic con aceleración suave en extremos, trayectorias arqueadas reversibles, respuesta temporal de 55ms (antes 90ms), render limitado a 60fps promedio (antes 30fps). Estelas direccionales de velocidad limitadas a 18px y alpha .24, sin desenfoque acumulativo. Reposo más sutil. Pausa/reduce eliminan estelas, deriva y velocidades; se mantienen estado/resultado visibles. Builds Astro5 y Astro7 aprobados y fuentes sincronizadas. No se afirma rendimiento medido ni validación visual nueva: navegador local continúa sin comprobar por el rechazo anterior. Respaldo previo en /tmp/hub-mich-followup/SkillsStack-before-speed.astro.

## Figuras del proceso — 8 de octubre, 07:07 CDMX
Michelle aprobó la rapidez/suavidad y pidió probar figuras más expresivas del proceso. Sustituidas nube/grupos/retícula por lente/foco con señales convergentes, diagrama de decisiones con dos rutas y una interfaz con navegación/tarjetas/datos. Se conserva el motor de scroll, morph reversible, arcos y estelas. Geometría precalculada para no reconstruir formas en cada frame. 540 puntos finitos dentro de límites en los tres estados comprobados sobre el código real. Builds Astro5/7 aprobados. figuras-proceso.png y SVG son vistas estáticas generadas desde esas coordenadas; no capturas del navegador ni validación de movimiento. Sin cambios al retrato. Respaldo anterior: /tmp/hub-mich-followup/SkillsStack-before-figures.astro.

## Continuidad dentro de las figuras — 8 de octubre, 07:37 CDMX
Agregados tres pulsos de señal en un ciclo de 2,8s con desfase: convergen al centro del foco, pasan por la decisión y sus ramas, recorren los datos de la interfaz. Iluminan partículas cercanas y dejan un rastro corto. Su reloj no se reinicia al cambiar de etapa; sus recorridos se interpolan durante el mismo morph y responden al scroll sin saltos entre figuras. El reloj avanza solo cuando el efecto está visible, activo y sin pausa; pausa/reduce quitan señales/halos/iluminación temporal. Es una metáfora visual, no ejecución real de un servicio. Builds Astro5 y Astro7 aprobados; muestreo de 15.453 posiciones del código real dentro de límites y continuidad al cruzar la etapa central comprobados. Nueva comprobación visual en navegador sigue pendiente. Respaldo previo: /tmp/hub-mich-followup/SkillsStack-before-flow.astro.

## Alineación y variante de Entender — 8 de octubre, 07:55 CDMX
Por indicación de Michelle, información de los pasos alineada arriba con el gráfico en escritorio: retirado centrado vertical; padding superior24px, igual al encabezado del panel. El título general conserva bloque superior separado (56px antes de la pareja información/gráfico). Comportamiento móvil con panel sticky y lectura secuencial conservado.

Primera figura sustituida por señales de contexto que convergen en una ficha con una pregunta; etiqueta La pregunta. Sus pulsos siguen esos recorridos y llegan al punto de convergencia. Figuras2/3 preservadas exactamente, comprobado contra respaldo antes de cambios. 540 puntos válidos por estado y builds Astro5/7 aprobados. Vista estática nueva: figuras-proceso-pregunta.png/SVG, generada desde coordenadas reales (no captura de navegador). Validación de alineación en navegador local pendiente por bloqueo anterior; no se afirma QA visual completo. Respaldo: /tmp/hub-mich-followup/SkillsStack-before-question.astro.

## Variante sutil — petición directa de Michelle, 8 de octubre, 08:03 CDMX
Nueva variante de Entender: tres hilos Bézier ligeros convergen en un trazo común. Retirados ficha e interrogación; señales continuas siguen las curvas. Etiqueta Dar claridad. Otros dos gráficos y alineación conservados. Builds Astro5/7 y coordenadas de señales/figuras aprobados; formas2/3 iguales al respaldo. Preview estático variante-hilos.png/SVG generado desde geometría real, sin afirmar QA de navegador. Esta iteración responde a la nueva petición de Michelle, después del horario nocturno; la continuación permanece desactivada.

## Experimento de llenado desde el fondo — petición directa, 8 de octubre, 08:12 CDMX
Michelle confirma como base exacta la versión de tres hilos, decisiones e interfaz y pide probar partículas exteriores formando los gráficos. Base preservada en particulas-version-aprobada.zip y en commit Astro7 a43f5be; no descartar la base si el experimento no convence.

Prueba activa por defecto: al entrar un25% del canvas en pantalla, se toman hasta540 partículas reales visibles fuera del panel. El fondo deja de dibujarlas temporalmente; un canvas superpuesto sin eventos de puntero las lleva con curva/easing hacia la figura durante850ms+280ms de cascada. Se conservan las figuras, scroll/morph y flujo aprobados. Cuando el presupuesto del dispositivo ofrece menos partículas, los puntos adicionales emergen durante el llenado. Después el panel continúa con su render normal. Al salir, cambiar tamaño o activar pausa/reduce se libera la reserva y se retira la capa de vuelo. Si el fondo no ofrece partículas, se mantiene el gráfico aprobado sin llenar.

Comparación: http://127.0.0.1:4321/?particle-fill=off#Stack muestra la base; http://127.0.0.1:4321/#Stack muestra el experimento. Sin controles extra en el producto. Builds Astro5/7 aprobados; geometría/flujo idénticos al respaldo comprobados, coordenadas/finalización del renderer de vuelo verificadas con canvas de registro incluso con una sola partícula disponible. NO prueba visual de integración entre canvases por bloqueo previo; comprobar efecto real en navegador y móvil antes de dar por aprobado el experimento. Continuación nocturna sigue apagada; trabajo solicitado directamente por Michelle.

## Ideas complejas a producto simple — nueva petición directa
Michelle aprueba el llenado desde el fondo y pide sustituir el retrato por una representación naranja del mensaje. Cambiado por cinco recorridos entrelazados que convergen en una interfaz limpia. El sistema global construye la figura desde sus partículas y la colorea naranja con señal luminosa. Geometría compartida src/data/ideasGeometry.ts, 916 puntos dentro de límites; sin muestreo de foto. Reclutamiento cercano a1000 partículas para mantener aire; resto del fondo suave. Foto reemplazada por SVG accesible con la misma geometría para sinJS/pausa/reduce. Caption De la complejidad a la claridad. Anchor más ancho, proporción6/5.

Builds finales Astro5/7 aprobados; HTML sin retrato y con descripción accesible. ideas-producto.png es preview estático, no captura de navegador. Prueba visual automática pendiente; aprobación del llenado procede de Michelle. Proceso de tres gráficos igual. Respaldos: /tmp/hub-mich-followup/AboutStats-before-symbol.astro y ParticlesBackground-before-symbol.astro. Automatización apagada; nueva autorización directa posterior al cierre nocturno.

## Integración de propuesta isométrica aprobada — nueva petición directa
Michelle aprobó el preview inspirado en TikTok e indicó integrarlo. Sobre mí ahora usa su estructura isométrica de tres niveles. La geometría compartida aporta1536 puntos con tiempos de nacimiento: base, conexiones verticales y pisos superiores. El scroll controla la construcción y reversión usando el sistema global de partículas; naranja, exterior más visible que interior y señal luminosa continua. Indicadores Entender/Diseñar/Construir bajo el gráfico con aria-current sincronizado, sin anunciar cada frame. Figura estática equivalente y etapa final en pausa/reduce/sinJS. Proporción10/11 y SVG600x660 adecuados al volumen vertical.

Builds finales Astro5/7 y HTML con descripción/3etapas aprobados. Todos los puntos dentro de límites y capas completan antes del progreso1. Servidor local HTTP200. Sin rediseñar el proceso aprobado, hero, navegación, footer o trayectoria. Validación visual de integración pendiente por rechazo previo del navegador; el GIF de propuesta no es captura del sitio. Respaldos /tmp/hub-mich-followup/*-before-isometric.*. No publicado ni fusionado; automatización apagada.


## Construcción desde cero y sección fija — petición directa, 8 de octubre, 10:02 CDMX
Michelle detecta que el gráfico se ve estático/completo y pide que el scroll construya desde cero antes de pasar a la siguiente sección. Causa: SVG completo visible hasta que la formación superaba .94, más progreso ligado al centro del viewport. Se retira ese solapamiento desde que el sistema de partículas está listo y se calcula el progreso sobre un tramo de scroll propio.

Escritorio: texto y figura sticky juntos a120px, tramo280svh. Móvil: texto primero, figura sticky a92px, tramo280svh+420px. Construcción completa al90% del recorrido útil; último10% mantiene resultado antes de liberar la sección. Scroll nativo reversible, sin interceptar rueda/touch ni bloquear enlaces. Respuesta temporal más inmediata. Barra/porcentaje sutil y etapas sincronizados. SinJS, pausa o movimiento reducido conservan figura completa en flujo normal y no añaden recorrido vacío. El tramo solo se activa cuando la geometría está lista. Hero/footer/nav/proceso aprobado no modificados.

Validación: builds Astro5/7 aprobados; prueba del código real updateFace con cajas DOM simuladas para escritorio/móvil: inicio0, mitad.5, final1 antes de liberar sticky, reversión y liberación fuera de pantalla aprobados. Servidor4321HTTP200. Son comprobaciones de lógica/compilación, no medición visual de sticky en navegador; sigue pendiente observar integración real por rechazo anterior del acceso local. Respaldos /tmp/hub-mich-followup/*-before-scroll-build.astro, prueba /tmp/hub-mich-followup/check-scroll-build.cjs. Rama Astro7 sincronizada sin cambiar dependencias. Continuación nocturna apagada; petición nueva autorizada, sin publicar.


## Nitidez y transformación gradual — petición directa, 8 de octubre, 10:12 CDMX
Michelle solicita el acabado y fluidez de sección03 y prueba personal en navegador. Acceso al tab3 IAB ahora permitido: observado el efecto anterior, luego probado mediante scroll en vista habitual632px y escritorio1280x850. Guardadas capturas reales construccion-nitida-mobile.jpg (100%) y construccion-nitida-desktop.jpg (64%).

Figura: círculos de radio1.1/1.7px como proceso03; posiciones muestreadas uniformemente, sin duplicación aleatoria ni jitter de geometría; exterior alpha.76/interior.44. DPRhasta2. Movimiento de formación con quintic y respuesta exponencial55ms igual al proceso, sin resorte oscilante. Durante el scroll los pisos nacen comprimidos en la base y se elevan gradualmente hasta formar volumen; lift entre progreso.18/.90. Render de figura apunta60fps incluso en tier bajo, sin afirmar fps medidos. Fondo ambiental conserva física previa. SVG de pausa ajustado al nuevo contraste/tamaño.

Observación real: móvil13%sin volumen,46%base y postes,79%volumen creciendo,100%completo; escritorio64%estructura intermedia y reversión hasta inicio. Pausa comprobada: fallback opacity1 y runway en flujo normal; animación restaurada. Consola sin errores capturados. Durante desarrollo se corrigió precedencia de easing que mantenía progreso0; comprobación final volvió a pasar. Prueba de código real progreso escritorio/móvil aprobada; builds finales Astro5/7 aprobados. Override de viewport retirado. Sin cambios a sección03 ni hero/nav/footer. Automatización apagada; trabajo solicitado directamente.


## Cierre con flujo granular — petición directa, 8 de octubre
Recuperado el cierre solicitado: construcción completa al75% del recorrido útil; último25% recorre toda la estructura con tres paquetes de nueve granos, sobre ruta cerrada que sigue perímetros de los cuatro planos y sus postes. Partículas cercanas se iluminan, sin halos grandes ni desenfoque. Scroll guía un ciclo completo; reloj suave de5.6s mantiene circulación cuando se detiene. Señal entra progresivamente al terminar (>97% de formación), se apaga al deshacer/salir y no se dibuja en pausa/reduce. Ruta de longitud precalculada, sin reconstrucción de arrays por grano/frame.

Probado en navegador real en100%: estructura fija con señales en distintas posiciones en capturas sucesivas, luego continúa el flujo; evidencia estructura-flujo-final.jpg. Builds Astro5/7 aprobados, prueba progreso actualizada aprobada,11001 posiciones de flujo finitas/dentro del gráfico y continuidad del ciclo aprobadas. Tipado de muestreador corregido para su retorno real. No modifica el diseño ni animación de sección03. Automatización sigue apagada.


## Destellos ligados al scroll y sellado — petición directa
Pulida únicamente la granularidad/cierre. Eliminado reloj autónomo del recorrido y coseno temporal en partículas formadas. Destellos ahora dependen de progreso de scroll, con seguimiento55ms para asentarse suavemente al parar. Paquetes más finos:7granos, radios1.35/1px, alpha.8. Recorrido se atenúa hacia el cierre; último tramo activa un pulso breve en las aristas, que queda con contraste ligeramente reforzado como estructura sellada. Pulso y asentamiento son funciones de scroll, reversibles al subir; no se ejecutan solos.

Prueba real IAB: construcción100%/recorrido.808 del tramo, reposo observado, scroll al cierre y captura estructura-sellada.jpg. Sin errores de consola capturados. Builds Astro5/7 y prueba del código real de progreso aprobados. Se mantiene figura/scroll sticky previo y sección03 intacta. Automatización apagada.


## Objeto ligeramente mayor — petición directa
Escala de estructura isométrica aumentada15% alrededor del centro, en proyección compartida por puntos, conexiones y recorrido granular. Anchor, tipografía y duración de scroll conservados; tamaño de cada grano igual. SVG permite overflow visible para preservar extremos durante pausa/sinJS (exceso vertical menor al margen20px existente). Builds Astro5/7 aprobados.


## Segundo aumento del objeto — petición directa
Otro15% sobre tamaño vigente: escala acumulada1.3225 (+32.25% respecto al original). Proyección compartida preserva recorrido y sellado. Margen vertical del anchor aumentado a48px escritorio/40px móvil para que los extremos ampliados no invadan encabezado ni etiquetas. SVG conserva overflow visible. Builds finales Astro5/7 aprobados.


## Agrupamiento de proyectos — petición directa, 9 de octubre, 22:15 CDMX
Michelle señala que cuesta reconocer cada tarjeta a primera vista. ProjectsBento ahora reúne imagen y contenido en una superficie opaca común con radio24px y borde estructural, consistente con Luz.ia. Imagen a sangre sin redondeo independiente; bloque de información con padding28px (24px móvil). Flecha SVG junto al título reemplaza botón flotante sobre imagen. Resultado con cifra destacada al pie; altura de las parejas alineada mediante flex. Separación32px entre tarjetas/filas (28px móvil). Sin cambios a proyectos, imágenes, cifras ni orden. Hover con contorno/acento y foco de teclado global preservado.

Validación real IAB: escritorio1280px en oscuro/claro; móvil390x844, ancho de documento390 sin desbordamiento. Foco de teclado en tarjeta Inteligencia Logística con outline solid2px y href correcto. Screenshots reales docs/revision-2026-10-09/proyectos-agrupados-claro.jpg y proyectos-agrupados-mobile.jpg. Builds Astro5/7 aprobados. Inicio de prueba en servidor propio IPv4 tuvo módulos React sin hidratar; versión compilada y localhost habitual funcionan, control de tema confirmado allí. Servidor IPv4 temporal detenido; servidor habitual IPv6localhost4321 conservado. No modifica header/tema ni otros componentes. Tema/viewport de prueba restaurados. Respaldo /tmp/ProjectsBento-before-grouping-20261009.astro. Automatización apagada, sin publicación.

### 2026-10-09 · Portadas de proyectos según referencia aprobada
- Las cuatro tarjetas secundarias ahora usan imagen completa, etiquetas superiores y título/rol sobre degradado oscuro. Los detalles y resultados siguen disponibles dentro de los casos.
- Conservado Luz.ia destacado y resto de secciones.
- Revisado móvil 390 × 844: sin desbordamiento horizontal, títulos y etiquetas legibles. Compilación correcta en Astro 5 y rama Astro 7.
- Evidencia: docs/revision-2026-10-09/proyectos-portadas.jpg y proyectos-portadas-mobile.jpg.

### 2026-10-09 · Luz.ia y etiquetas más discretas
- Luz.ia pasa a una portada panorámica con título, descripción y estado de MVP al pie.
- Chips claras con radio de 6 px y tipografía pequeña, sin pastillas oscuras voluminosas.
- Retirados hover de borde/zoom, presión de Luz.ia y atracción de partículas de todas las tarjetas de proyectos; se conserva foco de teclado.
- Compilaciones Astro 5 y Astro 7 correctas. Evidencia: docs/revision-2026-10-09/proyectos-luzia-chips.jpg.
