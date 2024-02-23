"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  const footer__links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Menu", path: "/menu" },
    { id: 3, name: "Blogs", path: "/blog" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname();
  return (
    <footer className="bg-darkGreen px-5 2xl:px-0">
      <div className="container">
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-end">
          <div className="space-y-5 sm:col-span-2 lg:col-auto">
            <Link href="/">
              <Image
                src="/images/food.png"
                alt="Food Logo"
                width={60}
                height={60}
              />
            </Link>
            <p className="text-lg text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              et iure, temporibus enim nam sed illo quam fugit nisi facilis
              quibusdam similique cum voluptatibus sapiente beatae, magnam non,
              iusto ab!
            </p>
          </div>

          <div className="inline-flex flex-col space-y-5 lg:ml-20">
            {footer__links.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className={
                  pathname === item.path
                    ? "text-xl text-lightGreen"
                    : "text-xl text-white"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="space-y-10 text-white">
            <h2 className="text-3xl border-b border-white inline">Contact</h2>
            <div>
              <p className="text-xl">+91 12345 67890</p>
              <span className="text-xl">example@gmail.com</span>
            </div>

            <address className="text-2xl">Andhra Pradesh, IND</address>
          </div>

          <div className="space-y-4 sm:col-span-2 lg:col-auto">
            <h2 className="text-2xl text-white">Newsletter</h2>
            <div className="flex flex-col md:flex-row lg:flex-col md:space-x-4 lg:space-y-4 lg:space-x-0 space-y-4 md:space-y-0 w-full text-white">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-14 border bg-transparent px-5 rounded placeholder:text-white placeholder:text-lg text-lg outline-none"
              />
              <button
                type="button"
                className="w-48 h-12 bg-lightGreen text-xl rounded hover:bg-white hover:text-black duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white py-5 md:py-3 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white text-lg">
            2024 &copy; All rights Reserved | Code Vadlamudi
          </p>
          <div>
            <SocialIcon
              network="instagram"
              bgColor="transparent"
              fgColor="white"
            />
            <SocialIcon network="x" bgColor="transparent" fgColor="white" />
            <SocialIcon
              network="facebook"
              bgColor="transparent"
              fgColor="white"
            />
            <SocialIcon
              network="youtube"
              bgColor="transparent"
              fgColor="white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
