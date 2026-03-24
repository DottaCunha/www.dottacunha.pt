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

export const collections = { projects, services };
