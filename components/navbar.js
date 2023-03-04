import React, { useState } from "react";
import Image from "next/image";
import logoWhite from "../public/WP-Logo-White.png";

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
        <h1 className="text-white font-permanent-marker text-3xl">Wicked Prints</h1>
        <i
          class={menuOpen ? 'fa-regular fa-xmark text-white fa-3x m-3' : 'fa-regular fa-square-ellipsis text-white fa-3x m-3'}
          onClick={() => {
            setMenuOpen(menuOpen ? false : true);
            console.log(menuOpen);
          }}
        ></i>
      </div>
      <div className={menuOpen ? 'visible flex flex-row bg-black w-full': 'hidden'}>
        <ul className="text-white">
          <li>Home</li>
          <li>Contact</li>
          <li>Shop</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
