# Rendimiento de la página principal — 14 octubre 2026

Comparación con `origin/main` (`716ad9c`). Lighthouse 12.8.2, Chrome headless, build estático servido en localhost con gzip y caché de recursos. Auditorías secuenciales en la misma Mac: perfil móvil con red y CPU simuladas, y preset desktop. Se excluye una primera corrida sin compresión para mantener condiciones comparables.

| Métrica | Móvil antes | Móvil después | Desktop antes | Desktop después |
| --- | ---: | ---: | ---: | ---: |
| Performance | 86 | 93 | 100 | 100 |
| FCP | 2.86 s | 1.99 s | 0.63 s | 0.45 s |
| LCP | 3.53 s | 2.94 s | 0.71 s | 0.63 s |
| TBT | 0 ms | 0 ms | 0 ms | 0 ms |
| Elementos DOM | 2912 | 1378 | 2912 | 1378 |

CLS permanece por debajo de 0.001 en ambos perfiles. Los tiempos fluctúan entre corridas; estas mediciones son sintéticas locales, no datos de campo ni garantía de FPS o INP en un teléfono físico.

## Cambios

- CSS incorporado en HTML y preload de Inter Latin para reducir la cadena de recursos que bloquea el primer render.
- Fuentes manuscritas WOFF2 con los mismos glifos: 120344 bytes en TTF pasan a 55848 bytes. Se conservan los originales y sus licencias.
- Navegación móvil hidratada únicamente cuando corresponde; scroll y cursor agrupados por cuadro.
- Geometría de partículas precalculada, objetos reutilizados y colores cacheados. Canvas sin trabajo continuo en móvil al quedar en reposo; menor DPR y presupuesto en dispositivos de capacidad baja. El renderer se detiene al abrir proyectos.
- Gráfico estático conservado como SVG externo con cuatro paths, en lugar de más de 1500 círculos dentro del DOM principal.
- Transiciones de proyectos móviles por opacity/transform y sin blur de pantalla completa. Se conserva la transición de escritorio.
- Observador de pausa limitado a cambios reales para evitar una repetición de mutaciones al pausar o abrir un proyecto.

## Validación

`npm run build` y `git diff --check` correctos. Comprobación manual en Chrome de pausa/reanudación repetida, fallback SVG visible, navegación y apertura/cierre de proyectos en escritorio y viewport emulado de 390 px. Consola sin mensajes durante esta comprobación. Estado de depuración del canvas móvil en reposo: `running: false`. No se probó hardware móvil físico.

Informes Lighthouse completos de esta sesión: `/tmp/hub-mich-performance/before-{mobile,desktop}-gzip.json` y `/tmp/hub-mich-performance/verified-{mobile,desktop}.json` (temporales, no versionados).
