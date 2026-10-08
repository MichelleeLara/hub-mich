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
