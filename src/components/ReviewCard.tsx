import Image from "next/image";
import React from "react";

const ReviewCard = ({
  imgURL = "",
  customerName = "",
  rating = "",
  feedback = "",
}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Image
        src={imgURL}
        alt="imgURL"
        width={120}
        height={120}
        className="object-cover w-[120px] h-[120px] rounded-full"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image
          src={"/assets/icons/star.svg"}
          alt="star"
          width={22}
          height={22}
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
