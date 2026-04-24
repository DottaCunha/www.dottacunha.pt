import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

import config from './sveltia.config';
import { allCollectionSchemas } from './sveltia-zod';

const { projects, forms } = allCollectionSchemas(config);

export const collections = {
  pages: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  }),
  pages_new: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/pages_new', generateId: ({ entry }) => entry.replace(".md", ''), }),
  }),
  services: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  }),
  projects: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: projects,
  }),
  forms: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/forms', generateId: ({ entry }) => entry.replace(".md", ''), }),
    // schema: forms,
  })
}
