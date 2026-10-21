# Cómo empezar un sitio web — guía de trabajo

> **Borrador.** No es la versión final: se cierra cuando esté lista la primera versión del portafolio y tengamos una visión más clara del servicio.

Base del servicio de diseño y desarrollo web. Se aplica primero al portafolio (itsmich.com.mx) y después a cada cliente.

**Fuentes**
- [V1] Self-Made Web Designer, *6 EASY Tips to 10x Any Site's Design* — youtube.com/watch?v=pbhLsV-Dyho
- [V2] Self-Made Web Designer, *11 years of web design knowledge in 7 minutes* — youtube.com/watch?v=ityZtG3FMgw
- [P] Lo aprendido construyendo este portafolio (design system, rendimiento, accesibilidad).

YouTube no dejó descargar las transcripciones: los puntos de V1 y V2 salen de los capítulos y del resumen que escribió el autor. El detalle práctico de cada paso es criterio propio, marcado como **[P]**.

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
