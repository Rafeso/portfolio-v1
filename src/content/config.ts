import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    description: z.string().max(160, "For a better SEO results, please keep the description under 160 characters."),
    draft: z.boolean().default(false),
    category: z.enum(["React", "NextJs", "NodeJs", "TypeScript", "Go"]),
  })
})

export const collection = { post: postsCollection }