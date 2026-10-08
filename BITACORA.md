# Bitácora de cambios — itsmich

Registro cronológico de cambios en el sitio y la marca. El más reciente arriba.
Documento vivo. Referencia de estrategia: `Marca personal/FUNDAMENTOS-MARCA.md`.

---

## 2026-10-07 · Partículas reactivadas, dominio canónico y título

### Título: Software Engineer
El código (hero, `<title>`, meta description, `og:image:alt`, CTA) ya usa **Software Engineer**, no *Product Engineer* como dice la entrada del 2026-07-22. Se registra aquí para que la bitácora refleje el estado real. Si el cambio de título no fue intencional, revertirlo en `index.astro`, `Hero.astro`, `Layout.astro`, `Cta.astro` y `AboutStats.astro`.

### Cambios aplicados en código
- `src/components/ParticlesBackground.astro` — reescritura enfocada en rendimiento y comportamiento:
  - Arreglo de un bug que impedía encender las partículas: el `<script>` estaba dentro de `{PARTICLES_ENABLED && (...)}`, así Astro no lo compilaba y llegaba TypeScript crudo al navegador (`SyntaxError`).
  - Datos en arrays tipados (structure-of-arrays) en vez de miles de objetos.
  - Pintado por lotes de alpha (24 niveles): ~24 cambios de `globalAlpha` por frame en vez de uno por partícula.
  - La corriente fuera de pantalla no se simula (al bajar del hero casi todo el polvo duerme).
  - Auto-degradación por **coste real por frame** (antes medía FPS, que con el límite de cuadros activo daba lecturas falsas y recortaba partículas de más en monitores de 60Hz). Ahora recorta y también recupera, con piso del 50% para no dejar el rostro ralo. Ya no reconstruye partículas (no hay "saltos").
  - Polvo ambiental: el wrap vertical se hace moviendo su hogar en el mundo, no con módulo al pintar → se elimina el salto visible al empezar a formarse el rostro.
  - Cursor: empuje con remolino tangencial y proporcional a la velocidad (quieto, el hueco se vuelve a llenar). Se libera al salir de la ventana y al levantar el dedo en táctil (antes quedaba un "cursor fantasma").
  - Rostro: formación en cascada (retraso por partícula) en vez de todas a la vez.
  - Resize: si solo cambia la altura (barra de direcciones en móvil) no se regeneran partículas.
  - 120Hz limitado a 60fps; `saveData` cuenta como gama baja.
  - Depuración: `__particlesState` en consola (tier, perfScale, costMs, partículas activas/pintadas, faceEase).
- `src/components/AboutStats.astro` — `#face-anchor` ahora es una caja con tamaño real (3:4) y la foto siempre está en el markup; el canvas la desvanece (clase `particles-live` en `<html>`) solo cuando el retrato está listo. Sin JS o con `prefers-reduced-motion`, se ve la foto. Antes, con partículas activas, el anchor medía lo que el chip "Hola, soy Mich" y el rostro salía diminuto.
- `src/config.ts` — `PARTICLES_ENABLED = true`.
- `astro.config.mjs` — `site: 'https://itsmich.com.mx'`.
- `src/layouts/Layout.astro` — `<link rel="canonical">` y `og:image`/`twitter:image` siempre absolutas (los casos de estudio pasaban `/author.png` relativo).
- `src/pages/index.astro`, `src/pages/preview-stack.astro` — `hub-mich.vercel.app` → `itsmich.com.mx`.
- `.gitignore` — `anamAA/` (proyecto Angular con su propio repo git, no es parte del sitio).

### Pendiente (acción de Mich)
- Revisar el rostro y el polvo en su navegador real (GPU) y desplegar.

---

## 2026-07-22 · Contenido real en hero y proyectos

Segunda tanda del mismo día. Se sustituye contenido genérico/placeholder por datos reales y se corrige un error de SEO.

### Cambios aplicados en código

- `src/components/AboutStats.astro` — se elimina el `TODO(mich)` y las cifras inventadas ("15+ proyectos", "10+ clientes felices", "4+ años", "5+ industrias", "12+ tecnologías"). Nuevas cifras, todas respaldadas por un caso de estudio: **$1M USD** ahorro proyectado (AnamSeals), **6** ingenieros liderados, **~1M** unidades/mes, **+65%** rendimiento (Inteligencia Logística), **3** empresas, **2** idiomas. Motivo: "10+ clientes felices" contradecía el tono de marca "sin inflar" (prueba, no promesa).
- `src/data/projectsData.js` — se corrigen las fechas de los proyectos para que cuadren con la sección Trayectoria. Los tres proyectos de Bego (Inteligencia Logística, Tracking Aduanal, White-Label) pasan de "2026" a **2024-25**; AnamSeals (Bego AI) a **2025-26**; Luz.ia (Row Quintero) se mantiene en 2026. Afecta tanto `meta` como `brief.estado` de cada proyecto.
- `src/pages/proyectos/[slug].astro` — URL canónica de los casos de estudio: `itsmich.dev` → **`itsmich.com.mx`** (el dominio real). Corrige señal de SEO.

### Pendiente de esta tanda (acción de Mich)

- Correr `npm run build` y desplegar para ver los cambios en vivo.
- Nota: durante esta sesión el servidor MCP de Obsidian se cayó una vez; los cambios de métricas y fechas se verificaron después y sí quedaron guardados.

---

## 2026-07-22 · Reposicionamiento a Product Engineer

**Decisión de marca:** el título profesional pasa de *Frontend Engineer* a **Product Engineer**. El frontend (React, Next.js, TypeScript) deja de ser la identidad y pasa a ser una de las habilidades técnicas fuertes. Motivo: la esencia de la marca ("convierto problemas de negocio en productos") y la evidencia del trabajo (firmware IoT, arquitectura white-label, liderazgo de equipo) ya eran de producto; el título se había quedado corto.

**Nombre unificado:** se fija **Michelle Rodriguez** como nombre único para CV, LinkedIn, GitHub y footer.

**Estrategia SEO asociada:** para no perder alcance con reclutadores que buscan "Frontend Engineer", el título comunica el posicionamiento (Product Engineer) y las keywords técnicas (React, Next.js) se mantienen visibles en la meta description y en la sección de habilidades.

### Cambios aplicados en código

- `src/pages/index.astro` — `meta.title`: "Frontend Engineer" → "Product Engineer". `meta.description` reescrita a "Product Engineer especializado en frontend con React y Next.js…" (conserva keywords).
- `src/components/Hero.astro` — eyebrow del hero: "Ingeniero de software" → "Product Engineer".
- `src/layouts/Layout.astro` — `og:image:alt`: "Mich, Frontend Engineer" → "Mich, Product Engineer".

### Pendiente de esta tanda (acción de Mich)

- Correr `npm run build` en `hub-mich` y desplegar (Vercel) para que los cambios salgan en vivo.
- Verificar que el PDF del CV enlazado (`/pdf/CV_michelle_lara.pdf`) sea coherente con el nuevo título y nombre.
