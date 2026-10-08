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

## Pendientes concretos del loop nocturno
1. QA visual de los otros cuatro casos en 320/390px y escritorio, claro/oscuro. Corregir recortes, desbordes o fallos reales; no remodelar partes aprobadas.
2. Comprobar navegación con teclado, skip link, focus del brief, controles de proceso; preferencia de movimiento reducido al cargar y cambiar durante uso. Pausa debe detener los efectos y conservar foto fallback.
3. Lighthouse representativo de otros casos, contraste en tema claro, y endpoints SEO servidos. No repetir mediciones exitosas sin cambios o incertidumbre.
4. Revisar hover con puntero fino y touch, formación/disolución del rostro al entrar/salir, imágenes responsive por cada caso.
5. Actualizar INFORME.md y evidencias; registrar cada hallazgo real y resolverlo antes de cerrar. No afirmar cobertura no verificada.

Continuación automática mejoras-nocturnas-de-itsmich activa cada hora hasta 08:00 del 8 de octubre, America/Mexico_City. Requiere equipo encendido/Codex abierto. Mantener silencio sin cambios útiles; avisar al completar o ante bloqueo. Desactivar al finalizar el alcance, y no prolongar después del límite. No enviar mensajes, correos, publicar ni inventar métricas.

Servidores: dev 4321, producción Astro5 4322, producción Astro7 4323 (Astro7 preview arranca en background). Confirmar disponibilidad al retomar.
