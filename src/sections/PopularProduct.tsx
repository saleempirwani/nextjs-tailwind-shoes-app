import ProductPopularCard from "@/components/ProductPopularCard";
import { products } from "@/constants";
import React from "react";

const PopularProduct = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Explore unparalleled quality and style through our highly coveted
          collection. Immerse yourself in a realm of comfort, innovative design,
          and exceptional value.
        </p>
      </div>

      <div className="mt-16 gap-14 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductPopularCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
