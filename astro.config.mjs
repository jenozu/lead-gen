import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
  ],
  adapter: vercel(),
  output: 'hybrid',   // static pages + server API routes
  site: 'https://ontariolineboring.ca',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
