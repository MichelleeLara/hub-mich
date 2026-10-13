# Tag

Etiqueta redonda para categorías y tecnologías, en dos clases según el fondo.

- **`.tag`**: sobre fondos del tema. Borde `line`, texto `muted`, padding 6×14. Trayectoria y stack del caso de estudio.
- **`.tag-photo`**: sobre una foto (tarjeta de proyecto). Fondo `#f3f1ed`, texto `#343434`, padding 8×12. Es una constante del componente porque la foto no cambia con el tema.

Ambas: `radius-full`, texto `micro` 500 con `0.025em`, separadas por `space-2`. No son interactivas; si un tag lleva a algún lado, es un enlace y necesita 44px de alto.
