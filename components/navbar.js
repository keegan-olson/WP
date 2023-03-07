import React, { useState } from "react";
import Image from "next/image";
import logoWhite from "../public/WP-Logo-White.png";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Portfolio", href: "/portfolio", current: false },
  { name: "Connect", href: "/connect", current: false },
  { name: "Shop", href: "/store", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()
  console.log(router.pathname)
  
  return (
    
    <nav className='bg-black px-2 sm:px-4 py-2.5 w-full fixed z-50'>
    { /* ----- Mobile Menu ----- */}
      <div className='container flex flex-wrap items-center justify-between mx-auto md:hidden visible'>
        <div className='container h-16 w-16 m-3 '>
          <Image
            src={logoWhite}
            alt='Wicked Prints Logo'
            className='object-contain'
          />
        </div>
        <h1 className='text-white font-permanent-marker text-2xl tracking-wide'>
          Wicked Prints
        </h1>
        <i
          className={
            menuOpen
              ? "fa-regular fa-xmark text-white fa-2xl m-3"
              : "fa-regular fa-square-ellipsis text-white fa-2xl m-3"
          }
          onClick={() => {
            setMenuOpen(menuOpen ? false : true);
            console.log(menuOpen);
          }}
        ></i>
              <div className={menuOpen ? 'visible bg-black w-full': 'hidden'}>
        <ul className="text-white text-center m-1 mb-3 font-karla text-lg tracking-wider font-medium text-transform: uppercase flex flex-col justify-center">
            {navigation.map((link) => (<a href={link.href} className="m-1" key={link.name}>{link.name}</a>))}
        </ul>
      </div>
      </div>
      {/* ---- Standard Menu ---- */}
      <div className='container mx-auto md:flex hidden justify-between items-center'>
        <div className='container flex flex-row items-center gap-16'>
          <div className='container h-16 w-16 m-3 '>
            <Image
              src={logoWhite}
              alt='Wicked Prints Logo'
              className='object-contain'
            />
          </div>
          <h1 className='text-white font-permanent-marker text-3xl tracking-wide'>
            Wicked Prints
          </h1>
        </div>
        <ul className='text-white text-center m-1 font-karla text-lg tracking-wider font-medium text-transform: uppercase flex flex-row gap-3'>
          {navigation.map((link) => {

            return (<a
              href={link.href}
              className={router.pathname == link.href ? 'm-1 p-2 text-burnt-pink last:rounded-lg last:px-4 last:bg-white last:text-burnt-pink' : 'm-1 p-2 hover:text-burnt-pink last:bg-burnt-pink last:rounded-lg last:px-4 last:hover:bg-white last:hover:text-burnt-pink'}
              key={link.name}
            >
              {link.name}
            </a>)
          })}
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
