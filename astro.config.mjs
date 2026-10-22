// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// Solo en `npm run dev`: sirve las funciones de Vercel de /api (hoy, /api/contact) con el mismo código
// que producción. Las claves salen de .env (ver .env.example); sin ellas responde "no configurado".
const devApi = {
  name: 'dev-api',
  hooks: {
    'astro:server:setup': ({ server }) => {
      for (const [key, value] of Object.entries(loadEnv('development', process.cwd(), ''))) process.env[key] ??= value;
      server.middlewares.use('/api/contact', async (req, res) => {
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        const raw = Buffer.concat(chunks).toString('utf8');
        let body = raw;
        try { body = raw ? JSON.parse(raw) : {}; } catch {}
        const response = Object.assign(res, {
          status(code) { res.statusCode = code; return response; },
          json(data) { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)); return response; },
        });
        const { default: handler } = await server.ssrLoadModule('/api/contact.js');
        await handler(Object.assign(req, { body }), response);
      });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  // Dominio canónico: base para <link rel="canonical"> y URLs absolutas de OG
  site: 'https://itsmich.com.mx',
  // Static pages paint without waiting for a chain of small CSS requests.
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
  integrations: [tailwind(), react(), devApi]
});
