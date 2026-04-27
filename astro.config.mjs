import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://dottacunha.pt',
  trailingSlash: 'always',
  adapter: netlify({
    middlewareMode: 'edge',
  }),
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true
    }
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/admin') && page !== 'https://dottacunha.pt/',
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        pt: 'pt-PT',
      },
    },
  })],
});
