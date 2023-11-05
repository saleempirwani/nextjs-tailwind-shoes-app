import Image from "next/image";
import React from "react";

const ProductPopularCard = ({
  imgURL = "",
  name = "",
  price = "",
  rating = "",
}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <Image
        src={imgURL}
        alt="imgURL"
        width={280}
        height={280}
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5 ">
        <Image
          src={"/assets/icons/star.svg"}
          alt="rating"
          width={24}
          height={24}
          className="w-[24px] h-[24px]"
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default ProductPopularCard;
