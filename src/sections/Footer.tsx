import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex flex-wrap justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col">
          <a href="/">
            <Image
              src="/assets/images/header-logo.svg"
              alt="footer"
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm ">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item, index) => (
              <div
                key={index}
                className="bg-white flex items-center justify-center rounded-full w-12 h-12"
              >
                <Image src={item.src} alt={item.alt} width={24} height={24} />
              </div>
            ))}
          </div>

          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-8">
            {footerLinks.map((item, index) => (
              <div key={index} className="">
                <h4 className="text-white font-montserrat font-medium text-2xl leading-normal mb-6">
                  {item.title}
                </h4>
                <ul>
                  {item.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="mt-3 text-base leading-normal font-montserrat "
                    >
                      <a href="/" className="text-white hover:text-white-400">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24  max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 items-center gap-2 font-montserrat cursor-pointer ">
          &copy;
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
