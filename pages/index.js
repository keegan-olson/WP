
import { client, urlFor } from '../lib/sanity'
import Head from 'next/head'



export default function Home({ firstImage }) {
  return (
    <>
    <h1 className=''>Home</h1>
    </>
  )
};

// export async function getStaticProps() {
//   const query = `*[_type == "product"]`;
//   const products = await client.fetch(query);

//   const bannerQuery = `*[_type == "banner"]`;
//   const bannerData = await client.fetch(bannerQuery);
//   const firstImage = await bannerData[0]
//   console.log(firstImage);
//   console.log(urlFor(firstImage.image).url());
//   return {
//     props: {
//       products, 
//       firstImage
//     }
//   };
// }
