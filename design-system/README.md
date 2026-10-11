# ./mich

Productos que resuelven, detalles que se notan.

Design system de itsmich.com.mx, el sitio personal de Michelle Rodriguez (Mich), Product Engineer. Construido a partir del código real del repo `MichelleeLara/hub-mich` (rama `feat/hero`, commit `28622a7`): `src/styles/product.css`, `tailwind.config.mjs` y `docs/design-system.md`. La vista viva está en `/design` del sitio.

> Regla de oro: ningún componente usa un hex, un px suelto ni una sombra a mano. Siempre `var(--token)` o la clase equivalente. Si algo no está aquí, no se usa: se propone, se decide y se agrega.

## Voz y contenido

- **Cercana y directa.** Primera persona ("Soy Mich"), sin jerga corporativa, sin inflar. Se explica como a un amigo inteligente que no es técnico.
- **Prueba, no promesa.** Cada cifra enlaza a un caso real (`< 2 min`, `+65%`, `6 ingenieros`). Nada de "10+ clientes felices".
- **Sí:** "Rehice el flujo de registro para que nadie tenga que pensar dónde hacer clic."
- **No:** "Implementación de soluciones digitales innovadoras de alta calidad."
- Título profesional: **Product Engineer**. Las keywords de frontend (React, Next.js, TypeScript) viven en la descripción y en habilidades.
- Wordmark: `./mich` (guiño dev, "desde aquí"), en ClashDisplay 600. Donde no cabe, `itsmich`.

## Principios

1. **Un acento, no un arcoíris.** El clay (`accent`) es el único color de marca, en ambos modos; todo lo demás es escala de grises. Se probó un azul para modo oscuro y se descartó.
2. **La tipografía hace el trabajo.** Jerarquía por tamaño y peso, nunca por color.
3. **El detalle es funcional.** Cada animación orienta o da feedback. Si es adorno, fuera.
4. **Dark y light, misma alma.** Los dos modos usan los mismos tokens; nada de colores sueltos por modo.
5. **Accesible por defecto.** Contraste AA, `alt` siempre, foco visible, objetivos táctiles de al menos 44px.

## Color

- Fondo de página `bg`; tarjetas, inputs y resultados en `surface`; el menú en `surface-glass` con blur.
- Texto en `ink`; secundario en `muted`. Nunca un tercer gris.
- Bordes en `line`; divisores internos en `line-subtle`.
- `accent` solo para: etiqueta de sección, punto del kicker, paso activo, foco, diagramas. No para fondos grandes ni para texto de párrafo.
- `accent-soft` es el fondo de la selección de texto y de la caja de 40px de un ícono (con el ícono en `accent`).
- `success` solo para "Disponible" y el nodo actual de Trayectoria.
- `accent-strong` y `accent-deep` son para las partículas en canvas.
- **Paneles:** un panel invertido (footer) toma los tokens del modo contrario dentro de su caja; un panel siempre oscuro (métrica destacada del caso) toma los de oscuro. El acento sigue siendo clay.
- **Excepción:** la tarjeta de proyecto es oscura en ambos modos porque va sobre foto: `#171717`, degradado a `#111` y tags `.tag-photo`.

## Tipografía

**ClashDisplay para nombres y cifras; Inter Tight para frases.** Nunca las dos a tamaños parecidos en el mismo bloque.

- `display` (ClashDisplay 600, hasta 144px, mayúsculas): solo el nombre del hero.
- `h1` (ClashDisplay 600, 44–80px): título de caso y proyecto destacado.
- `h2` (Inter Tight **650**, 30–48px, `-0.03em`): títulos de sección. Variante `h2-compact` en el footer.
- `h3` (ClashDisplay 600, 28–40px): títulos de tarjeta, cifras, rol en Trayectoria.
- `lead` 20 · `body` 16 · `small` 14 · `caption` 12 (mayúsculas) · `micro` 11 (mínimo del sistema).
- `label` (Permanent Marker) solo encima de un `h2`, siempre en `accent`.
- Pesos de Inter Tight: 400 texto, 500 UI, 600 énfasis, 650 `h2`, 900 solo el "MICH." gráfico del footer.
- Fuentes: ClashDisplay va como archivo (`fonts/`); Inter Tight y Permanent Marker se cargan de Google Fonts.

## Espacio, radios y elevación

- Espacio en 9 pasos (`space-1` a `space-9` = 4·8·12·16·24·32·48·64·96), para el espacio **entre** cosas. El relleno interno de un componente (botón 0×24, tag 6×14, input 14×16) es parte de su ficha.
- Sección: `container` 1152px, `gutter` 24px, `section-y` 104px (72 en móvil). Título de sección a contenido: `space-7`.
- Radios: `radius-sm` 8 (botones, inputs), `radius-md` 16 (tarjetas chicas), `radius-lg` 24 (proyectos, paneles), `radius-full` (menú, pills, tags, avatar). Redondo = etiquetar o navegar; esquina 8 = actuar.
- Sombras: `shadow-float` para lo que flota (menú), `shadow-lift` para lo que se separa del fondo (avatar, tarjetas del caso). En oscuro separa el borde.

## Motion

No es una familia de tokens aquí, pero en el código vive como CSS:

| Token | Valor | Uso |
| --- | --- | --- |
| `--dur-fast` | 150ms | confirmar: presionar, hover de color |
| `--dur-base` | 300ms | cambiar, señalar |
| `--dur-slow` | 500ms | entrar |
| `--dur-reveal` | 700ms | revelar al hacer scroll; tope de toda interacción |
| `--ease-out` | cubic-bezier(.22, 1, .36, 1) | toda transición CSS |

Cinco patrones: **entrar** (blur 6→0, scale .8→1, escalonado 120ms), **revelar** (sube 16px, una vez), **señalar** (flecha +4px), **confirmar** (scale .96), **cambiar** (pill que se desliza). Spring de framer-motion sin rebote. El ambiente (partículas, flotado y parallax del avatar, spotlight) se pausa con el botón de movimiento; `prefers-reduced-motion` apaga todo.

## Iconografía

SVG de trazo: `viewBox 0 0 24 24`, `fill none`, `stroke currentColor`, **stroke-width 1.5**, extremos redondos. 16px junto a texto y en botones; 20px en navegación y controles (en caja de 40px dentro de tarjetas). Decorativos con `aria-hidden="true"`; un botón de solo ícono lleva `aria-label`. Sin emoji.

## Accesibilidad verificada

Todo texto pasa 4.5:1. `accent` sobre `bg`: 6.1 (claro) y 9.3 (oscuro). `muted` sobre `surface`: 5.3 y 7.1. Selección: 13.5 y 14.1. Se mantienen foco visible de 2px en `accent`, "Saltar al contenido", objetivos de 44px, `prefers-reduced-motion` y botón de pausa.

## Componentes

Fichas en Componentes. Las clases (`.btn`, `.btn-primary`, `.btn-secondary`, `.text-link`, `.section-kicker`, `.section-heading`, `.tag`, `.tag-photo`) están en `components/bundle.css`. No hay bundle de JS: los componentes del sitio son Astro y React; las vistas previas son estáticas.

## No sincronizado

- Componentes de React/Astro sin compilar (Header, Navbar, ProjectsBento, ProjectBrief, Trayectoria, AboutStats, CaseHero): se documentan con vistas previas estáticas hechas a mano desde su código.
- Motion no es una familia de tokens en este formato: queda documentado arriba.
- Inter Tight y Permanent Marker no van como archivo: se cargan de Google Fonts.
- Los valores con `clamp()` se guardan con su máximo; el rango está en la nota de cada estilo.
