import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://dottacunha.pt',
  trailingSlash: 'always',
  adapter: netlify({
    imageCDN: true,
    middlewareMode: 'edge',
  }),
  image: {
    domains: ['dottacunha.pt'],
  },
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
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [300, 400, 500, 600],
    },
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--font-space-grotesk',
      weights: [400, 500, 600, 700],
    },
  ],
});
