
import { client, urlFor } from '../lib/sanity'
import Image from 'next/image';



export default function Home({ bannerData }) {
  return (
    <>
    <ul>
    </ul>
    
    </>
  )
};

export async function getStaticProps() {
  const bannerQuery = `*[fieldAssignment == "banner1"] | order(_createdAt desc)[0]`;
  const bannerData = await client.fetch(bannerQuery);
  console.log(bannerData[0])
  return {
    props: {
      bannerData
    }
  };
}
