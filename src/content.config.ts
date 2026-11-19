import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

// The schemas come from sveltia.config. After changing that file, restart the
// dev server: Astro does not notice the change while it is running, and it
// keeps content validated with the old model (`npm run dev` clears that cache).
import config from "./sveltia.config";
import { allCollectionSchemas } from "./sveltia-zod";

const { projects, pages, forms } = allCollectionSchemas(config);

export const collections = {
  pages: defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/content/pages",
      generateId: ({ entry }) => entry.replace(".md", ""),
    }),
    schema: pages,
  }),
  projects: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: projects,
  }),
  forms: defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/content/forms",
      generateId: ({ entry }) => entry.replace(".md", ""),
    }),
    schema: forms,
  }),
};
