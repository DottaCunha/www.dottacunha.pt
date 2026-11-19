import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://dottacunha.pt",
  trailingSlash: "always",
  // The Carrascal 168 pages moved: the project from its old address, and
  // the unit pages from numeric ids to letters.
  redirects: {
    "/pt/projects/calcada-do-carrascal/": "/pt/projects/carrascal-168/",
    "/pt/projects/calcada-do-carrascal/1/":
      "/pt/projects/carrascal-168/a/",
    "/pt/projects/calcada-do-carrascal/2/":
      "/pt/projects/carrascal-168/b/",
    "/pt/projects/calcada-do-carrascal/3/":
      "/pt/projects/carrascal-168/c/",
    "/en/projects/calcada-do-carrascal/": "/en/projects/carrascal-168/",
    "/en/projects/calcada-do-carrascal/1/":
      "/en/projects/carrascal-168/a/",
    "/en/projects/calcada-do-carrascal/2/":
      "/en/projects/carrascal-168/b/",
    "/en/projects/calcada-do-carrascal/3/":
      "/en/projects/carrascal-168/c/",
  },
  adapter: netlify({
    imageCDN: true,
    middlewareMode: "edge",
  }),
  image: {
    domains: ["dottacunha.pt"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/admin") && page !== "https://dottacunha.pt/",
      i18n: {
        defaultLocale: "pt",
        locales: {
          en: "en-US",
          pt: "pt-PT",
        },
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [300, 400, 500, 600],
    },
    {
      provider: fontProviders.google(),
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
      weights: [400, 500, 600, 700],
    },
  ],
});
