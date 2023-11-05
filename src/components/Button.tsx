import Image from "next/image";
import React from "react";

const Button = ({ label = "", iconUrl = "" }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red border-coral-red rounded-full text-white">
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="iconUrl"
          width={5}
          height={5}
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
