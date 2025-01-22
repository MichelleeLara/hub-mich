import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: {
    'example': {
      title: 'Página de Ejemplo',
      description: 'Descripción de esta página mostrada en texto más pequeño',
    },
  },
  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
    logo: {
      path: './src/astro-docs-logo.png',
    },
    // Puedes agregar más opciones aquí según tus necesidades
  }),
});
