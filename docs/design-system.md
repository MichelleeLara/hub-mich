# Design system ./mich

Fuente de verdad del diseño de itsmich.com.mx. Los valores viven en
`src/styles/product.css`; Tailwind solo los nombra (`tailwind.config.mjs`).
Vista viva: [`/design`](../src/pages/design.astro) (oculta, `noindex`).

> **Regla de oro:** ningún componente usa un hex, un px suelto ni una sombra a
> mano. Siempre `var(--token)` o la clase de Tailwind equivalente.
> Si algo no está aquí, no se usa: se propone, se decide y se agrega.

## Principios

1. **Un acento, no un arcoíris.** El clay es el único color de marca; todo lo demás es escala de grises.
2. **La tipografía hace el trabajo.** Jerarquía por tamaño y peso, nunca por color.
3. **El detalle es funcional.** Cada animación orienta o da feedback. Si es adorno, fuera.
4. **Dark y light, misma alma.** Los dos modos usan los mismos tokens semánticos.
5. **Accesible por defecto.** Contraste AA, `alt` siempre, foco visible, objetivos táctiles ≥ 44px.

## Color

| Token | Claro | Oscuro | Uso | Tailwind |
|---|---|---|---|---|
| `--bg` | `#ffffff` | `#161616` | Fondo de página | `bg-bg` |
| `--surface` | `#f3f3f1` | `#202020` | Inputs, tarjetas, resultados | `bg-surface` |
| `--surface-glass` | white/70 | `#1c1c1c`/70 | Islas del menú (con blur) | `bg-surface-glass` |
| `--surface-particle-card` | `#f9f9f8` | `#202020` | Laboratorio de partículas | — |
| `--ink` | `#202124` | `#f6f6f6` | Texto principal, botón sólido | `text-ink` |
| `--muted` | `#62646b` | `#aaaab0` | Texto secundario | `text-muted` |
| `--subtle` | `#6d6e73` | `#86868c` | 3er nivel: numeración, ejes, rótulos decorativos | `text-subtle` |
| `--line` | negro .12 | blanco .13 | Bordes y divisores | `border-line` |
| `--line-subtle` | negro .055 | blanco .07 | Divisores suaves | `border-line-subtle` |
| `--accent` | `#1d5fc4` | `#4f8ff7` | Etiquetas, foco, estado activo, diagramas | `text-accent` |
| `--accent-strong` | `#174fa8` | `#7aa9f9` | Partículas | `text-accent-strong` |
| `--accent-deep` | `#0f3c82` | `#d8e6ff` | Partículas · detalle | `text-accent-deep` |
| `--accent-soft` | `#e6eefb` | `#1a2638` | Selección de texto, fondo de íconos | `bg-accent-soft` |
| `--success` | `#15803d` | `#22c55e` | Estado "Disponible" | `text-success` |

- Sin clases `dark:` para color: los tokens ya cambian solos con `html.dark`.
- **Paneles:** `.theme-inverse` (footer: modo contrario) y `.theme-dark` (siempre oscuro, métrica destacada del caso) redefinen los tokens dentro de su caja.
- **Excepción:** la tarjeta de proyecto es oscura en ambos modos porque va sobre foto (`#171717`, `.tag-photo`). Son constantes del componente.
- En `<canvas>`, leer colores con `tokenColor('--accent-strong')` (`src/lib/tokens.ts`): se cachea y se actualiza al cambiar el tema.

## Tipografía

**ClashDisplay para nombres y cifras; Inter Tight para frases.** Nunca las dos a tamaños parecidos en el mismo bloque.

| Paso | Token | Fuente | Tamaño | Detalle |
|---|---|---|---|---|
| display | `--fs-display` | ClashDisplay 600 | 48–144px | uppercase, lh .98, scaleY 1.14 (hero) |
| h1 | `--fs-h1` | ClashDisplay 600 | 44–80px | lh 1.05, ls -.03em (caso, destacado) |
| h2 | `--fs-h2` | ClashDisplay **600** | 30–48px (móvil 30–38px) | lh 1.1, ls -.012em (`SectionHeading`); fuente ancla de todos los titulares |
| h2 compacto | `--fs-h2-compact` | ClashDisplay 600 | 26–32px | footer |
| h3 | `--fs-h3` | ClashDisplay 600 | 22–26px | lh 1.1, ls -.02em (tarjetas, cifras, números de etapa). Siempre por debajo del h2: solo la etiqueta y el título de sección dominan |
| lead | `--fs-lead` | Inter Tight 400 | 18px | lh 1.5 |
| body | `--fs-body` | Inter Tight 400 | 16px | lh 1.7 |
| small | `--fs-small` | Inter Tight 400/500 | 14px | botones, labels |
| caption | `--fs-caption` | Inter Tight 500/600 | 12px | kicker, menú (uppercase) |
| micro | `--fs-micro` | Inter Tight 500 o mono | 11px | tags, metadatos. **Mínimo del sistema** |
| label | `--font-note` | Rock Salt | 11–13px | solo anotaciones de sección, en `--muted`, con `.note-label` (trazo a mano en acento) |

Pesos de Inter Tight: 400 texto · 500 UI · 600 énfasis · 900 solo el "MICH." del footer. Los titulares ya no usan Inter Tight.
En Tailwind: `text-[length:var(--fs-h3)]`, `font-ClashDisplay`, `font-mono`.

## Espaciado y layout

| Token | px | Tailwind | Uso |
|---|---|---|---|
| `--space-1` | 4 | `1` | ícono pegado al texto |
| `--space-2` | 8 | `2` | entre tags, dentro del menú |
| `--space-3` | 12 | `3` | etiqueta → título |
| `--space-4` | 16 | `4` | entre párrafos |
| `--space-5` | 24 | `6` | relleno de tarjeta chica |
| `--space-6` | 32 | `8` | relleno de tarjeta grande, grid de proyectos |
| `--space-7` | 48 | `12` | título de sección → contenido |
| `--space-8` | 64 | `16` | entre bloques de una sección |
| `--space-9` | 96 | `24` | separaciones grandes |

La escala es para el espacio **entre** cosas. El relleno interno de un componente (botón 0×24, tag 6×14, input 14×16) es parte de su ficha.

Layout: `--container` 1152px · `--gutter` 24px · `--section-y` 104px (72 en móvil). Úsalos con `.section-shell`.
Breakpoints: `xs` 345 · `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536.

## Radios y elevación

| Token | Valor | Tailwind | Uso |
|---|---|---|---|
| `--radius-sm` | 8px | `rounded-control` | botones, inputs |
| `--radius-md` | 16px | `rounded-card` | tarjetas chicas, resultado del brief |
| `--radius-lg` | 24px | `rounded-panel` | tarjetas de proyecto, paneles |
| `--radius-full` | 999px | `rounded-full` | menú, pills, **tags**, avatar |

Redondo = etiquetar o navegar; esquina 8 = actuar.

| Token | Uso | Tailwind |
|---|---|---|
| `--shadow-float` | lo que flota: islas del menú, barra móvil | `shadow-float` |
| `--grain` · `.grain` | ruido 13% en claro (página y tarjetas grandes); en oscuro 3% en la página y tarjetas sin grano | — |
| `--shadow-lift` | lo que se separa del fondo: avatar, tarjetas del caso | `shadow-lift` |

En oscuro la separación la hace el borde, no la sombra.

## Motion

| Token | Valor | Uso |
|---|---|---|
| `--dur-fast` | 150ms | confirmar: presionar, hover de color |
| `--dur-base` | 300ms | cambiar / señalar |
| `--dur-slow` | 500ms | entrar |
| `--dur-reveal` | 700ms | revelar al hacer scroll — tope de toda interacción |
| `--ease-out` | `cubic-bezier(.22,1,.36,1)` | toda transición CSS |

framer-motion: `SPRING` (.3s), `SPRING_SLOW` (.5s), `STAGGER` en `src/lib/motion.js`. Rebote siempre 0.

**5 patrones:** entrar (blur 6→0 + scale .8→1), revelar (sube 16px, una vez), señalar (flecha +4px), confirmar (scale .96), cambiar (pill que se desliza).
**Ambiente** (partículas, flotado y parallax del avatar, spotlight) va aparte y se pausa con el botón de movimiento (`html.motion-paused`). `prefers-reduced-motion` apaga todo.

## Componentes

| Componente | Dónde | Cómo se arma |
|---|---|---|
| Botón | `.btn` + `.btn-primary` / `.btn-secondary` | 48px, padding 0×24, `--radius-sm`, small 500, ícono 16. Flecha `.btn-arrow` +4px en hover |
| Enlace con flecha | `.text-link` | small 600, min 44px, gap 12 |
| Encabezado de sección | `SectionHeading.astro` | label (Rock Salt) → 12 → h2; prop `compact` |
| Kicker | `.section-kicker` | caption 600 uppercase, punto de 6px en `--accent` |
| Tag | `.tag` / `.tag-photo` | `--radius-full`, micro 500. `.tag` con borde; `.tag-photo` sobre foto |
| Tarjeta de proyecto | `ProjectsBento.astro` | `--radius-lg`, foto + degradado, tags arriba, padding `--space-6` |
| Tarjeta de superficie | caso, brief | `--surface`, padding `--space-6`, `--radius-md`; con `shadow-lift` si se separa del fondo |
| Formulario | `ProjectBrief.astro` | input 14×16, `--radius-sm`, borde `--muted`, foco 2px `--accent` offset 3 |
| Navegación | `Header.jsx`, `Navbar.jsx` | islas 44px, `--surface-glass`, `shadow-float`; pill 32px que se desliza |
| Hero lateral | `Hero.astro` | nombre ClashDisplay 600 de 42–68px (38–60px móvil), retrato lateral de 240×344px (112×152px arriba en móvil); ficha en `design-system/components/Hero/README.md` |
| Parada de Trayectoria | `Trayectoria.astro` | nodo 14px (actual en `--success`), fechas caption, rol h3, empresa lead, `.tag` |
| Datos | `AboutStats.astro`, `CaseHero.astro` | cifra h3 + etiqueta small; `dl` con dt micro uppercase |

## Íconos

SVG de trazo: `viewBox 0 0 24 24`, `fill none`, `stroke currentColor`, **stroke-width 1.5**, extremos redondos.
Tamaños: **16** junto a texto y en botones · **20** en navegación y controles (en caja de 40 dentro de tarjetas).
Decorativos con `aria-hidden="true"`; botones de solo ícono con `aria-label`.

## Accesibilidad verificada

Todos los textos ≥ 4.5:1. Clay sobre fondo 6.1 (claro) / 9.3 (oscuro); `--muted` sobre surface 5.3 / 7.1; `--subtle` sobre surface 4.6 / 4.5; selección 13.5 / 14.1.
Se mantienen: foco visible, "Saltar al contenido", objetivos ≥ 44px, `prefers-reduced-motion` y botón de pausa.

## Cómo cambiar algo

1. Proponerlo y probarlo (canvas "itsmich · Design system" o `/design`).
2. Registrarlo en `Marca personal/02 Estrategia/Decisiones.md` con fecha y porqué.
3. Cambiar el token en `product.css` (y en esta guía). Nunca parchear un componente con un valor suelto.

## Recursos gráficos reutilizables

Los gráficos aprobados del bento de servicios fijan el estilo inicial. Guía e inventario: [Lenguaje gráfico](../design-system/graphics/README.md). Biblioteca interna: `/biblioteca-graficos`, con recursos editables, referencia asociada y comparación clara/oscura. Se usan los tokens del repo; la referencia morada aporta las formas, no la paleta.
