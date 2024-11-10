"use client"
import React from "react";
import Link from "next/link";

function Footer() {
  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const help = [
    { title: "Payment Options", link: "/help/payment-options" },
    { title: "Returns", link: "/help/returns" },
    { title: "Privacy Policies", link: "/help/privacy" },
  ];

  return (
    <section className="pb-16">
      <div className="px-4 md:px-[70px] flex justify-between w-full flex-col md:flex-row gap-8 pt-36">
        <div>
          <img src="/footer_logo.png" alt="Footer logo" className="mb-4" />
          <address className="text-customGray">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </address>
        </div>
        <div>
          <p className="text-customGray text-bold mb-[55px]">Links</p>
          <div className="flex flex-col gap-[46px] font-medium">
            {links.map((link, index) => (
              <Link href={link.link} key={index} className="hover:text-gray-400">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-customGray text-bold mb-[55px]">Help</p>
          <div className="flex flex-col gap-[46px] font-medium">
            {help.map((link, index) => (
              <Link href={link.link} key={index} className="hover:text-gray-400">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-customGray text-normal mb-[55px]">Newsletter</p>
          <button className="font-medium underline underline-offset-[6px]">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="px-4 md:px-[70px] ">
        <p className="text-customGray py-8">2023 furino. All rights reserved</p>
      </div>
    </section>
  );
}

export default Footer;
