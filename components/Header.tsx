"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Menu", path: "/menu" },
    { id: 3, name: "Blogs", path: "/blog" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname();
  return (
    <header className="p-5 2xl:px-0 shadow-sm shadow-white/30">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/food.png"
            alt="Food Logo"
            width={60}
            height={46}
          />
        </Link>

        <div>
          <nav
            className={`fixed inset-y-0 bg-darkGreen lg:bg-transparent right-0 w-full p-20 flex flex-col justify-between lg:relative lg:p-0 lg:flex-row lg:space-x-10 lg:items-center duration-300 z-10 ${
              mobileMenuOpen ? "left-0" : "left-[-100%] lg:left-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 lg:items-center">
              {links.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className={
                    pathname === item.path
                      ? "text-2xl md:text-3xl lg:text-xl text-lightGreen"
                      : "text-2xl md:text-3xl lg:text-xl text-white"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="space-y-10 text-white lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute right-8 top-8 text-white"
              >
                <XMarkIcon
                  className="w-8 h-8 cursor-pointer"
                  aria-hidden="true"
                />
              </button>
              <h2 className="border-b-4 border-dotted w-40 text-3xl text-white">
                Contact
              </h2>

              <div>
                <p>+91 12345 67890</p>
                <span>example@gmail.com</span>
              </div>

              <address>
                Vijayawada, NTR
                <br />
                Andhra Pradesh, IND
              </address>

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
          </nav>
        </div>

        <div className="flex items-center space-x-5 lg:hidden">
          <Link
            href={"/"}
            className="border-2 border-white px-4 py-2 rounded text-white font-semibold text-lg hover:bg-white hover:text-black duration-300"
          >
            Reservations
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className=""
          >
            <Bars3Icon
              className="w-8 h-8 text-white cursor-pointer"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
