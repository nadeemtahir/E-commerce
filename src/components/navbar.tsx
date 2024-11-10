"use client";

import { useState } from "react";
import Link from "next/link";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="relative">
      <div className="md:sticky md:top-0 z-20 relative">
        {/* DESKTOP */}
        <div className="hidden lg:block bg-white p-4">
          <div className="flex justify-between mx-[41px] items-center">
            <Link href="/">
              <div>
                <img src="/logo.png" alt="logo" />
              </div>
            </Link>
            <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
              {links.map((link, index) => (
                <Link
                  href={link.link}
                  key={index}
                  className="hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray"
                >
                  <p>{link.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className={`block lg:hidden fixed top-0 w-full z-[999] bg-white py-4 ${menu ? "!bg-[#FFF3E3] py-2" : ""}`}>
          <div className="flex justify-between mx-[10px] items-center">
            <img src="/images/logo.png" alt="logo" className="w-[7rem]" />
            <button onClick={toggleMenu} className="text-black">
              {/* Hamburger icon */}
              {menu ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menu && (
            <div className="my-8 select-none">
              <div className="flex flex-col gap-8 mt-8 mx-4">
                {links.map((link, index) => (
                  <Link key={index} href={link.link} className="text-black cursor-pointer" onClick={toggleMenu}>
                    <p>{link.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
