// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Dominio canónico: base para <link rel="canonical"> y URLs absolutas de OG
  site: 'https://itsmich.com.mx',
  // Static pages paint without waiting for a chain of small CSS requests.
  build: { inlineStylesheets: 'always' },
  integrations: [tailwind(), react()]
});
