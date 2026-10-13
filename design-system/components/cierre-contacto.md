# CTA y footer integrados

Michelle pidió mejorar su unión el 12 de octubre de 2026. `SiteClosing.astro` compone el CTA con listón y el footer compacto sobre un mismo tema invertido, en `/preview-completo`.

- Un solo contenedor `#contacto`, con navegación por ancla.
- CTA con fondo que pasa de `--accent-soft` a `--bg`; el footer continúa sobre `--bg`.
- Listón con desvanecido inferior, sin corte visual al llegar a los enlaces.
- Espacio inferior de CTA de 64 px en escritorio y 40 px en móvil; footer sin relleno superior adicional y con divisor fino.
- Enlaces y firma alineados al contenedor del repo.
- `RibbonCTA seamless` y `MegaFooter compact seamless` heredan el tema del contenedor. Los consumidores anteriores conservan las variantes predeterminadas.

La acción de correo y los enlaces de navegación/redes se mantienen. Movimiento de la flecha condicionado a hover disponible, movimiento reducido y pausa. El footer conserva su landmark de contenido al estar fuera de `main`.
