# Lenguaje gráfico ./mich

Base acordada con Michelle el 12 de octubre de 2026. Los gráficos aprobados de servicios definen el estilo; las nuevas referencias se construyen con ese mismo lenguaje.

## Base inicial aprobada

1. Consultor IA: panel vertical + panel inclinado + barra frontal + teclas flotantes.
2. Desarrollo web: ventana con capas de interfaz.
3. Automatizaciones: huella sobre una placa dentro de cinco marcos concéntricos.
4. Dos formas curvas con luz suave.
5. Radar con retícula, intersecciones, dos señales y centro recortado.
6. Ventana de código con capas.

`GraphicResource.astro` y `BentoArtwork.astro` conservan estos recursos. El bento de servicios sigue utilizando esta base.

## Reglas de estilo

- Colores del repo: `--bg`, `--surface`, `--ink`, `--muted`, `--line`, `--accent`, `--accent-soft`, `--accent-deep`. La referencia morada guía las formas, no añade una nueva paleta.
- Vidrio suave, bordes finos, paneles en capas y reflejos discretos. El texto de la web mantiene prioridad.
- Claro: contornos un poco más presentes. Oscuro: luz y profundidad quietas; evitar bloques opacos.
- Interacción reversible al hover, foco o clic; sin ciclos permanentes, temporizadores ni seguimiento del cursor. Movimiento reducido y pausa impiden desplazamientos.
- SVG y CSS editables. No usar capturas como gráficos de producción. Capturas se conservan para comparar formas.
- Iconos y avatares genéricos; cifras y textos ilustrativos, sin copiar promesas ni marcas de terceros.
- Alturas reservadas y recursos con IDs únicos por instancia para gradientes/máscaras.

## Biblioteca interna

`/biblioteca-graficos` no tiene enlaces de navegación, lleva noindex y está fuera del sitemap. Reúne 30 recursos en 60 muestras claras/oscuras y conserva 20 referencias. Las propuestas anteriores quedan archivadas.

Catálogo: `src/data/graphicLibrary.ts`. Renderizador de muestras: `src/components/graphics/GraphicSample.astro`. En una sección se importa directamente el componente requerido, sin cargar el catálogo completo.

| Componente | Variantes |
| --- | --- |
| GraphicResource | ambient con perfiles 0/1/2; interfaces, orbitas, capas archivadas |
| BentoArtwork | mark, radar, code |
| PanelResources | perspective, consulting, workflow, sales, analysis, agents, collaboration |
| DifferenceArtwork | context, build · puntos 01 y 02 de diferenciadores |
| OnboardingResources | authentication, profile, intelligence |
| ObjectResources | stack, capsule, globe, toolbox |
| ReferenceResources | integrations, tiles, analytics, document, mail, puzzle, stat, map |

Ejemplo de reutilización:

```astro
---
import PanelResources from '../../components/graphics/PanelResources.astro';
---
<PanelResources variant="sales" id="resultados-ventas" />
```

Cada referencia nueva tiene al menos un recurso asociado. La captura de objetos incluye cuatro recursos: capas/esfera, cápsula, globo y caja. Los nuevos recursos quedan en la biblioteca hasta que se elija dónde usarlos.

## Selección actual en servicios

Desarrollo web utiliza `PanelResources` con variante `perspective`, en lugar de la ventana original. El recurso original se conserva en la biblioteca. Para incluir el panel como ilustración dentro de una card interactiva se usa `decorative`; no crea un segundo botón y su movimiento responde al foco/hover de la card.

La ventana de código en `BentoArtwork` reserva espacio interior para las capas y su hover. El marco y el desvanecido pertenecen al escenario exterior, así los desplazamientos no cortan el borde superior/izquierdo.

## Material homogéneo de servicios

La base visual actual es `PanelResources perspective` de Desarrollo web. Consultor IA usa `consulting` y Automatizaciones `workflow`, todos en SVG, con el mismo tinte de vidrio (acento 9%), borde gris (ink 15%), líneas (ink 13%) y opacidad externa .72. Radar adapta su sector al vidrio neutro y reserva el acento para las señales. La huella permanece en `huella-marcos` de la biblioteca; ya no representa automatizaciones.
