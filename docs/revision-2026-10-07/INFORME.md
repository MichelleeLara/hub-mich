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
