import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const labsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/labs' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    lenguaje: z.enum(['cpp', 'python', 'rust', 'javascript']),
    dificultad: z.number().min(1).max(5),
    etiquetas: z.array(z.string()),
    fecha: z.date(),
    godboltId: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    fecha: z.date(),
    etiquetas: z.array(z.string()),
  }),
});

export const collections = {
  labs: labsCollection,
  blog: blogCollection,
};
