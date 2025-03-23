import { ShopContext } from "@/ContextApi/ShopContext";
import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
function Product() {
  let [LatestCollection, setLatestCollection] = useState([]);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    setLatestCollection(products.slice(0, 10));
  }, []);

  return (
    <div className="mt-32 ">
      <div className="">
        <div className="flex justify-center  items-center gap-5">
          <h1 className="prata-regular text-xl md:text-2xl  xl:text-[32px]">
            Latest Collections
          </h1>
          <hr className="w-16 h-[3px] bg-neutral-700" />
        </div>

        <div className="flex justify-evenly gap-6 mx-20 mt-16 items-center flex-wrap">
          {LatestCollection.map((data, value) => (
            <ProductItem
              key={value}
              image={data.image}
              name={data.name}
              price={data.price}
              id={data._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
