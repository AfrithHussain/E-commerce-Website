import { ShopContext } from "@/ContextApi/ShopContext";
import { useContext } from "react";

function CartTotal() {
  let { currency, delivery_fee, getCartTotal } = useContext(ShopContext);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-10">
      <div className="flex flex-col gap-10 items-end">
        {/* Cart Total Title */}
        <div className="flex justify-start md:justify-end items-center gap-3 mt-16 w-full md:w-96 lg:w-[400px] mr-0 lg:mr-20">
          <h1 className="prata-regular text-xl md:text-2xl">CART TOTAL</h1>
          <hr className="w-8 h-[3px] bg-neutral-700" />
        </div>

        {/* Cart Details */}
        <div className="outfit flex flex-col items-center md:items-end gap-5 w-full md:w-96 lg:w-[400px]">
          {/* Subtotal */}
          <div className="flex justify-between w-full text-lg">
            <p>Subtotal</p>
            <p>
              {currency}
              {getCartTotal()}.00
            </p>
          </div>

          {/* Delivery Fee */}
          <div className="flex justify-between w-full text-lg">
            <p>Delivery Fee</p>
            <p>
              {currency}
              {delivery_fee}
            </p>
          </div>

          {/* Total Fee */}
          <div className="flex justify-between w-full border-t border-neutral-500 border-b py-3 text-lg">
            <p className="font-semibold">Total Fee</p>
            <p>
              {currency}
              {getCartTotal() === 0 ? 0 : getCartTotal() + delivery_fee}
            </p>
          </div>

          {/* Optional Bottom Text */}
          <div className="text-center w-full md:w-96 lg:w-[400px]">
            {/* Optional additional info or message can be placed here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
