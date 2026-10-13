# Base de revisión · ./mich

Fecha: 10 de octubre de 2026.
Versión de referencia: `f4413a8523be54f98cf9ec6770cf7efc8a039801`.

Esta es la base del sitio que vamos a revisar sección por sección. Cada propuesta se compara con esta versión y con el sistema de diseño. Las propuestas visuales se presentan antes de modificar los componentes del sitio.

## Referencias

- [Sistema de diseño](../README.md): principios, voz y reglas de uso.
- [Tokens](../tokens.json): colores, tipografía, espacios y radios.
- [Guía de implementación](../../docs/design-system.md).
- [Catálogo vivo](http://localhost:4321/design).
- [Sitio actual](http://localhost:4321/).
- [Inventario de esta base](baseline.json).

El catálogo muestra las piezas; el home muestra cómo conviven. Para evaluar una propuesta necesitamos ambos.

## Lo que ya decidimos

- Subtítulo manuscrito naranja arriba; título principal debajo.
- El subtítulo identifica el tema y el título expresa una idea completa. Deben entenderse por separado.
- Permanent Marker para los subtítulos; Inter Tight 650 para frases; ClashDisplay 600 para nombres y cifras.
- Títulos de sección de 30–48 px y subtítulos de 16–20 px, según el ancho disponible. Separación de 12 px.
- Footer con encabezado compacto de 26–32 px y los tokens del panel invertido.
- Laboratorio de partículas con superficie clara `#f9f9f8` y borde sutil.
- Cards de proyectos sin contorno decorativo.
- Al terminar el proceso, el borde inferior de la card coincide con el final del último texto en escritorio.
- Mostrar alternativas antes de implementar. Una elección de tipografía o estructura nueva se registra también en el sistema de diseño.

Estas reglas son la referencia inicial; no equivalen a dar por aprobada cada sección.

## Orden de revisión

| Sección | Base actual | Qué vamos a evaluar | Estado |
| --- | --- | --- | --- |
| Navegación | Wordmark, enlaces, tema y pausa; barra inferior en móvil | Claridad, estado activo, tamaño y convivencia con el contenido | Verificada con Hero |
| Hero | Michelle Rodriguez, Product Engineer, avatar y dos acciones | Primera impresión, proporción del nombre y foto, mensaje y jerarquía de acciones | Retrato lateral implementado |
| Mi enfoque | Productos simples para problemas complejos | Relación entre texto y figura, ancho de lectura y ritmo del scroll | Propuesta |
| Proyectos | Ideas que toman forma y generan impacto | Jerarquía de Luz.ia, coherencia de portadas, tags y lectura de las cards | Por revisar |
| Mi proceso | La IA acelera. El criterio da dirección | Composición del encabezado, claridad de etapas, animación y alineación final | Por revisar |
| Mi recorrido | Cuatro años construyendo producto | Densidad del timeline, lectura de roles, empresas, fechas y resultados | Por revisar |
| Hablemos | Démosle forma a tu idea | Claridad de la invitación, relación entre título y descripción, facilidad del brief | Por revisar |
| Footer | Product Engineer; construcción y liderazgo de producto | Escala del encabezado, contraste, llamada a contacto y cierre de página | Por revisar |

La primera propuesta será para el **Hero**. La navegación se revisará con él para comprobar la composición completa de la primera pantalla.

## Contenido y componentes de referencia

### Navegación

- Componentes: `src/components/Header.jsx`, `src/components/Navbar.jsx`, controles de tema y movimiento.
- Inicio · Proyectos · Sobre mí · Contáctame.
- Referencias del sistema: Navigation, Button.

### Hero

- [Ver sección](http://localhost:4321/#inicio).
- Componente: `src/components/Hero.astro`.
- Rol: **Product Engineer**. Nombre: **Michelle Rodriguez**.
- Mensaje: «Convierto problemas de negocio en productos simples de usar. Diseño, ingeniería e IA, con atención a los detalles.»
- Acciones: **Ver proyectos** y **Leer mi CV**.
- Referencias del sistema: tipografía display, Button, Navigation.

### Mi enfoque

- [Ver sección](http://localhost:4321/#yo).
- Componente: `src/components/AboutStats.astro`.
- Subtítulo: **Mi enfoque**.
- Título: **Productos simples para problemas complejos.**
- Figura de partículas y pruebas: **< 2 min**, **+65%**, **6 ingenieros**.
- Referencias del sistema: SectionHeading, ProofStrip, motion.

### Proyectos

- [Ver sección](http://localhost:4321/#proyectos).
- Componente: `src/components/ProjectsBento.astro`.
- Subtítulo: **Trabajo seleccionado**.
- Título: **Ideas que toman forma y generan impacto.**
- Destacado: **Luz.ia**. Resto: AnamSeals, Inteligencia Logística, Monitoreo White-Label, Tracking Aduanal.
- Referencias del sistema: SectionHeading, ProjectCard, Tag.

### Mi proceso

- [Ver sección](http://localhost:4321/#Stack).
- Componente: `src/components/SkillsStack.astro`.
- Subtítulo: **Mi proceso**.
- Título: **La IA acelera. El criterio da dirección.**
- Etapas: **Entender · Diseñar · Construir**.
- Referencias del sistema: SectionHeading, superficie del laboratorio, estados activos y motion.

### Mi recorrido

- [Ver sección](http://localhost:4321/#trayectoria).
- Componente: `src/components/Trayectoria.astro`.
- Subtítulo: **Mi recorrido**.
- Título: **Cuatro años construyendo producto.**
- Referencias del sistema: SectionHeading, TrajectoryStop.

### Hablemos

- [Ver sección](http://localhost:4321/#brief-title).
- Componente: `src/components/ProjectBrief.astro`.
- Subtítulo: **Hablemos**.
- Título: **Démosle forma a tu idea.**
- Acción: **Preparar mi brief · 3 preguntas**.
- Referencias del sistema: SectionHeading, FormField, Button.

### Footer

- [Ver sección](http://localhost:4321/#contacto).
- Componente: `src/components/MegaFooter.astro`.
- Subtítulo: **Product Engineer.**
- Título: **Construyo producto de punta a punta y lidero a quienes lo entregan.**
- Acción: **Cuéntame tu idea**. Navegación, redes, disponibilidad y firma MICH.
- Referencias del sistema: SectionHeading compacto, panel invertido, Button.

## Cómo revisaremos cada sección

1. Mostrar la base actual en contexto, en escritorio y móvil.
2. Definir el problema concreto y el resultado que buscamos.
3. Mostrar dos o tres alternativas con el mismo contenido para poder comparar.
4. Elegir una alternativa o ajustar la propuesta.
5. Implementar la elección, comprobar ambos temas, móvil y movimiento reducido.
6. Registrar la decisión y actualizar el sistema si introduce una regla nueva.

## Ficha para cada decisión

```text
Sección:
Problema observado:
Objetivo:
Base comparada:
Opciones presentadas:
Opción elegida:
Ajustes acordados:
Comprobación en escritorio / móvil / claro / oscuro:
Estado: por revisar / propuesta / elegida / implementada / verificada
```

## Registro de decisiones

| Fecha | Sección | Decisión | Estado |
| --- | --- | --- | --- |
| 2026-10-10 | General | Tomar el sistema de diseño como referencia y mostrar propuestas antes de cambiar el sitio | Acordado |
| 2026-10-10 | General | Crear esta base con el contenido y el orden actuales | Preparado |
| 2026-10-10 | Hero y navegación | [Comparar base actual, retrato lateral y editorial compacto](hero-navigation.md) | Propuesta |
| 2026-10-10 | Hero y navegación | Elegir retrato lateral, aplicar y verificar; conservar navegación en islas | Verificado |
| 2026-10-10 | Mi enfoque | [Comparar base actual, texto y evidencia, y encabezado abierto](mi-enfoque.md) | Propuesta |
