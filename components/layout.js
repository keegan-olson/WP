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
        <Navbar />
        <div className="h-[109px]"></div>
      <div className="flex flex-col flex-1">
      {children}
      </div>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
