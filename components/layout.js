import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import { useRouter } from "next/router";


function Layout({ children }) {
  const router = useRouter()
  console.log(router.pathname)
  return (
    <>
      <Head>
        <title>Wicked Prints</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Permanent+Marker&family=Righteous&display=swap" rel="stylesheet"/>
      </Head>

        <Navbar />
        <div className="h-[109px]"></div>
      <div className="flex flex-1 flex-col">
      {children}
      </div>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
