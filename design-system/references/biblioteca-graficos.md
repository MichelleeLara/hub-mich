# Biblioteca de recursos gráficos

Ruta interna: `/biblioteca-graficos`. Sin enlaces en la navegación, excluida del sitemap y marcada noindex.

## Dirección visual

Michelle identifica **graficos-capas-morado.png** como la referencia que mejor representa lo que busca: ventanas y paneles superpuestos, profundidad suave, contornos y luz ambiental. Traducir ese lenguaje a los colores, tipografía y formas del diseño definido, sin cambiar la identidad a morado globalmente.

Las referencias se conservan como inspiración. Los recursos construidos son componentes reutilizables propios.

## Recursos disponibles

`src/components/graphics/GraphicResource.astro`: variantes `interfaces`, `orbitas`, `capas`; perfiles `0` (IA), `1` (web), `2` (automatizaciones); propiedad `inverted` para superficies invertidas. Usa los tokens semánticos del sitio, sin animaciones continuas.

La biblioteca reúne las tres familias en ambos tonos y todas las capturas guardadas. Las nuevas referencias incluyen bento de resultados, IA/documentos y capas moradas. Se pueden reutilizar los recursos en cualquier sección.

## Capas integradas

Variante `ambient`: paneles flotantes para IA, ventanas en profundidad para web y conexiones concéntricas para automatizaciones. Integrada detrás del texto con desvanecido y acento del sitio. Disponible en el preview mediante `opcion=exterior&grafico=ambient` y en la biblioteca.

Ajuste final: eliminar el listón exterior en servicios y reducir la intensidad de gráficos y luz ambiental para dar prioridad al contenido. El listón sigue disponible en su componente original para otras secciones.

Servicios: bento final con dos cards superiores y una amplia inferior. Los gráficos sutiles se integran al fondo. El detalle de precio, recorrido y comienzo se abre al seleccionar un servicio; el texto permanece provisional. Integrado en `/preview-completo` después de proyectos.

Composición final del bento: dos cards superiores (Web e IA), tres columnas inferiores (Automatizaciones, dos módulos gráficos centrales y una ventana de código alta). Glass discreto, colores propios y tres servicios interactivos. Sustituye la composición anterior de una card inferior ancha.

Aclaración de Michelle: conservar la paleta del repo; la referencia morada guía las formas, no el color. Desarrollo web y la ventana de código están aprobados. Radar, huella y Consultor IA requieren mayor presencia en claro, sin intensificar dark. Encabezados naranjas unificados con La Belle Aurore.

## Interacción de los recursos

`BentoArtwork.astro` conserva formas, radar y ventana de código como componentes reutilizables. Radar y formas responden a hover, foco y clic (estado reversible); el código separa sus capas. Las mini interfaces responden al hover y foco de su card: paneles y teclas se desplazan unos píxeles, los marcos de la huella se expanden. No hay ciclos permanentes ni seguimiento del cursor. Pausa y movimiento reducido suprimen desplazamientos.

## Base y ampliación de la biblioteca

Los seis gráficos finales de servicios son ahora la base formal del lenguaje visual. Guía: `design-system/graphics/README.md`. Catálogo: `src/data/graphicLibrary.ts`. Biblioteca interna ampliada a 26 recursos reutilizables, comparación clara/oscura y 20 referencias. Las nueve capturas nuevas se reconstruyen en componentes SVG/CSS; los recursos previos se conservan archivados.

Actualización de homogeneidad: `panel-perspectiva` es la base material. Consultor IA y el nuevo flujo de Automatizaciones usan `PanelResources` y la misma opacidad en sus cards. La huella se conserva, sin modificación, como recurso independiente. Biblioteca: 28 recursos / 56 muestras.
