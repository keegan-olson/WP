
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'



export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATABASE,
  useCdn: true,
  apiVersion: '2023-03-04',
  token: process.env.NEXT_PUBLIC_SANITY_KEY,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
  }