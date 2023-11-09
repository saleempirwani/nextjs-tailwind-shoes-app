import { navLinks } from "@/constants";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10 padding-x py-8">
      <nav className="flex items-center justify-between max-container">
        <a href="">
          <Image
            src="/assets/images/header-logo.svg"
            alt="headerLogo"
            width={100}
            height={30}
            className="object-contain"
          />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item, index) => (
            <li key={index} className="">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <Image
            src="/assets/icons/hamburger.svg"
            alt="menuIcon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
