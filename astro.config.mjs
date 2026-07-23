// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hunny-bunny-website.pages.dev',
  integrations: [sitemap()]
});
