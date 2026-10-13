# Retrato y proceso por scroll

Implementación solicitada el 8 de octubre de 2026. Builds Astro5/Astro7 y revisión estática aprobadas; validación visual local pendiente por rechazo del control del navegador.

| Severidad | Ubicación | Antes | Después | Por qué |
| --- | --- | --- | --- | --- |
| MEDIUM corregida en código | src/components/ParticlesBackground.astro:238 | Silueta ovalada delimitada y arrastre elástico por scroll | Borde irregular difuso, periferia suelta y compensación directa de posición | Forma libre y movimiento más estable |
| MEDIUM corregida en código | src/components/AboutStats.astro:39 | Foto fallback ovalada | Difuminado de bordes sin círculo | Consistencia con el retrato flotante |
| MEDIUM corregida en código | src/components/SkillsStack.astro:15 | Animación solo al pulsar botones | Relato con visual fija y morph continuo reversible por scroll | La transformación acompaña la explicación |

Approve únicamente para la revisión estática y compilación inspeccionadas. Not verified: aspecto final, interacción en navegador local, vista móvil, movimiento reducido durante sesión, replay al 10%. Evidencia y pendientes detallados en ESTADO.md; no reutilizar scores o capturas previas como validación de esta iteración.
