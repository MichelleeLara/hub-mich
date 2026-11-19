# ./mich — Style Reference
> Hoja blanca con grano, una sola tinta azul y tipografía de cartel: un cuaderno de ingeniería donde el producto real (capturas) hace de ilustración.

**Tema:** claro por defecto, oscuro equivalente (mismos tokens) · **Fuente de verdad:** `src/styles/product.css` · **Vista viva:** `/design` · **Formato:** [Refero Styles](https://styles.refero.design/) (DESIGN.md legible por IA)

Valores medidos del código el 21 oct 2026 (main `1461694`). Si este archivo y `product.css` no coinciden, manda `product.css`; la sección [Inconsistencias](#inconsistencias-detectadas-21-oct-2026) lista lo que hoy no cuadra.

itsmich.com.mx es el portafolio de Mich, Product Engineer. La página vive sobre un blanco puro con grano fino (13 %) que le quita lo digital, texto en un gris casi negro (`#202124`) y un único color con voz: el azul `#1d5fc4`, que marca lo accionable y las marcas de identidad (trazo a mano de las etiquetas, diagramas, la tarjeta destacada). Los titulares van en ClashDisplay 600, ancho y compacto; todo lo demás en Inter Tight. Las anotaciones de sección se escriben a mano en Rock Salt. Las secciones respiran (104 px entre ellas) y las tarjetas grandes son oscuras con capturas reales de las apps saliendo por la esquina. El footer invierte el tema y cierra la página como un marco oscuro.

## Tokens — Colores

| Nombre | Claro | Oscuro | Token | Rol |
|---|---|---|---|---|
| Papel | `#ffffff` | `#161616` | `--bg` | Fondo de página; lienzo dominante |
| Piedra | `#f3f3f1` | `#202020` | `--surface` | Tarjetas, inputs, paneles de servicio; la única capa sobre el papel |
| Vidrio | blanco 70 % | `#1c1c1c` 70 % | `--surface-glass` | Islas del menú y barra flotante, siempre con blur |
| Tinta | `#202124` | `#f6f6f6` | `--ink` | Titulares, texto principal, botón primario (relleno) |
| Grafito | `#62646b` | `#aaaab0` | `--muted` | Párrafos, descripciones, etiquetas de sección |
| Peltre | `#6d6e73` | `#86868c` | `--subtle` | 3.er nivel: numeración, metadatos mono, frase de cierre. Nunca un párrafo largo |
| Hilo | negro 12 % | blanco 13 % | `--line` | Bordes y divisores |
| Hilo fino | negro 5.5 % | blanco 7 % | `--line-subtle` | Divisores internos |
| Azul | `#1d5fc4` | `#4f8ff7` | `--accent` | La única voz de color: acción, foco, paso activo, trazo de etiquetas, diagramas |
| Azul profundo | `#0f3c82` | `#d8e6ff` | `--accent-deep` | Partículas; fondo degradado de la tarjeta destacada |
| Azul fuerte | `#174fa8` | `#7aa9f9` | `--accent-strong` | Partículas |
| Azul suave | `#e6eefb` | `#1a2638` | `--accent-soft` | Selección de texto, caja de íconos |
| Verde | `#15803d` | `#22c55e` | `--success` | Estado "Disponible" y nodo actual de Trayectoria |
| Carbón | `#171717` | `#171717` | `--card-dark` | Tarjetas de proyecto: oscuras en ambos modos |
| Azul tarjeta | `#1d5fc4` → `#0f3c82` | igual | `--card-accent` → `--card-accent-deep` | Degradado de la tarjeta destacada (constante, no cambia con el tema) |

Paneles: `.theme-inverse` (footer) toma los tokens del modo contrario; `.theme-dark` fuerza los de oscuro (solo los principales, ver inconsistencias). La intención es no usar clases `dark:` de Tailwind para color, porque los tokens cambian solos con `html.dark`.

## Tokens — Tipografía

### ClashDisplay — fuente ancla · `--font-display`
- **Sustituto:** Clash Grotesk / Satoshi Black (ancho, geométrico)
- **Pesos:** 600 (único)
- **Tamaños:** 22–26 (h3), 32–40 (h2 escritorio), 26–30 (h2 móvil), 52–60 (nombre del hero), hasta 80 (h1 de caso)
- **Line height:** 1.06–1.12
- **Letter spacing:** −0.012em en h2, −0.015 a −0.02em en h3, −0.03em en h1
- **Rol:** todos los titulares (h1, h2, h3), nombres, cifras y el wordmark `./mich`. Nunca en párrafos ni en metadatos.

### Inter Tight — texto y UI · `--font-sans`
- **Pesos:** 400 texto · 500 UI y botones · 600 énfasis
- **Tamaños:** 11, 12, 14, 16, 18
- **Line height:** 1.5–1.7 en párrafos; 1 en botones
- **Rol:** párrafos, navegación, botones, tags, formularios.

### Rock Salt — anotación a mano · `--font-note`
- **Pesos:** 400 · **Tamaños:** 11–13 · **Letter spacing:** 0
- **Rol:** solo la etiqueta de cada sección ("Servicios", "Mi enfoque"), en `--muted`, precedida del trazo ondulado azul (`.note-label`). Nunca en botones ni en texto corrido.

### Mono del sistema · `--font-mono`
- **Tamaños:** 11–12 · **Letter spacing:** .04–.08em
- **Rol:** metadatos (01, 02, categorías de proyecto, fechas) en `--subtle`.

### Escala tipográfica

| Paso | Token | Fuente | Tamaño | Peso | LH | Uso |
|---|---|---|---|---|---|---|
| h1 | `--fs-h1` | ClashDisplay | 44–80 | 600 | 1.05 | Título de caso |
| hero | — (local) | ClashDisplay | 34–44 móvil · 42–68 iPad · 52–60 escritorio | 600 | 1.06 | Nombre del hero (ls −0.045em) |
| h2 | `--fs-h2` | ClashDisplay | 26–30 móvil · 30–48 iPad · 32–40 escritorio | 600 | 1.06 | Título de sección: lo único que domina |
| h2 compacto | `--fs-h2-compact` | ClashDisplay | 26–32 | 600 | 1.2 | Cierre/footer |
| h3 | `--fs-h3` | ClashDisplay | 22–26 | 600 | 1.1 | Título de tarjeta o panel; siempre bajo el h2 |
| lead | `--fs-lead` | Inter Tight | 18 | 500 | 1.4 | Frase corta bajo un h3 |
| body | `--fs-body` | Inter Tight | 16 | 400 | 1.6 | Párrafos |
| small | `--fs-small` | Inter Tight | 14 | 400/500 | 1.5 | Botones, frase secundaria |
| caption | `--fs-caption` | Inter Tight / mono | 12 | 500 | 1.4 | Metadatos, chips |
| micro | `--fs-micro` | Inter Tight / Rock Salt | 11 | 400/500 | 1.2 | Tags, etiqueta de sección. **Mínimo del sistema** |

**Jerarquía en 4 niveles (no se mezclan):** sección (etiqueta Rock Salt + h2) → elemento (h3) → texto (16 `muted`, cierre 14 `subtle`) → metadato (mono 12 `subtle`).

## Tokens — Espaciado y forma

**Unidad base:** 4px · **Densidad:** aireada

### Escala de espaciado

| Nombre | Valor | Token | Uso |
|---|---|---|---|
| 1 | 4px | `--space-1` | Ícono pegado al texto |
| 2 | 8px | `--space-2` | Entre tags y chips |
| 3 | 12px | `--space-3` | Etiqueta → título, título → frase |
| 4 | 16px | `--space-4` | Entre párrafos y entre tarjetas del mosaico |
| 5 | 24px | `--space-5` | Relleno de tarjeta chica |
| 6 | 32px | `--space-6` | Relleno de tarjeta grande |
| 7 | 48px | `--space-7` | Título de sección → contenido |
| 8 | 64px | `--space-8` | Entre bloques de una sección |
| 9 | 96px | `--space-9` | Separaciones grandes |

### Radios

| Elemento | Valor | Token |
|---|---|---|
| Botones, inputs | 8px | `--radius-sm` |
| Tarjetas chicas, capturas | 16px | `--radius-md` |
| Paneles | 24px | `--radius-lg` |
| Tarjetas grandes (mosaico, Servicios) | 28px | `--radius-xl` |
| Menú, pills, tags, tabs, avatar | 999px | `--radius-full` |

Regla: más grande el elemento, más grande el radio. Redondo = navegar o etiquetar; esquina 8 = actuar.

### Layout
- **Ancho máximo:** 1152px (`--container`), gutter 24px
- **Entre secciones:** 104px (72 en móvil) — `--section-y`
- **Relleno de tarjeta:** 24–36px (24 en móvil)
- **Entre elementos:** 8–16px
- **Breakpoints:** 768 (tablet), 961 (mosaico de 12 columnas), 1025 (escritorio: titulares más ligeros)

## Componentes

### Barra flotante (Navbar)
**Rol:** navegación principal y barra contextual de cada sección.
Barra de 60px (68px en los modos contextuales) en `--surface-glass` con blur y `--shadow-float`, radio completo; controles internos de 44–48px. Cambia de modo según la sección: pasos (Servicios, modo "asistencia": es el selector de los tres servicios, con temporizador y contador) o persona (avatar, nombre, "Product Engineer · …" y "Agendar videollamada"). Aparece con un pop tipo Apple (resorte 460/24, sin rebote visible). En móvil es una barra inferior de 68px con radio 22, íconos y etiquetas.

### Botón primario
**Rol:** la acción principal de cada zona ("Cuéntame tu idea", "Hablemos de tu idea").
Relleno `--ink`, texto `--bg`, 48px de alto, padding 0×24, radio 8, Inter Tight 14/500, flecha ↗ que avanza 4px en hover. Escala .96 al presionar.

### Botón secundario
**Rol:** alternativa de menor compromiso ("Ver proyectos").
Sin relleno, borde `--line` (→ `--muted` en hover), mismo tamaño y radio que el primario.

### Enlace con subrayado
**Rol:** salidas discretas ("Ver en práctica · Tracking Aduanal", "¿Buscas mi CV? Léelo aquí").
13–14px; el fragmento enlazado va en `--ink` con subrayado `--line` (offset 3–4px) y en hover solo se oscurece el subrayado.

### Encabezado de sección (`SectionHeading`)
Etiqueta Rock Salt 11–13 `--muted` con trazo azul → 12px → h2 ClashDisplay. A la derecha, en escritorio, un párrafo de apoyo de máx. 340–360px en `--muted`.

### Tarjeta del mosaico de proyectos (`ProjectsWobble`)
**Rol:** prueba de trabajo con el producto real.
Carbón (`--card-dark`) con brillo azul radial en la esquina, borde blanco 8 %, radio 28, grano 12 %. Texto: meta mono 12 blanco 60 %, h3 ClashDisplay 22–28 blanco, frase 16 blanco 72 %. La captura (solo la app, sin dispositivo ni fondo) sale por la esquina inferior derecha con radio 16 y sombra `0 30px 60px` negro 45 %; hasta 960px va debajo del texto. Una sola tarjeta en azul (degradado `--card-accent` → `--card-accent-deep`). Con mouse, el contenido se desplaza máx. 10px.

### Servicios compactos (`ServicesCompact`)
Panel `--surface` mezclado con `--bg`, radio 28. Sin selector propio: los servicios se eligen desde la barra flotante en modo asistencia. A la izquierda la información (contador "1/3", h3, lead, descripción, chips de entregables, resultado con check); a la derecha el gráfico `ServiceMorph` sobre una retícula de puntos.

### Gráfico que se transforma (`ServiceMorph`)
Un solo boceto que cambia con sentido entre Diseño → Desarrollo → Automatización. Trazo de línea, rellenos `--surface`, acento solo en lo que cambia, sombras con `feDropShadow` negro 7 % (45 % en oscuro).

### Tag y chip
Pill, borde `--line`, 11–12px `--muted`, padding 6×12–14.

### Footer (`theme-inverse`)
Panel con los tokens del modo contrario, grano conservado, h2 compacto y el botón de cierre con el mismo evento de analítica que el hero.

## Qué sí y qué no

### Sí
- Usar `--accent` para una sola cosa por zona: la acción, el paso activo o una marca de identidad.
- Dejar que solo la etiqueta + h2 de sección dominen; todo h3 queda visiblemente por debajo.
- Mostrar el producto real: capturas solo de la app, nítidas (2000px para pantallas 2x), a opacidad completa.
- Mantener el grano en claro (13 %) y casi nada en oscuro (3 % página, 0 % tarjetas). Excepción: las tarjetas carbón del mosaico conservan 12 % en ambos modos.
- Pausar toda animación ambiental por defecto (`html.motion-paused`) y respetar `prefers-reduced-motion`.
- Objetivos táctiles ≥ 44px, foco visible de 2px en `--accent`, contraste AA.

### No
- No introducir un segundo color de marca. El verde es estado, no marca.
- No usar ClashDisplay en párrafos, metadatos o a tamaño de h2 dentro de una tarjeta.
- No usar texto por debajo de 11px en la interfaz.
- No poner hex sueltos ni radios inventados en un componente: si falta un token, se agrega.
- No mover la tarjeta completa con el cursor (deja franjas de otro tono); solo su contenido.
- No usar sombras para separar en modo oscuro: ahí separa el borde.
- No centrar párrafos largos.

## Superficies

| Nivel | Nombre | Valor | Propósito |
|---|---|---|---|
| 0 | Papel con grano | `--bg` + grano 13 % | Lienzo de toda la página |
| 1 | Piedra | `--surface` | Paneles y tarjetas claras (Servicios, formularios) |
| 2 | Vidrio | `--surface-glass` + blur | Navegación flotante |
| 3 | Carbón | `--card-dark` | Tarjetas de proyecto, oscuras en ambos modos |
| 4 | Invertido | `.theme-inverse` | Footer: marco final de la página |

## Elevación

Dos sombras y nada más: `--shadow-float` (`0 8px 24px -8px` negro 12 %) para lo que flota (menú, barra) y `--shadow-lift` (`0 24px 48px -12px` negro 18 %) para lo que se separa del fondo. Las capturas dentro de tarjetas oscuras llevan su propia sombra profunda. En oscuro la separación la hace el borde.

## Imágenes

Capturas reales de las apps (Ommia, Inteligencia Logística, Tracking Aduanal, White-Label), recortadas a solo la interfaz, sin marco de dispositivo ni fondo; el iPhone de Tracking va con esquinas de teléfono. Se sirven en webp a 720/1440/2000 (`scripts/optimize-project-covers.mjs`). Retrato propio en el hero y como avatar de la barra. Los gráficos de servicios son ilustración de línea propia (biblioteca en `/biblioteca-graficos`), nunca stock. Partículas WebGL de fondo, pausadas por defecto.

## Movimiento

| Token | Valor | Uso |
|---|---|---|
| `--dur-fast` | 150ms | Confirmar: presionar, hover de color |
| `--dur-base` | 300ms | Cambiar / señalar |
| `--dur-slow` | 500ms | Entrar |
| `--dur-reveal` | 700ms | Revelar al hacer scroll — tope de toda interacción |
| `--ease-out` | `cubic-bezier(.22,1,.36,1)` | Toda transición CSS |

## Guía para agentes (prompts)

**Referencia rápida de color**
- fondo: `#ffffff` con grano · superficie: `#f3f3f1`
- texto principal: `#202124` · secundario: `#62646b` · tercero: `#6d6e73`
- borde: negro 12 % · acción/acento: `#1d5fc4` · botón primario: relleno `#202124`

**Ejemplos**
1. *Encabezado de sección:* etiqueta Rock Salt 12px `#62646b` precedida de un trazo ondulado azul de 18×8; 12px abajo, h2 ClashDisplay 600 a 36px, `#202124`, letter-spacing −0.012em, line-height 1.06. A la derecha, párrafo Inter Tight 16px `#62646b` de máx. 340px.
2. *Tarjeta de proyecto:* `#171717`, radio 28, padding 36, brillo radial azul 22 % en la esquina superior derecha, grano 12 %. Meta mono 12 blanco 60 %, h3 ClashDisplay 600 26px blanco, frase Inter Tight 16 blanco 72 %. Captura de la app con radio 16 saliendo por la esquina inferior derecha, al 58 % del ancho.
3. *Panel de servicio:* superficie `#f3f3f1` mezclada con blanco, radio 28, borde negro 12 %. Columna de info con contador mono "1/3", h3 ClashDisplay 24px, lead 18/500, chips pill de 12px y resultado con check; el gráfico ocupa la otra mitad.

## Similares en Refero

Brex y Figma ("blanco con un acento"), Morflax ("porcelana con una chispa azul"), Mercury.

---

## Inconsistencias detectadas (21 oct 2026)

Encontradas al comparar este documento con el código. **No se ha cambiado nada en el sitio**; cada punto trae una propuesta para decidir.

### Resueltas el 21 oct 2026 (antes prioridad alta)

1. ~~`design-system/tokens.json` desactualizado~~ → regenerado: tipografía actual (ClashDisplay en todos los titulares, h3 22–26, lead 18, Rock Salt como fuente de anotación), `--radius-xl` y los colores de tarjeta.
2. ~~Tres documentos que se contradicen~~ → este DESIGN.md es el principal; `docs/design-system.md` y `design-system/README.md` lo enlazan arriba y se corrigieron sus datos viejos ("clay", tamaños del hero y del h2 móvil, `ProjectsBento`, contraste del azul: 6.0 claro / 5.7 oscuro).
3. ~~Texto de 9–10px en la barra~~ → todo el texto de `Navbar.jsx` a 11px. En la barra móvil de Servicios se redujo el relleno lateral para que "Automatización" quepa completo a 375px.
4. ~~Toques de menos de 44px en la barra de pasos~~ → flechas (40px de dibujo) y segmentos de progreso (12px) con área de toque invisible de 44px; el dibujo no cambia. Esta variante solo se usa hoy en la versión anterior de Servicios (preview).
5. ~~Radio de 28px sin token~~ → `--radius-xl: 28px` en el mosaico y en Servicios.
6. ~~Hex sueltos en la tarjeta de proyecto~~ → `--card-dark`, `--card-accent`, `--card-accent-deep`; el blanco del texto pasa a `--ink` del panel oscuro (`#f6f6f6`).

### Nueva (encontrada al verificar)

- **"Un respiro" (`RelaxSection`) tiene controles de 26–34px** ("Escríbeme", "Reto", silenciar) y leyendas de teclas por debajo de 11px. Las leyendas imitan un teclado real y pueden quedar como excepción; los controles deberían tener área de toque de 44px.

### Media — reglas que el código ya no sigue

7. **`.theme-dark` no fuerza todo el tema oscuro**: no redefine `--surface-glass`, `--accent-strong`, `--accent-deep` ni `--success`, así que dentro de un panel oscuro en modo claro heredan valores claros. *Propuesta:* copiar el bloque completo de `html.dark`.
8. **Clases `dark:` de Tailwind en `Navbar.jsx`** (22 usos para fondos y bordes), contra la regla "los tokens cambian solos". *Propuesta:* token para esos casos (p. ej. `--line-strong`) o aceptar la excepción en la barra.
9. **El h3 de las tarjetas del mosaico llega a 28px** (`ProjectsWobble.astro`), por encima del tope de `--fs-h3` (26px). *Propuesta:* usar `var(--fs-h3)`.
10. **El verde se usa fuera de su rol**: el check de "resultado" en `ServicesCompact.astro` va en `--success`, pero la regla lo reserva para "Disponible" y el nodo actual de Trayectoria. *Propuesta:* check en `--ink`/`--accent`, o ampliar la regla a "resultado logrado".
11. **Line-height de párrafos disperso**: los docs dicen 1.7 para body; en componentes hay 1.5, 1.55, 1.6 y 1.7. *Propuesta:* fijar 1.6 como `--lh-body`.
12. **Tracking sin escala**: 16 valores distintos de letter-spacing entre el inicio y el CV (de −0.055em a .14em). *Propuesta:* como Refero/Brex, un valor por tamaño: −0.03 (≥ 60), −0.02 (40), −0.012 (h2), −0.015 (h3), 0 (texto), +.06 (mono/uppercase).
13. **Duraciones fuera de tokens**: 160, 250, 360, 400, 420, 450, 520 y 750ms en componentes; `ServiceMorph` usa 750ms, por encima del tope de 700ms. *Propuesta:* mapear a fast/base/slow/reveal; documentar la transformación del gráfico como excepción si 750 es intencional.
14. **Restos de "clay"**: `docs/design-system.md` y `design-system/README.md` siguen llamando "clay" al acento, que hoy es azul.
15. **Componentes documentados que ya no están en el inicio**: los docs describen `ProjectsBento` y la tarjeta "sobre foto"; el inicio usa `ProjectsWobble` y `ServicesCompact`.
16. **Dos sistemas de etiqueta**: `.section-kicker` (punto + mayúsculas) sigue en `product.css` y en el caso de estudio, pero el inicio ya usa la etiqueta Rock Salt. *Propuesta:* migrar el caso a `.note-label` o documentar el kicker como "solo páginas de caso".

### Baja — orden

17. **Pesos con dos sintaxis** (`font-weight: 600` y `font-semibold`/`font-medium`) mezcladas en Navbar y Trayectoria; funcionan igual, pero dificultan auditar.
18. **El grano de página sigue marcado como "Prueba:"** en `product.css` aunque ya es decisión.

> Nota para auditorías automáticas: los tamaños en px dentro de los SVG (`ServiceMorph`, teclado de `RelaxSection`) están en unidades de viewBox; no cuentan como texto ni como inconsistencia.
