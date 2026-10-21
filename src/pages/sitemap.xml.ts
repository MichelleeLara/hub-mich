import type { APIRoute } from 'astro';
import { projects } from '../data/projectsData.js';
export const GET: APIRoute = () => {
  const routes = ['/', '/cv/', ...projects.map(p => `/proyectos/${p.slug}/`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(path => `<url><loc>https://itsmich.com.mx${path}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
