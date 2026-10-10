# Backlog — itsmich

Tareas pendientes del sitio y la marca, priorizadas por impacto sobre la estrategia (ver `Marca personal/FUNDAMENTOS-MARCA.md`). Estado real del sitio a **2026-10-07**.

Convención: `[ ]` pendiente · `[~]` en progreso · `[x]` hecho. Prioridad: 🔴 alta · 🟡 media · 🟢 baja.

---

## En progreso / recién hecho

- [x] 🔴 Reposicionar título a **Product Engineer** en el sitio (hero, `<title>`, OG). — *2026-07-22, ver BITACORA*
- [x] 🔴 **Métricas reales en el hero** (`AboutStats.astro`): sustituidas las genéricas por cifras respaldadas por casos. — *2026-07-22*
- [x] 🔴 **Fechas de proyectos** (`projectsData.js`): cuadradas con la Trayectoria (Bego 2024-25, Bego AI 2025-26, Row Quintero 2026). — *2026-07-22*
- [x] 🔴 **URL canónica** de casos de estudio (`[slug].astro`): `itsmich.dev` → `itsmich.com.mx`. — *2026-07-22*
- [ ] 🔴 **Deploy** de todos los cambios (el build local pasa a 2026-10-07; falta desplegar).
- [x] 🔴 **Partículas reactivadas y optimizadas** (ver BITACORA 2026-10-07).

---

## Coherencia de marca (alta prioridad)

- [x] 🔴 **Métricas del hero/about son genéricas.** ~~"15+ proyectos", "10+ clientes felices"~~ → sustituidas por cifras reales (+65%, 6 ingenieros, $1M USD, ~1M unidades/mes, 3 empresas, 2 idiomas). Hecho en `AboutStats.astro`. — *2026-07-22*
- [x] 🔴 **Fechas inconsistentes en proyectos.** ~~Tarjetas decían "2026"~~ → cuadradas con la Trayectoria en `projectsData.js`. — *2026-07-22*
- [ ] 🟡 **Alinear LinkedIn y GitHub** con el título actual del sitio (Software Engineer — ver BITACORA 2026-10-07) y nombre (Michelle Rodriguez), y enlazar a itsmich.com.mx. Mismo tagline en los tres lados.
- [ ] 🟡 **CV desactualizado.** No refleja Bego (frontend → firmware/hardware, liderazgo de equipo). Reescribir con título Product Engineer, nombre Michelle Rodriguez, y bullets que abran con el problema de negocio, no con el stack. (Tarea grande, tratar aparte.)

## SEO / técnico

- [x] 🔴 **URL canónica incorrecta en casos de estudio.** ~~`https://itsmich.dev/...`~~ → `itsmich.com.mx` en `[slug].astro`. — *2026-07-22*
- [x] 🟡 Todo el sitio usa `itsmich.com.mx` como dominio canónico (`site` en astro.config + `<link rel="canonical">`). — *2026-10-07*
- [ ] 🟢 `src/pages/preview-stack.astro` es una vista temporal que se publica en producción: borrarla o marcarla `noindex` cuando ya no se use.

## Contenido / demostración (marca "prueba, no promesa")

- [ ] 🟡 **Casos de estudio con mockup decorativo vacío.** El detalle de cada proyecto (`[slug].astro`) muestra una ventana/mockup de placeholder sin captura real del producto. Sustituir por imágenes reales cuando se pueda (o quitar si no hay).
- [ ] 🟢 Considerar versión en inglés del sitio para ampliar alcance con reclutadores (B1 alcanza para contenido escrito).

---

## Notas

- El documento `AUDITORIA-MARCA.md` es de una auditoría **anterior** y describe una versión vieja del sitio (hero "Desarrollador Frontend React", servicios placeholder, typos en footer). Gran parte ya se resolvió. Se conserva como referencia histórica; este backlog refleja el estado actual.
