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

1. **Un acento, no un arcoíris.** El azul (`accent`) es el único color de marca, en ambos modos; todo lo demás es escala de grises.
2. **La tipografía hace el trabajo.** Jerarquía por tamaño y peso, nunca por color.
3. **El detalle es funcional.** Cada animación orienta o da feedback. Si es adorno, fuera.
4. **Dark y light, misma alma.** Los dos modos usan los mismos tokens; nada de colores sueltos por modo.
5. **Accesible por defecto.** Contraste AA, `alt` siempre, foco visible, objetivos táctiles de al menos 44px.

## Color

- Fondo de página `bg`; tarjetas, inputs y resultados en `surface`; el menú en `surface-glass` con blur.
- Texto en `ink`; secundario en `muted`; tercer nivel en `subtle` solo para numeración, ejes y rótulos decorativos. Nunca un cuarto gris.
- Bordes en `line`; divisores internos en `line-subtle`.
- `accent` solo para lo accionable (botón primario, enlaces, paso activo, foco) y para marcas de identidad (trazo de las etiquetas, punto del kicker, diagramas). Nunca para subtítulos, numeración ni texto de párrafo.
- `accent-soft` es el fondo de la selección de texto y de la caja de 40px de un ícono (con el ícono en `accent`).
- `success` solo para "Disponible" y el nodo actual de Trayectoria.
- `accent-strong` y `accent-deep` son para las partículas en canvas.
- **Paneles:** un panel invertido (footer) toma los tokens del modo contrario dentro de su caja; un panel siempre oscuro (métrica destacada del caso) toma los de oscuro. El acento sigue siendo clay.
- **Excepción:** la tarjeta de proyecto es oscura en ambos modos porque va sobre foto: `#171717`, degradado a `#111` y tags `.tag-photo`.

## Tipografía

**ClashDisplay es la fuente ancla: todos los titulares (h1, h2, h3), nombres y cifras. Inter Tight para texto y UI.** Nunca las dos a tamaños parecidos en el mismo bloque.

**Jerarquía en 4 niveles (no se mezclan):**
1. Sección: etiqueta Rock Salt 11–13px en `muted` + título h2 ClashDisplay 30–40px en `ink`. Es lo único que domina.
2. Título de elemento (h3): ClashDisplay 20–26px en `ink`.
3. Texto: Inter Tight 16px en `muted`; la frase secundaria o de cierre en 14px `subtle`.
4. Metadato (01, 02, fechas, índices): mono 12px en `subtle`, con algo de tracking. Nunca en ClashDisplay ni a tamaño de titular.
