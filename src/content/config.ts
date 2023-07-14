import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		image: z
			.object({
				src: z.string(),
				alt: z.string(),
			}),
		description: z
			.string()
			.max(
				160,
				"For a better SEO results, please keep the description under 160 characters.",
			),
		draft: z.boolean().default(false),
		tag: z.enum(["React", "NextJs", "NodeJs", "Astro"]),
	}),
});

export const collection = { post: postsCollection };
