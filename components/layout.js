import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Wicked Prints</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Righteous&display=swap'
          rel='stylesheet'
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
