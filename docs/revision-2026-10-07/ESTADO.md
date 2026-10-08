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
