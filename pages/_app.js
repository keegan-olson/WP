import "@/styles/globals.css";
import Layout from "@/components/layout";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Script
        src='https://kit.fontawesome.com/941691bc8d.js'
        crossorigin='anonymous'
      />
      <Component {...pageProps} />
    </Layout>
  );
}
