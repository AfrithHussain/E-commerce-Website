import { ShopContext } from "@/ContextApi/ShopContext";
import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function BestSeller() {
  let { products } = useContext(ShopContext);
  let [Seller, setSeller] = useState([]);

  useEffect(() => {
    let bestProduct = products.filter((items) => items.bestseller);
    setSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <div>
      <div className="mt-32">
        <div className="flex justify-center  items-center gap-5">
          <h1 className="prata-regular text-xl md:text-2xl  xl:text-[32px]">
            Best Collections
          </h1>
          <hr className="w-16 h-[3px] bg-neutral-700" />
        </div>
        <div className="flex justify-evenly gap-6 mx-20 mt-16 items-center flex-wrap">
          {Seller.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
