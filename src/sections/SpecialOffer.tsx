import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <Image
          src="/assets/images/offer.svg"
          alt="offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex-flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
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

        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="View details"
            iconUrl="/assets/icons/arrow-right.svg"
          />
          <Button
            label="Learn more"
            className="bg-white border-slate-gray text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
