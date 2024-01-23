import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
   schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.string(),
      updatedDate: z.string(),
      image: z.string(),
   }),
});

export const collections = { blog };
