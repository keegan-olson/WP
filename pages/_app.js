import "@/styles/globals.css";
import Layout from "@/components/layout";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wicked Prints</title>
        <link rel='shortcut icon' href='/images/favicon.png' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon-16x16.png'
        />
      </Head>
      <Layout>
        <Script
          src='https://kit.fontawesome.com/941691bc8d.js'
          crossorigin='anonymous'
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
