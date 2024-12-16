import { ShopContext } from "@/ContextApi/ShopContext";
import { useContext } from "react";

function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="p-4 md:p-8 lg:p-10">
      <div>
        {products.slice(1, 5).map((item, index) => (
          <div
            key={index}
            className="gap-5 md:gap-10 border md:border-0 flex p-4 md:p-5 lg:p-6 mt-6 mx-auto max-w-5xl justify-center items-center flex-col md:flex-row"
          >
            {/* Product Image and Details */}
            <div className="flex items-center gap-5 md:gap-10 w-full md:w-2/3">
              <img
                src={item.image[0]}
                className="w-20 h-24 md:w-24 md:h-28 object-contain"
                alt=""
              />
              <div className="w-full">
                <h1 className="text-lg md:text-xl text-neutral-700 outfit">
                  {item.name}
                </h1>
                <div className="flex flex-wrap gap-5 text-sm md:text-lg text-neutral-600 mt-2">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p className="bg-neutral-100 w-8 text-center">{item.sizes[0]}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <p className="text-neutral-800">Date:</p>
                  <p className="text-neutral-600">13, Dec, 2024</p>
                </div>
              </div>
            </div>

            {/* Order Status */}
            <div className="flex gap-2 items-center text-sm md:text-base outfit">
              <p className="bg-green-600 rounded-full w-2 h-2"></p>
              <p>Order placed</p>
            </div>

            {/* Track Order Button */}
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <button className="bg-black text-white p-2 px-5 rounded-sm w-full md:w-auto">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
