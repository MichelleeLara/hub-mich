# Revisión del portfolio — 7 de octubre de 2026

La nueva secuencia presenta cómo Mich convierte problemas en producto: propuesta de valor, evidencia en proyectos, proceso con IA, trayectoria y una herramienta para iniciar la conversación. Se conservaron hero, navegación, trayectoria y footer, con ajustes de accesibilidad y controles.

## Entregas
- Sobre mí con retrato de partículas y resultados conectados a casos.
- Proyectos con Luz.ia destacada y cuatro visuales de ingeniería aplicada.
- Proceso interactivo Entender / Diseñar / Construir: las partículas pasan de piezas dispersas a un sistema. Es una visualización, no una conexión a un modelo.
- Cinco portadas de casos sin maquetas vacías, usando activos existentes y copy específico.
- Brief local de tres preguntas con copia, descarga y correo preparado. El visitante decide compartirlo.
- Imágenes WebP responsive, originales conservados, fuentes válidas, favicon, descripción, canonical, robots y sitemap.
- Migración Astro 7.3.7 aislada en codex/astro-7, sin modificar dependencias de feat/hero ni desplegar.

## Medición real
Lighthouse CLI, producción local, móvil simulado. Son muestras de laboratorio; no métricas de usuarios reales.

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
| --- | ---: | ---: | ---: | ---: |
| Home antes | 74 | 96 | 100 | 92 |
| Home Astro5 después | 95 | 100 | 100 | 100 |
| Home Astro7 | 96 | 100 | 100 | 100 |
| Luz.ia después | 99 | 100 | 100 | 100 |

Transferencia de home en la muestra: 7,1 MB → 0,48 MB (~93% menos). Carpeta public: ~21 MB → 2,8 MB. Reportes completos y fecha en lighthouse/.

Builds Astro5, etapa PostCSS, Astro6 y Astro7 aprobados; instalación limpia Astro7 y peers aprobados. Revisión estática de home + cinco casos en ambas compilaciones: un H1 y main, descripción/canonical, sin recursos o enlaces locales rotos. Revisión visual de escritorio/móvil claro y oscuro; Luz.ia, pausa, tema, proceso y brief comprobados. Las imágenes de los casos son visuales existentes, no una afirmación de pantallas productivas reales.

## UI polish con better-ui
| Severidad | Ubicación | Antes | Después | Por qué |
| --- | --- | --- | --- | --- |
| HIGH corregida | src/components/ParticlesBackground.astro:691 | Efecto sin control de pausa completo | Detiene RAF, restaura foto y responde a preferencia del sistema | Respeto al movimiento reducido y control del usuario |
| MEDIUM corregida | src/components/Themetoggle.jsx:1 | Estado/icono de tema poco claro | Nombre accesible, estado sincronizado, iconos currentColor y transición acotada | Estado comprensible y consistencia visual |
| MEDIUM corregida | src/components/MotionToggle.jsx:1 | Sin pausa independiente | Pausa/play persistente, aria-pressed, icono legible | Estado acompañado por texto accesible |
| MEDIUM corregida | src/pages/proyectos/[slug].astro:145 | Etiquetas pequeñas sin contraste suficiente | Colores con contraste verificado por Lighthouse | Legibilidad de la narrativa |
| LOW corregida | src/components/ProjectImage.astro:5 | PNG pesados/maquetas vacías | WebP responsive con outline claro/oscuro | Superficies legibles y carga menor |

Approve para los estados inspeccionados. Not verified: reproducción de animaciones al 10% en panel Animations y pruebas en dispositivos físicos/Safari/Firefox. La pasada nocturna completó teclado, cambio de preferencia durante sesión y matriz de los cuatro casos, detallada abajo.

## Límites pendientes
La cadena de Tailwind3 en la rama migrada mantiene 7 avisos npm (5 altos/2 moderados) de herramientas de compilación. Se aplicaron correcciones compatibles; resolver el resto exige evaluar Tailwind4 o ajustes específicos. Sin upgrade forzado. Astro7 requiere Node22.12+; local22.18 cumple. Override temporal del plugin React6.1.1 por su compatibilidad con oxc0.145.0.

Migración basada en las guías oficiales [Astro6](https://docs.astro.build/en/guides/upgrade-to/v6/) y [Astro7](https://docs.astro.build/en/guides/upgrade-to/v7/). No fusionada ni publicada.


## Cierre nocturno — 8 de octubre
Los cuatro casos restantes pasaron 16 vistas: 320px oscuro, 390px claro y escritorio 1440px claro/oscuro. Se corrigió desbordamiento de White-Label en métricas y tarjeta siguiente; se contuvo el desplazamiento de trayectoria a 954px sin cambiar su diseño. El contenido de trayectoria queda visible sin JS y al pausar.

Contraste del tema claro corregido en etiquetas y resultados de casos, trayectoria y disponibilidad del hero. Se sustituyeron gradientes de cifras por el acento del sitio. Los cinco casos tienen 100 en accesibilidad/SEO de Lighthouse; Tracking añadió una muestra con movimiento reducido (98 rendimiento). Astro7 conserva 96/100/100/100 tras los cambios de control/recursos. Los HTML y summary.json están en lighthouse/.

Movimiento reducido probado mediante Rendering de Chrome invitado: cambio activo, carga inicial y restauración. El control cambia a “Movimiento reducido por tu sistema”, deshabilitado; foto visible y partículas detenidas. El hook de Framer11 no actualizaba la preferencia después de montar: ahora un hook con suscripción responde al cambio. Parallax detiene su bucle en reposo, fuera de viewport, oculto o pausado. Las springs sin rebote evitan valores negativos de blur que advertía Chrome. Sesión de prueba cerrada, sin cambiar preferencias del sistema operativo.

Teclado verificado: skip link Tab/Enter, proceso con Space, apertura del brief con Enter, validación requerida y traslado de foco al resultado. Copia/descarga ya verificadas antes. No se enviaron correos.

Manifest generado de imágenes con anchos/altos reales, srcset y sizes coherentes. Builds de ambas versiones y smoke final de 12 páginas aprobados, sin recursos/enlaces locales rotos. Endpoints robots/sitemap servidos y página temporal noindex confirmados.

| Severidad | Ubicación | Antes | Después | Por qué |
| --- | --- | --- | --- | --- |
| HIGH corregida | src/hooks/useReducedMotionPreference.js:1; src/components/Hero.astro:143 | Preferencia capturada una vez, parallax seguía animándose tras cambiarla | Suscripción viva y bucle condicionado | Respeta movimiento reducido durante toda la sesión |
| MEDIUM corregida | src/pages/proyectos/[slug].astro:217 | Métrica y siguiente título desbordaban 320px | Escala móvil y corte de palabras | Lectura completa sin scroll horizontal |
| MEDIUM corregida | src/components/Trayectoria.astro:44 | Desplazamiento de entrada añadía 8px de scroll y contenido oculto de base | Recorte horizontal local y mejora progresiva | Superficie estable y contenido disponible |
| MEDIUM corregida | src/components/Header.jsx:71 | Spring con rebote generaba blur negativo | Spring con bounce 0 | Animación válida y consistente |
| MEDIUM corregida | src/components/ProjectImage.astro:1 | Descriptores/dimensiones estimados | Manifest real, sizes por columna | Selección correcta de recurso y proporción |

Approve para la cobertura inspeccionada. Límites: Chromium de escritorio y viewport móvil simulado; no hardware móvil, Safari/Firefox ni replay al 10%. Revisión lista para Michelle; no fusionada ni desplegada.
