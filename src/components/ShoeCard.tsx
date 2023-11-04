import Image from "next/image";

const ShoeCard = ({
  shoe = { thumbnail: "", bigShoe: "" },
  changeImage = (e = "") => {},
  bigShoe = "",
}) => {
  return (
    <div
      onClick={() => changeImage(shoe.bigShoe)}
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        bigShoe === shoe.bigShoe ? "border-coral-red" : ""
      }`}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={shoe.thumbnail}
          alt="thumbnail"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
