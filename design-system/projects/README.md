# Portadas de proyectos · Base AnamSeals

Dirección solicitada por Michelle el 12 de octubre de 2026: usar AnamSeals como base fotográfica para que los proyectos compartan un estilo.

## Dirección visual

- Fondo de estudio gris cálido, continuo y despejado.
- Luz difusa, materiales naturales y sombras suaves.
- Dispositivo oscuro como protagonista; interfaces específicas de cada proyecto.
- Sin marcos desenfocados, habitaciones, accesorios ni textos superpuestos.
- Tracking usa teléfono en mano para conectar con la composición de AnamSeals.

AnamSeals conserva su fotografía original. Las otras cuatro son versiones nuevas generadas con ImageGen integrado, usando AnamSeals como referencia de estilo y cada portada original como referencia del dispositivo/interfaz. Son mockups ilustrativos; no sustituyen capturas verificadas del producto.

## Archivos e integración

Fuentes: `assets/source-images/project-covers/*-studio-v2.png`.
Versiones responsive: `public/media/project-covers/*-studio-v2-{720,1440}.webp`.
Prompts finales y procedencia: `cover-prompts-v2.json`.

Luz.ia tiene además una composición panorámica de escritorio (`luzia-studio-wide-v2.png`, prompt en `cover-prompt-luzia-wide-v2.json`), para mostrar el monitor completo en su card ancha. En móvil se usa la composición 3:2 mediante `<picture>`.

`src/data/projectGalleryCovers.ts` selecciona las nuevas imágenes únicamente para ProjectsGallery: cards y ventanas de detalle. Los originales y las demás presentaciones siguen disponibles. La galería se usa en `/preview-completo`.

Para reoptimizar solo estas portadas: `node scripts/optimize-project-covers.mjs`. El script añade sus claves al manifiesto sin regenerar imágenes existentes. Las instrucciones de este archivo mantienen la base para próximas portadas.

## v3 · Solo la app (21 oct 2026)

Para el mosaico de proyectos (`ProjectsWobble.astro`, prueba en `/preview-proyectos-ilustrados`) se generaron con ChatGPT/Codex (image_gen) capturas planas de cada app, sin dispositivo ni fondo, usando la portada original como referencia de contenido. AnamSeals es hardware y su tarjeta va solo con texto (se descartaron la foto y el recorte generado). Luz.ia usa una captura real de Ommia (`luzia-app-v4`). Las capturas de app tienen una versión de 2000 px para verse nítidas en pantallas 2x y van sin girar.

Fuentes: `assets/source-images/project-covers/*-app-v3.png`. Versiones web: `public/media/project-covers/*-app-v3-{720,1440}.webp` (22–92 KB). Se generan con `node scripts/optimize-project-covers.mjs`. Son mockups ilustrativos, no capturas verificadas del producto.
