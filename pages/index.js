import { client, urlFor } from "../lib/sanity";
import { groq } from "next-sanity";
import Link from "next/link";

export default function Home({ hero1Url, hero2Url, hero3Url }) {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 md:h-[80vh]  gap-3 mx-2 py-2 bg-black'>
      <Link href='/portfolio'><div
        style={{
          backgroundImage: `url(${`${hero1Url}?blur=50`})`,
          backgroundSize: "cover",
        }}
        className='flex items-center justify-center h-96 md:h-full'
      >
        <div className="h-full w-full bg-black backdrop-blur-sm bg-opacity-50 hover:backdrop-blur-none text-white font-karla flex flex-col text-3xl items-center justify-center">
          <p className="w-full text-center m-3 text-[3rem] font-permanent-marker p-12 leading-normal">Explore Our Designs</p>
        </div>
      </div></Link>
      <Link href='/connect'><div
        style={{
          backgroundImage: `url(${`${hero2Url}?blur=50`})`,
          backgroundSize: "cover",
          
        }}
        className='flex items-center justify-center h-96 md:h-full'
      >
        <div className="h-full w-full bg-black backdrop-blur-sm bg-opacity-50 hover:backdrop-blur-none text-white font-karla flex flex-col text-3xl items-center justify-center">
          <p className="w-full text-center m-3 text-[3rem] font-permanent-marker p-12 leading-normal">Custom Screen Printing</p>
        </div>
      </div></Link>
      <Link href='/store'><div
        style={{
          backgroundImage: `url(${`${hero3Url}?blur=50`})`,
          backgroundSize: "cover",
        }}
        className='flex items-center justify-center h-96 md:h-full'
      >
        <div className="h-full w-full bg-black backdrop-blur-sm bg-opacity-50 hover:backdrop-blur-none text-white font-karla flex flex-col text-3xl items-center justify-center">
          <p className="w-full text-center m-3 text-[3rem] font-permanent-marker p-12 leading-normal">Check Out Our Merch</p>
          {/* <button className="hidden md:block w-3/6 bg-burnt-pink text-white py-2 px-6 rounded-lg m-3  tracking-wider border-2 border-white hover:rotate-12 uppercase italic font-permanent-marker">Test</button> */}
        </div>
      </div></Link>
    </div>
  );
}

export async function getStaticProps() {
  const heroQuery1 = `*[fieldAssignment == "banner1"] | order(createdAt desc)[0]`;
  const heroQuery2 = `*[fieldAssignment == "banner2"] | order(createdAt desc)[0]`;
  const heroQuery3 = `*[fieldAssignment == "banner3"] | order(createdAt desc)[0]`;
  const hero1 = await client.fetch(groq && heroQuery1);
  const hero2 = await client.fetch(groq && heroQuery2);
  const hero3 = await client.fetch(groq && heroQuery3);
  const hero1Url = await urlFor(hero1.image).url();
  const hero2Url = await urlFor(hero2.image).url();
  const hero3Url = await urlFor(hero3.image).url();
  console.log(hero1);
  console.log(urlFor(hero1.image).url());
  return {
    props: {
      hero1Url,
      hero2Url,
      hero3Url,
    },
  };
}
