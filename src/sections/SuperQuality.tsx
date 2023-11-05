import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex-flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you <span className="text-coral-red">Super</span>{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Our carefully crafted footwear guarantees superior comfort and style.
          Created with meticulous attention to detail, our shoes are intended to
          enhance your experience, offering unparalleled quality, innovation,
          and a hint of sophistication.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <Image
          src="/assets/images/shoe8.svg"
          alt="iconUrl"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
