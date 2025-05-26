import { z, defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'

const slides = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/slides" }),
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    audio: z.string().optional(),
    description: z.string().optional(),
    order: z.number(),
  }),
})

const pages = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    audio: z.string().optional(),
    description: z.string().optional(),
  }),
})

const meta = defineCollection({
  loader: file("src/content/meta/settings.json"),
})

export const collections = { slides, pages, meta }
