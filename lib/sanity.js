
import { createClient } from "next-sanity";

export default createClient({
  projectId: "pm9q8702",
  dataset: "production",
  useCdn: true, 
  token: process.env.NEXT_PUBLIC_SANITY_KEY,
});