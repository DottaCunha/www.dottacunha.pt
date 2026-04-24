import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://dottacunha.pt',
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
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en-US',
        pt: 'pt-PT',
      },
    },
  })],
});
