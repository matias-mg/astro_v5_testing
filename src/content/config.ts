import { defineCollection, z } from 'astro:content'

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string().url(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      usa: z.string(),
      chile: z.string(),
    }),
  })
})

export const collections = { books }
