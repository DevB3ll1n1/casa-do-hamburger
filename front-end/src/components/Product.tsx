import { ShoppingBag } from "lucide-react";
import type { ProductType } from "../types/Product";
import { formatterPrice } from "../utils/formatterPrice";

const Product = ({
  id,
  name,
  description,
  price,
  imageUrl,
  category,
}: ProductType) => {
  return (
    <div className=" flex gap-2">
      <img
        src={`./${imageUrl}`}
        className="w-[100px] h-[83px] md:w-[200px] md:h-[166px] rounded-md"
      />
      <div className="flex flex-col w-full">
        <p className="text-sm md:text-lg uppercase font-bold">{name}</p>
        <p className="text-xs md:text-md text-[#848484] flex-1">
          {description}
        </p>
        <div className="flex gap-2 items-center justify-end">
          <p className="text-sm text-[#F2DAAC]">{formatterPrice(price)}</p>
          <ShoppingBag size={18} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Product;
