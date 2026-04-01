import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const unitSchema = z.object({
  id: z.string(),
  typology: z.string(),
  area: z.string(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  floor: z.string(),
  orientation: z.string().optional(),
  description: z.string().optional(),
  features: z.array(z.string()).optional(),
  floorPlan: z.string().optional(),
  photos: z.array(z.string()).optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    type: z.string(),
    totalUnits: z.number(),
    area: z.string(),
    status: z.enum(['completed', 'under_construction', 'coming_soon']),
    year: z.string(),
    description: z.string(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    units: z.array(unitSchema).optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    features: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

const serviceItemSchema = z.object({
  key: z.string(),
  title: z.string(),
  description: z.string(),
});

const ctaButtonSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    // Hero
    hero: z.object({
      label: z.string(),
      title: z.string(),
      description: z.string(),
      image: z.string(),
      cta: ctaButtonSchema,
      secondaryCta: ctaButtonSchema,
    }),

    // About teaser (body supports markdown)
    about: z.object({
      label: z.string(),
      heading: z.string(),
      body: z.string(),
      cta: ctaButtonSchema,
      images: z.array(z.string()),
    }),

    // Featured projects
    projects: z.object({
      label: z.string(),
      heading: z.string(),
      viewAllLabel: z.string(),
    }),

    // Services overview
    services: z.object({
      label: z.string(),
      heading: z.string(),
      description: z.string(),
      items: z.array(serviceItemSchema),
    }),

    // CTA
    cta: z.object({
      label: z.string(),
      heading: z.string(),
      description: z.string(),
      image: z.string(),
      primaryCta: ctaButtonSchema,
      secondaryCta: ctaButtonSchema,
    }),
  }),
});

export const collections = { projects, services, pages };
