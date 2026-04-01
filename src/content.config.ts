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

const valueItemSchema = z.object({
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
    // Hero (shared across pages)
    hero: z.object({
      label: z.string(),
      title: z.string(),
      description: z.string().optional(),
      image: z.string(),
      cta: ctaButtonSchema.optional(),
      secondaryCta: ctaButtonSchema.optional(),
    }).optional(),

    // About teaser — homepage
    about: z.object({
      label: z.string(),
      heading: z.string(),
      body: z.string(),
      cta: ctaButtonSchema,
      images: z.array(z.string()),
    }).optional(),

    // Story — about page
    story: z.object({
      label: z.string(),
      heading: z.string(),
      body: z.string(),
    }).optional(),

    // Image gallery
    images: z.array(z.string()).optional(),

    // Values — about page
    values: z.object({
      label: z.string(),
      heading: z.string(),
      items: z.array(valueItemSchema),
    }).optional(),

    // Featured projects — homepage
    projects: z.object({
      label: z.string(),
      heading: z.string(),
      viewAllLabel: z.string(),
    }).optional(),

    // Services overview — homepage
    services: z.object({
      label: z.string(),
      heading: z.string(),
      description: z.string(),
      items: z.array(serviceItemSchema),
    }).optional(),

    // CTA
    cta: z.object({
      label: z.string().optional(),
      heading: z.string(),
      description: z.string(),
      image: z.string().optional(),
      primaryCta: ctaButtonSchema,
      secondaryCta: ctaButtonSchema.optional(),
    }).optional(),
  }),
});

export const collections = { projects, services, pages };
