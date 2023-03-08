import Gallery from "@/components/gallery";
import { client, urlFor } from "../lib/sanity";
import { groq } from "next-sanity";

export default function Portfolio({ artworks }) {
  return (
    <>
  <div className="flex-col flex-1">
      <h1 className='text-white font-permanent-marker text-center text-[4rem] font-bold bg-gray-800'>
        Our Work
      </h1>
      <Gallery artworks={artworks}/>
    </div>
    </>
  );
}

export async function getStaticProps() {
  const artworkQuery = `*[_type == "artwork"]`;

  const artworks = await client.fetch(groq && artworkQuery);
  console.log(artworks)

  return {
    props: {
      artworks,
    },
  };
}