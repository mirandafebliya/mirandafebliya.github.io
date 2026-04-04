import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const galleries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galleries' }),
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    year: z.string().optional(),
    order: z.number().default(0),
    photos: z.array(z.string()),
    relatedGalleries: z.array(z.string()).default([]),
  }),
});

export const collections = { galleries };
