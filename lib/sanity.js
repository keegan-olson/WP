
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'



export const client = createClient({
  projectId: "pm9q8702",
  dataset: "production",
  useCdn: true,
  apiVersion: '2023-03-04',
  token: process.env.NEXT_PUBLIC_SANITY_KEY,
});

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
  }