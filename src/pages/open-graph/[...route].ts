import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';
// Obtén todas las entradas de la colección 'blog'
const blogs = await getCollection('blog');

// Transforma la colección en un objeto
const pages = Object.fromEntries(
  blogs.map(({ id, slug, data }) => [id, { data, slug }])
);

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
      path: './public/OpenGraph.png',
    },
    // Puedes agregar más opciones aquí según tus necesidades
  }),
});
