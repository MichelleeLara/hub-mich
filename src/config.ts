// Configuración global del sitio.
//
// PARTICLES_ENABLED: interruptor principal del fondo de partículas.
//   true  → se monta el canvas animado (con sus optimizaciones por dispositivo).
//   false → no se ejecuta nada del canvas; "Sobre mí" muestra la foto fallback.
// La foto de "Sobre mí" siempre está en el markup: el canvas solo la oculta
// cuando su retrato de partículas está listo (clase `particles-live`).
export const PARTICLES_ENABLED = true;
