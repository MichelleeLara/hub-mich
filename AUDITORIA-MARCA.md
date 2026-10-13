# Auditoría de marca personal — itsmich

**Sitio:** hub-mich.vercel.app → migrar a **itsmich.com.mx**
**Audiencia:** clientes freelance + reclutadores
**Fecha:** Julio 2026

---

## 1. Diagnóstico general

Tu diferenciador ya existe, solo está disperso: te define **crear productos fáciles de usar, con detalles pensados para su uso**. Aparece en tu meta description y en tu About, pero el hero, los servicios y los proyectos cuentan historias distintas. El problema no es falta de marca, es falta de **consistencia** — y algunos descuidos visibles que contradicen la promesa de "atención al detalle".

Regla de oro para todo lo que sigue: **tu portafolio es tu primer caso de estudio.** Cada detalle del sitio debe demostrar lo que prometes.

---

## 2. Mensaje de marca (propuesta)

### Identidad

Un solo nombre en todas partes: **Mich** como marca visible, dominio **itsmich.com.mx**, y un solo nombre legal en CV/footer/LinkedIn (hoy conviven "Michelle Lara" en el CV, "Michelle Rodriguez" en el footer y "michelle-rodriguez-lara" en LinkedIn — decide uno y unifica).

### Esencia

> Construyo productos digitales que la gente usa sin pensar: interfaces claras, rápidas y cuidadas hasta el último detalle.

### Hero propuesto

**Título:** "Hago productos digitales fáciles de usar."
**Subtítulo:** "Soy Mich, Frontend Engineer (React). Me obsesionan los detalles que hacen que un producto se sienta simple: rendimiento, accesibilidad y microinteracciones con propósito."

Esto invierte el orden actual: primero tu valor, después la herramienta. "Desarrollador Frontend React" es commodity; "hago productos fáciles de usar" es marca.

### Pilares (úsalos como filtro para todo contenido)

1. **Usabilidad primero** — cada proyecto se explica desde el problema del usuario, no desde el stack.
2. **Detalle con propósito** — muestras los detalles concretos que mejoran el uso (no "pixel-perfect" genérico).
3. **Solidez técnica** — rendimiento y accesibilidad como evidencia, con métricas (Lighthouse, tiempos de carga).

### Tono

Cercano y directo (el "Soy Mich" funciona muy bien), sin jerga corporativa. Para reclutadores el mismo mensaje funciona si los proyectos incluyen resultados medibles; para clientes, si los servicios hablan de su negocio y no de tecnologías.

---

## 3. Auditoría sección por sección

### Hero (`Hero.astro`)

- "Soy Desarrollador Frontend React" te posiciona como commodity → cambiar por el mensaje de valor (ver arriba).
- El texto enlaza a `/yo`, que existe pero es un **stub en producción**: solo muestra "This page yo". Igual `/proyectos`, que muestra un texto de prueba de dark mode. Cualquier visitante que haga clic ve una página rota — o completa esas páginas o enlaza a las anclas (`#yo`, `#proyectos`) mientras tanto. Además ambas usan `<Layout>` sin props → título y descripción quedan `undefined`.
- "¿Por qué elegirme?" apunta a `#Stack` — el stack no responde esa pregunta; debería llevar a proyectos o a About.
- Botón CV: bien, pero verifica que el PDF diga el mismo nombre y mensaje que el sitio.

### ContactBanner / AboutMe

- About es la mejor sección del sitio: "pixel-perfect, rendimiento, accesibilidad, experiencia de usuario" — este mensaje debería subir al hero.
- "Más sobre mí" tiene `href="#"` → link muerto. O crea la página o quítalo.
- `console.log(isInView)` quedó en producción (`ContactBanner.jsx`).

### Servicios (`Services.jsx`, `servicesData.js`) — **crítico**

- Las 3 tarjetas (Front-End, Automatizaciones, Diseño UI/UX) tienen **exactamente la misma descripción placeholder**: "Creación de sitios web y aplicaciones de calidad...". Es lo más visible que contradice tu marca.
- El botón de WhatsApp dentro de la tarjeta tiene `href="#"` → un cliente interesado no puede contactarte.
- Redacta cada servicio desde el problema del cliente: qué obtiene, en cuánto tiempo, con qué entregables.

### Proyectos (`Projects.astro`)

- El intro promete "explico el proceso, la metodología y los detalles clave" pero solo hay descripción corta + link al sitio. **Esta es tu mayor oportunidad de marca:** convierte cada proyecto en mini caso de estudio (problema → decisión de diseño → detalle de usabilidad concreto → resultado).
- Las descripciones actuales hablan de Scrum y % de eficiencia — eso sirve a reclutadores pero no muestra tu diferenciador. Añade una línea por proyecto del tipo: "Detalle que importa: [ej. formulario que valida en línea y redujo abandono]".
- Imágenes con `alt=""` — accesibilidad es uno de tus pilares declarados.
- `text-justify` en las descripciones (8 usos) perjudica legibilidad en columnas angostas; usa alineación izquierda.
- Etiquetas de tecnología son `<a>` sin `href` → parecen clicables y no hacen nada.

### CTA / Footer (`Cta.astro`)

- "Michelle Rodriguez" en el footer vs "Michelle Lara" en el CV → unificar.
- Typos visibles al usuario: "**Linkln**" (LinkedIn) y "**Whastapp**" (WhatsApp).
- Nav del footer: "Inicio" apunta a `#`.

### SEO / Metadatos (`Layout.astro`) — **crítico**

- En producción hay placeholders: `twitter:site="@TuCuentaDeTwitter"`, `twitter:title="Título de la página"`, `twitter:description="Descripción de la página"`, `og:image:alt="Descripción de la imagen"`.
- `title: 'Inicio'` — en Google apareces como "Inicio". Debería ser algo como: "Mich — Frontend Engineer | Productos fáciles de usar".
- `OpenGraphl.png` (typo en el nombre del archivo) es la imagen OG activa.

### Higiene del repo (afecta marca ante reclutadores que revisan tu GitHub)

- `README.md` es el default de Astro sin tocar → reemplázalo por una presentación del proyecto (los reclutadores técnicos sí lo leen).
- `anamAA/` es un proyecto Angular completo dentro del repo del portafolio → sácalo a su propio repo.
- Typos internos: `Lenguague.astro`, color `terteary` (tertiary), `"use cleint"` comentado. No los ve el usuario final, pero sí quien revise tu código.
- Mucho código comentado y duplicados png/webp en `public/`.

---

## 4. Plan de acción

### Fase 1 — Que el sitio no contradiga tu marca (1-2 días)

La de mayor impacto por esfuerzo. Corregir: descripciones placeholder de servicios, metas de Twitter/OG, typos visibles (Linkln, Whastapp), links muertos (`/yo`, "Más sobre mí", WhatsApp de servicios, "Inicio"), `alt` de imágenes, `console.log`, title "Inicio", unificar nombre en footer/CV.

### Fase 2 — Mensaje consistente (2-3 días)

Aplicar el mensaje de marca: nuevo hero, reescribir servicios desde el cliente, añadir a cada proyecto su "detalle que importa", nuevo README del repo. Un solo hilo conductor: fácil de usar + detalle + solidez.

### Fase 3 — itsmich.com.mx como casa de la marca (1 semana)

Conectar el dominio en Vercel con redirect desde hub-mich.vercel.app. Actualizar OG/canonical al nuevo dominio. Crear página o sección de caso de estudio para 1 proyecto (el mejor, no todos) con el formato problema → decisiones → detalles → resultado. Alinear LinkedIn y GitHub (mismo nombre, mismo tagline, link a itsmich.com.mx).

### Fase 4 — Consolidación continua

Un caso de estudio nuevo por proyecto terminado. Considera versión en inglés del sitio (tu B1 alcanza para contenido escrito y amplía el alcance con reclutadores). Publica los detalles de usabilidad que descubres — ese contenido ES tu marca en LinkedIn/GitHub.

---

## 5. Checklist rápido Fase 1

- [ ] `servicesData.js`: 3 descripciones reales y distintas
- [ ] `Layout.astro`: quitar placeholders de Twitter/OG, title descriptivo
- [ ] `Cta.astro`: "LinkedIn", "WhatsApp", nombre unificado, link "Inicio"
- [ ] `/yo` y `/proyectos`: completar o redirigir a anclas (hoy son stubs visibles)
- [ ] `AboutMe.jsx`: quitar o completar "Más sobre mí"
- [ ] `Services.jsx`: href real en botón de WhatsApp
- [ ] `Projects.astro`: `alt` descriptivos, quitar `text-justify`
- [ ] `ContactBanner.jsx`: quitar `console.log`
- [ ] `README.md`: reescribir
- [ ] Mover `anamAA/` a su propio repo
