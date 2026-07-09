# itsmich — portafolio personal

> **Productos que resuelven, detalles que se notan.**

Sitio personal de Michelle Rodriguez Lara (Mich), Frontend Engineer. Diseño y construyo productos digitales que resuelven problemas de negocio y se sienten simples de usar.

**En vivo:** [itsmich.com.mx](https://itsmich.com.mx) *(mientras se conecta el dominio: [hub-mich.vercel.app](https://hub-mich.vercel.app))*

## Stack

Astro 5 · React 18 · Tailwind CSS · Framer Motion · TypeScript. Deploy en Vercel.

Elegí Astro por rendimiento (islas: solo hidrata lo interactivo) y React para las secciones con animación y estado. Las animaciones usan Framer Motion con un patrón propio de entrada (blur-in + spring).

## Desarrollo

```sh
npm install
npm run dev      # localhost:4321
npm run build    # build de producción en ./dist/
```

## Estructura

```
src/
├── pages/        # index + rutas
├── layouts/      # Layout base (SEO/OG)
├── components/   # secciones de la página
├── sections/     # bloques mayores (footer, tech)
├── icons/        # iconos como componentes
└── data/         # contenido estructurado
```

## Contacto

[LinkedIn](https://www.linkedin.com/in/michelle-rodriguez-lara/) · [GitHub](https://github.com/MichelleeLara)
