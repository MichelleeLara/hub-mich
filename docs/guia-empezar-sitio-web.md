# Cómo empezar un sitio web — guía de trabajo

> **Borrador.** No es la versión final: se cierra cuando esté lista la primera versión del portafolio y tengamos una visión más clara del servicio.

Base del servicio de diseño y desarrollo web. Se aplica primero al portafolio (itsmich.com.mx) y después a cada cliente.

**Fuentes**
- [V1] Self-Made Web Designer, *6 EASY Tips to 10x Any Site's Design* — youtube.com/watch?v=pbhLsV-Dyho
- [V2] Self-Made Web Designer, *11 years of web design knowledge in 7 minutes* — youtube.com/watch?v=ityZtG3FMgw
- [V3] Sam Crawford, *Todos los conceptos de diseño web explicados en menos de 13 minutos* — youtube.com/watch?v=PKYNTm2m8eA
- [V4] Air (Creative Operations), *The Science of Building a Premium Brand* — youtube.com/watch?v=hDsqIH6Xai8
- [V5] Self-Made Web Designer, *Give Me 11 Minutes I'll Show You How to Design $10k Sites* — youtube.com/watch?v=6SClbxo1cfo
- [P] Lo aprendido construyendo este portafolio (design system, rendimiento, accesibilidad).

YouTube no dejó descargar las transcripciones: los puntos de V1–V5 salen de los capítulos y del resumen que escribió el autor. El detalle práctico de cada paso es criterio propio, marcado como **[P]**.

---

## Fase 1 · Audiencia y objetivo (antes de diseñar)

1. **Conoce a tu audiencia** [V2 · 06:03]. Quién entra, qué problema trae, qué le genera desconfianza.
2. **Una acción principal por sitio** [V2 · 05:01 "Design vs conversion"]. Un sitio bonito que no lleva a una acción no cumple. Define cuál es (agendar, escribir, comprar) y cómo se mide.
3. **Escribe el mensaje antes que el diseño** [P]. Una frase de qué haces, para quién y qué resultado obtiene.

Entregable: brief de una página (audiencia, acción principal, mensaje, métrica).

## Fase 2 · Estructura y contenido

4. **Jerarquía visual** [V2 · 00:22]. En cada pantalla, el ojo debe saber qué leer primero, segundo y tercero (tamaño, peso, color, espacio).
5. **Mapa de secciones** [P]. Cada sección responde una duda de la audiencia y empuja hacia la acción principal. Si una sección no hace ninguna de las dos, sobra.
6. **Botones que reciben clics** [V2 · 01:33]. Un solo botón primario por vista, texto que dice qué pasa al hacer clic, contraste alto y área táctil de 44px [P].

Entregable: wireframe con secciones, textos reales y llamadas a la acción.

## Fase 3 · Sistema visual (los cuatro pilares)

7. **Color con reglas** [V2 · 02:02]. Neutros + un solo acento reservado para lo accionable; contraste AA (4.5:1) en todo texto [P].
8. **Tipografía que se lee bien** [V2 · 03:03] **con una fuente ancla** [V1 · tip 1]. Una fuente principal para titulares y una de apoyo que contraste. Evitar dos fuentes que compitan por el mismo papel.
9. **Imágenes con propósito** [V2 · 04:30]. Cada imagen explica, prueba o genera confianza; si solo decora, se quita o se reemplaza.
10. **Niveles de texto** [V1 · tip 5]. Tres niveles (principal, secundario, terciario), todos en AA.

Entregable: tokens (color, tipo, espacio, radios, sombras) documentados.

## Fase 4 · Identidad

11. **Un protagonista** [V1 · tip 2]. Un elemento central que cuente la historia de la marca, no solo que se vea llamativo.
12. **Rima visual** [V1 · tip 3]. Repetir un detalle chico (forma, trazo, degradado) en todo el sitio para dar cohesión.
13. **Profundidad sutil** [V1 · tip 4]. Textura, ruido o vidrio en superficies, sin competir con el protagonista.

## Fase 5 · Explorar antes de decidir

14. **Variantes radicalmente distintas** [V1 · tip 6]. Para cada sección clave, al menos 2–3 propuestas diferentes antes de elegir. En el portafolio se hace con páginas `preview-*` [P].

## Fase 6 · Construir

15. **Rendimiento desde el inicio** [P]. Fuentes locales en WOFF2, CSS crítico en línea, imágenes optimizadas, animaciones pausables y más ligeras en móvil. Meta: Lighthouse ≥ 90 en móvil.
16. **Accesibilidad** [P]. Foco visible, `prefers-reduced-motion`, textos alternativos, navegación con teclado, "Saltar al contenido".
17. **SEO básico** [P]. Título y descripción por página, imagen OG, sitemap, `noindex` en páginas internas.

## Fase 7 · Lanzar y mejorar

18. **Medir la acción principal** [P]. Revisar qué se hace clic y dónde se abandona.
19. **Seguir aprendiendo y subir de nivel** [V2 · 06:30]. Revisar el sitio contra esta guía cada trimestre.

---

## Proceso de identidad con un cliente (paso a paso) [P]

Las fases 3–5 dicen *qué* tiene que tener un sitio con identidad. Esta sección dice *cómo* llegar ahí con un negocio local en ~6 h de las ~30 del Paquete Presencia. La regla de fondo: **la identidad se descubre en el negocio, no se inventa en el escritorio.** Si quitas el logo y el sitio podría ser de cualquier veterinaria, falta identidad.

### Paso 1 · Recolectar materia prima (1 h, además de la entrevista)

| Qué juntar | De dónde | Para qué sirve |
|---|---|---|
| 3 palabras con las que el dueño describe su negocio | Entrevista: "¿Cómo le explicaría a un vecino qué los hace distintos?" | Tono de textos y carácter visual |
| Palabras que se repiten en sus reseñas | Google Maps (ordenar por más recientes) | Lo que los clientes ya valoran: es el mensaje principal |
| Colores, materiales y señalética que ya existen | Fachada, logo, uniformes, mostrador (toma fotos) | La paleta sale de aquí, no de cero |
| Algo único y real | Mascota del lugar, historia, años en la colonia, el equipo | Candidato a **protagonista** |
| 2 competidores cercanos | Maps, mismo giro y zona | Saber qué evitar para no parecerse |

**Fotos mínimas** (las tomas tú con el celular en la visita, con permiso): fachada, interior o mostrador, el equipo trabajando, un detalle del oficio (instrumental, herramienta, un paciente) y un plano cercano de algo propio del lugar. Luz natural, horizontal y vertical.

**Si el negocio casi no tiene identidad** (sin logo, colores al azar, fotos malas):

| Lo que hay | Qué haces |
|---|---|
| Logo y colores que la gente ya reconoce | **Conservar**: se respetan y se ordenan (un acento, neutros). |
| Logo débil pero con algo rescatable (un color, una forma) | **Simplificar**: te quedas con eso y lo vuelves el acento o la rima visual. |
| Nada usable | **Sustituir** con lo mínimo: nombre bien compuesto en la fuente ancla + un acento sacado de la fachada. No es un rediseño de marca: eso se cotiza aparte. |
| Sin fotos útiles | La variante tipográfica o gráfica pasa a ser la principal; las fotos de la visita van solo donde prueban algo (el lugar, el equipo). |

### Quién hace qué

El trabajo se divide en dos frentes que corren en paralelo y se juntan en el paso 4.

| | **Claude: investigación** | **Michelle: inspiración** |
|---|---|---|
| **Qué** | Datos del negocio y su mercado: reseñas, competidores, servicios y precios públicos del giro, preguntas frecuentes, búsqueda de fotos con licencia libre, textos base. | Dirección visual: moodboard, tipografías, colores, gráficos, texturas (p. ej. fondo granulado), con base en los videos [V1]/[V2] y en lo hecho en el portafolio. |
| **Entrega** | `investigacion.md` en la carpeta del proyecto, con hechos y supuestos separados y fuentes. | Carpeta `moodboard/` con las referencias y una nota corta de qué se toma de cada una. |
| **Pasos** | 1 (materia prima) y textos | 3 (referencias) y propuesta de decisiones del 4 |

**Punto de encuentro (paso 4):** se revisan juntas la investigación y el moodboard, se fija el concepto (paso 2) y se cierran las decisiones de identidad. Con eso se generan las variantes (paso 5).

Cada proyecto vive en `docs/proyectos/<negocio>/` (la demo: `docs/proyectos/demo-veterinaria/`).

### Paso 2 · Concepto en una frase (30 min)

Una frase que une quiénes son y cómo se sienten. Ejemplo: *"La veterinaria de la colonia que te saluda por el nombre de tu perro."* Todas las decisiones visuales siguientes se comparan contra esta frase.

### Paso 3 · Moodboard con objetivo (45 min)

Se busca **por pieza**, no "cosas bonitas": cada imagen responde a una de las preguntas de la sección [Etapa creativa](#etapa-creativa-qué-buscar-y-para-qué). Al final quedan **4 referencias principales** (2 del giro y 2 de fuera) y, por cada una, **una sola cosa** que se toma ("la forma de los botones", "la foto a sangre"). Se guarda en la carpeta `moodboard/` del proyecto con el mismo formato que `design-system/references/`.

### Paso 4 · Stylescape: las decisiones a la vista (1.5 h)

El moodboard junta; el **stylescape** decide [V5 · 01:40]. Es un solo tablero compuesto con las piezas ya elegidas, como se verían juntas (ver plantilla en Etapa creativa). Responde una línea por decisión, sacada de los pasos 1–3:

| Decisión | Pregunta que la define |
|---|---|
| **Fuente ancla + apoyo** | ¿Qué voz tiene la frase del paso 2? (cálida, técnica, de barrio, elegante) |
| **Paleta** | Neutros + **un** acento que venga del negocio (fachada, logo). AA siempre. |
| **Protagonista** | ¿Qué elemento real cuenta su historia? (foto del equipo con pacientes, la mascota del lugar, una ilustración de su esquina). |
| **Rima visual / gesto propio** | ¿Qué detalle se repite **y cambia cómo se compone el sitio**? No solo un adorno: si el gesto es "esquina recortada", lo llevan las fotos, las tarjetas, los botones y el corte entre secciones. Es lo que más evita que se vea como plantilla. |
| **Profundidad sutil** | ¿Textura, grano o nada? Nunca compite con el protagonista. |
| **Voz de los textos** | ¿Tú o usted? ¿Qué palabras del dueño y las reseñas se usan textualmente? |

### Paso 5 · Tres variantes radicales del inicio (1.5 h)

Solo la primera pantalla, en celular, como **bocetos rápidos** (baja fidelidad: textos reales, formas y colores, sin pulir). Se pule solo la que el cliente elige. Tres direcciones distintas:
- **A · Fotográfica:** el protagonista es una foto real a pantalla completa.
- **B · Tipográfica:** la frase del paso 2 en grande, con la fuente ancla como protagonista.
- **C · Gráfica:** ilustración, forma o patrón que sale de la rima visual.

### Paso 6 · Aprobación de dirección (30 min, con el cliente)

Le muestras **dos** de las tres (la que menos funcione no se enseña) en su celular. Elige una, pule esa (30 min de ajustes incluidos en estas 6 h) y desde ahí se extiende al resto del sitio con tokens. Este paso va **antes** de diseñar las demás secciones: cambiar de dirección después cuesta el proyecto entero.

**Tiempo total:** 1 + 0.5 + 0.75 + 1.5 + 1.5 + 0.5 + 0.5 de ajuste ≈ **6 h**.

### Prueba final de identidad

- [ ] Sin el logo, ¿se reconoce de qué negocio es?
- [ ] ¿El protagonista sale de algo real del negocio?
- [ ] ¿Se distingue de los 2 competidores del paso 1?
- [ ] ¿Las palabras del sitio son las del dueño y las de sus reseñas?
- [ ] Un acento, AA, tres niveles de texto, una fuente ancla.

### Etapa creativa: qué buscar y para qué

La parte de Michelle (pasos 3 y 4). Se busca con un objetivo por pieza, sabiendo cómo se resolvió en el portafolio.

**Antes de buscar (10 min):** lee `investigacion.md` y escribe un borrador de la frase-concepto (paso 2). Sin frase, el moodboard termina siendo gusto personal.

**Orden de trabajo** [V5]: moodboard (juntar) → stylescape (decidir) → revisión juntas → variantes del inicio → construir el inicio → revisiones → resto de las secciones.

| Pieza | Pregunta que responde | Qué buscar | Cómo lo resolvió el portafolio | Fuente |
|---|---|---|---|---|
| **Mundo de marca** | ¿Qué escena real vive el cliente del negocio? | Lugares físicos, señalética, empaques, uniformes; la marca como lugar al que se va, no solo como producto | Guiño dev "desde aquí" en el wordmark `./mich` | [V4] |
| **Fuente ancla + apoyo** | ¿Qué voz tiene la frase-concepto? | Un titular de display con carácter + una sans muy legible en 16 px de celular | ClashDisplay en todos los titulares + Inter Tight; Rock Salt solo para etiquetas | [V1 · tip 1], [V3 · concepto 10] |
| **Color** | ¿Cuál es el único acento y de dónde sale? | Paletas reales (fachadas, productos, el barrio), no paletas genéricas | Azul solo en lo accionable e identidad; todo lo demás grises `--ink`/`--muted`/`--subtle`, AA | [V2 · 02:02], [V3 · concepto 18] |
| **Protagonista** | ¿Qué elemento central cuenta la historia en la primera pantalla? | Inicios donde el elemento principal *explica* algo del negocio | Rostro de partículas del Hero | [V1 · tip 2], [V3 · conceptos 5–6] |
| **Gesto propio / rima** | ¿Qué detalle se repite y cambia la composición? | Una forma, trazo, corte o encuadre que aparezca en fotos, tarjetas, botones y separadores | Trazo a mano antes de cada etiqueta, eco del listón del footer | [V1 · tip 3] |
| **Fotografía** | ¿Cómo se ven las fotos (encuadre, luz, color)? | Un tratamiento que funcione con fotos de celular (recorte, tono, duotono) | Retrato y portadas con propósito, todas con alt | [V2 · 04:30], [V4] |
| **Gráficos e íconos** | ¿Qué estilo de dibujo explica sin decorar? | Grosor de línea, relleno, ilustración o ninguno | `biblioteca-graficos.md`, órbitas, globo | [V2 · 04:30] |
| **Textura / profundidad** | ¿Grano, degradado, vidrio o nada? | Superficies que den calidez sin competir con el protagonista | `.grain` en footer, tarjeta de Servicios y CV; `fondo-grano-degradado.md` | [V1 · tip 4] |
| **Piezas de interfaz** | ¿Cómo se ven el botón principal, una reseña y un bloque de horario? | Un botón primario claro, prueba social creíble, información útil a la vista | Un primario por vista, texto de acción, 48 px | [V3 · conceptos 7 y 19], [V2 · 01:33] |

**Qué no buscar:** lo que cualquier sitio del giro ya usa. En veterinarias: la huella como logo, el azul o verde de hospital, la foto de stock del perrito con estetoscopio. Solo se usan si se reinventan con el gesto propio.

**En la práctica:** cada proyecto tiene 16 carpetas en `moodboard/`, una por categoría, con meta de 3 opciones cada una. `docs/proyectos/tablero.py` crea las carpetas y abre un tablero local (http://localhost:8765) donde se arrastran o pegan las imágenes, se anotan y se ve el avance. La tabla de arriba explica el porqué de cada pieza; el tablero es la lista de trabajo.

**Límite para no perderse:** máximo 10 minutos y 3 imágenes por pieza. En cuanto una imagen responde con claridad la pregunta de su fila, se pasa a la siguiente. Las piezas que el negocio ya resuelve (p. ej. un logo y colores que se conservan) se saltan.

**Dónde buscar** (son opciones, no una lista que recorrer): web (Awwwards, Godly, Land-book, Savee), tipografía (Fonts in Use, Fontshare, Google Fonts), color y mundo de marca (Pinterest, empaques, y caminar la colonia con el celular).

**Plantilla del stylescape** (un solo tablero en baja fidelidad, en Figma o una página `preview-*`; se pule solo la dirección que se elija):
1. La frase-concepto.
2. Boceto del inicio en celular con el protagonista.
3. Voz: un titular, el texto del botón principal y una frase de reseña, con las palabras de la investigación.
4. Escala de texto: titular, subtítulo, párrafo, etiqueta.
5. Paleta con roles: fondo, texto, texto secundario, acento.
6. Botón principal y una tarjeta (reseña o servicio) con el gesto propio aplicado.
7. Una foto con su tratamiento y, si aplica, la textura.
8. *(Opcional)* 2–3 íconos o gráficos, solo si el sitio los va a usar.

**Revisión juntas (punto de encuentro):** el stylescape se compara contra la investigación (¿usa las palabras de las reseñas?, ¿se distingue de los competidores?) y la prueba final de identidad. Con eso se generan las 3 variantes del paso 5.

### La demo es el primer ensayo

La demo de veterinaria se hace **siguiendo este proceso completo** con un negocio ficticio, midiendo cuánto tarda cada paso. Si algún paso se pasa del tiempo, se ajusta aquí antes del primer cliente real.

---

## Estado en el portafolio (2026-10-20)

| # | Punto | Estado | Cómo se aplicó |
|---|---|---|---|
| 1–2 | Audiencia y acción principal | ✅ | Audiencia: quien quiere contratar el servicio. Acción principal: «Cuéntame tu idea» (Hero → contacto). «Ver proyectos» es secundario; el CV queda como enlace discreto. |
| 4 | Jerarquía visual | ✅ | Etiqueta Rock Salt → titular ClashDisplay → texto Inter Tight en cada sección. |
| 6 | Botones | ✅ | Un primario por vista, texto de acción, 48px de alto. |
| 7 | Color con reglas | ✅ | El acento azul solo en lo accionable y en marcas de identidad; subtítulos y numeración pasan a neutros. |
| 8 | Fuente ancla | ✅ | ClashDisplay en todos los titulares; Inter Tight para texto y UI; Rock Salt única manuscrita (Damion y Permanent Marker eliminadas). |
| 9 | Imágenes con propósito | ✅ | Retrato (confianza) y portadas de proyecto (prueba), todas con texto alternativo. |
| 10 | Niveles de texto | ✅ | `--ink`, `--muted`, `--subtle`, todos AA. |
| 11 | Protagonista | ✅ | Rostro de partículas del Hero. |
| 12 | Rima visual | ✅ | Trazo a mano en acento antes de cada etiqueta (eco del listón del footer). |
| 13 | Profundidad sutil | ✅ | `.grain` en footer, tarjeta de Servicios y hoja del CV. |
| 14 | Variantes | ✅ | Páginas `preview-*`. |
| 15–17 | Rendimiento, accesibilidad, SEO | ✅ | Ver `docs/performance-2026-10-14.md`; sitemap con `/cv/`; `noindex` en previews. |
| 18 | Medir la acción principal | 🟡 | Umami Cloud instalado (evento `cuentame-tu-idea` con `ubicacion` hero/contacto). Se activa al configurar `PUBLIC_UMAMI_WEBSITE_ID` en Vercel. |

---

## Checklist rápida

- [ ] Brief: audiencia, acción principal, mensaje, métrica
- [ ] Cada sección responde una duda y empuja a la acción
- [ ] Un botón primario por vista, con texto de acción
- [ ] Un acento, contraste AA, tres niveles de texto
- [ ] Una fuente ancla + una de apoyo (sin fuentes que compitan)
- [ ] Cada imagen tiene propósito
- [ ] Protagonista, rima visual y profundidad sutil definidos
- [ ] 2–3 variantes exploradas por sección clave
- [ ] Lighthouse móvil ≥ 90, accesibilidad y SEO básicos
- [ ] Medición de la acción principal activa
