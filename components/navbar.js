import React, { useState } from "react";
import Image from "next/image";
import logoWhite from "../public/WP-Logo-White.png";

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Portfolio', href: '#', current: false },
    { name: 'Connect', href: '#', current: false },
    { name: 'Shop', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-gray-900 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-600'>
      <div className='container flex flex-wrap items-center justify-between mx-auto md:hidden visible'>
        <div className="container h-16 w-16 m-3 ">
        <Image 
            src={logoWhite}
            alt='Wicked Prints Logo'
            className='object-contain'
        />
        </div>
        <h1 className="text-white font-permanent-marker text-2xl tracking-wide">Wicked Prints</h1>
        <i
          className={menuOpen ? 'fa-regular fa-xmark text-white fa-2xl m-3' : 'fa-regular fa-square-ellipsis text-white fa-2xl m-3'}
          onClick={() => {
            setMenuOpen(menuOpen ? false : true);
            console.log(menuOpen);
          }}
        ></i>
      </div>
      <div className={menuOpen ? 'visible flex flex-row bg-gray-900 w-full justify-center': 'hidden'}>
        <ul className="text-white text-center m-1 font-karla text-lg tracking-wider font-medium text-transform: uppercase">
          <li className="m-1">Home</li>
          <li className="m-1">Portfolio</li>
          <li className="m-1">Contact</li>
          <li className="m-1">Shop</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
