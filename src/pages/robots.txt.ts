import type { APIRoute } from 'astro';
export const GET: APIRoute = () => new Response('User-agent: *\nAllow: /\nDisallow: /preview-stack/\nSitemap: https://itsmich.com.mx/sitemap.xml\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
