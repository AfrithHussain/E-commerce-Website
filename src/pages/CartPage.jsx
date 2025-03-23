import CartTotal from "@/components/CartTotal";
import { ShopContext } from "@/ContextApi/ShopContext";
import { useContext, useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";

function CartPage() {
  let { products, currency, cartItem, updateQuanity, navigation } =
    useContext(ShopContext);

  let [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempCart = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempCart.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempCart);
  }, [cartItem]);

  const handleCheckout = () => {
    if (cartData.length === 0) {
      toast.error("Please add at least one item to the cart before proceeding.");
    } else {
      navigation("/placeholder");
    }
  };

  return (
    <div>
      <div className="flex justify-start mx-20 mt-16 items-center gap-3">
        <h1 className="prata-regular text-xl md:text-2xl xl:text-[32px]">
          Your Cart
        </h1>
        <hr className="w-12 h-[3px] bg-neutral-700" />
      </div>

      <div className="mt-10 mx-20">
        {cartData.length === 0 ? (
          <p className="text-center text-2xl text-neutral-800 ">No items in cart</p>
        ) : (
          cartData.map((data, index) => {
            let productDuplicate = products.find(
              (item) => item._id === data._id
            );

            return (
              <div
                key={index}
                className="gap-10 md:border flex p-5 py-6 mt-6 justify-center items-center md:justify-between flex-col md:flex-row"
              >
                <div className="flex items-center gap-14">
                  <LazyLoadImage
                    src={productDuplicate.image[0]}
                    className="w-24 h-28 object-contain"
                    alt=""
                  />
                  <div>
                    <h1 className="text-xl text-neutral-700 outfit">
                      {productDuplicate.name}
                    </h1>
                    <div className="flex gap-10 text-lg text-neutral-600 mt-2">
                      <p>
                        {currency}
                        {productDuplicate.price}
                      </p>
                      <p className="bg-neutral-100 w-8 text-center">{data.size}</p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuanity(
                          data._id,
                          data.size,
                          Number(e.target.value)
                        )
                  }
                  type="number"
                  min={1}
                  defaultValue={data.quantity}
                  className="w-10 text-center border border-gray-400"
                />
                <BsTrash
                  className="text-2xl cursor-pointer text-red-500"
                  onClick={() => updateQuanity(data._id, data.size, 0)}
                />
              </div>
            );
          })
        )}
      </div>

      {cartData.length > 0 && <CartTotal />}

      <div className="flex justify-end mx-0 md:mx-64 mt-10">
        <button
          onClick={handleCheckout}
          className="bg-black text-white outfit rounded-sm p-3 md:p-2 px-6 text-base md:text-sm w-full md:w-auto text-center hover:bg-gray-800 transition-all"
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CartPage;
