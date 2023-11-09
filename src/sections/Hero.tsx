"use client";

import Button from "@/components/Button";
import ShoeCard from "@/components/ShoeCard";
import { shoes, statistics } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState("/assets/images/big-shoe3.png");

  return (
    <section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Royal</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">
          Discover stylish Royal arrivals, quality comfort, and innovatoin for
          your active life.
        </p>
        <Button label="Shop now" iconUrl="/assets/icons/arrow-right.svg" />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((item, index) => (
            <div key={index} className="">
              <p className="text-4xl font-palanquin font-bold">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <Image
          src={bigShoe}
          alt="ShoeCollection"
          width={610}
          height={500}
          className="relative object-contain z-10"
        />

        <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index} className="">
              <ShoeCard
                bigShoe={bigShoe}
                shoe={shoe}
                changeImage={(bigShoe) => {
                  setBigShoe(bigShoe as string);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
