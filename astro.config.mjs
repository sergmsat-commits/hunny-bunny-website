// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hunnybunny.by',
  integrations: [
    sitemap({
      // служебные страницы не нужны в поиске
      filter: (page) => !page.includes('/thank-you/'),
    }),
  ],
});
