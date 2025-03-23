import CartTotal from "@/components/CartTotal";
import Stripe from "../assets/stripe_logo.png";
import Razorpay from "../assets/razorpay_logo.png";
import { useContext, useState } from "react";
import { ShopContext } from "@/ContextApi/ShopContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

function PlaceHolder() {
  let [paymentColorChange, setPaymentColorChange] = useState("cod");
  let { navigation } = useContext(ShopContext);
  return (
    <div className="mt-20 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <div className="flex justify-center   mt-16 items-center gap-3">
        <h1 className="prata-regular text-xl md:text-2xl text-center lg:text-left">
          DELIVERY INFORMATION
        </h1>
        <hr className="w-8 h-[3px] bg-neutral-700" />
      </div>

      <div className="w-full lg:w-1/2 mx-auto mt-12">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="First name"
            className="w-full focus:outline-none border p-2 px-4"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full focus:outline-none border p-2 px-4"
          />
        </div>

        <div className="flex flex-col gap-5 mt-6">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full focus:outline-none border p-2 px-4"
          />
          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full focus:outline-none border p-2 px-4"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-6">
          <input
            type="text"
            placeholder="City"
            className="w-full focus:outline-none border p-2 px-4"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full focus:outline-none border p-2 px-4"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-5 mt-6">
          <input
            type="number"
            placeholder="Zipcode"
            className="w-full focus:outline-none border p-2 px-4"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full focus:outline-none border p-2 px-4"
          />
        </div>
      </div>

      {/* main div */}
      <div className="w-full mt-12 flex flex-col  items-end lg:flex-row  lg:justify-center md:items-center ">
        {/* Cart Total */}
        <div className="w-full flex justify-center lg:justify-start">
          <div className="w-full max-w-lg">
            <CartTotal />
          </div>
        </div>

        {/* Payment Method */}
        <div className="w-full mt-12">
          <div className="flex justify-center lg:justify-start items-center gap-3">
            <h1 className="prata-regular text-lg ">PAYMENT METHOD</h1>
            <hr className="w-8 h-[3px] bg-neutral-700" />
          </div>

          {/* Payment Options */}
          <div className="flex flex-col md:flex-row gap-5 mt-5 items-center md:items-start">
            <div
              onClick={() => setPaymentColorChange("stripe")}
              className="flex border w-full md:w-1/2 lg:w-auto px-5 py-2 cursor-pointer items-center justify-between md:justify-start"
            >
              <div className="flex items-center gap-4">
                <p
                  className={`rounded-full border shadow w-4 h-4 ${paymentColorChange === "stripe" ? "bg-green-700" : ""}`}
                ></p>
                <LazyLoadImage
                  className="w-16"
                  src={Stripe}
                  alt="Stripe Logo"
                />
              </div>
            </div>

            <div
              onClick={() => setPaymentColorChange("razor")}
              className="flex border w-full md:w-1/2 lg:w-auto px-5 py-2 cursor-pointer items-center justify-between md:justify-start"
            >
              <div className="flex items-center gap-4">
                <p
                  className={`rounded-full border shadow w-4 h-4 ${paymentColorChange === "razor" ? "bg-green-700" : ""}`}
                ></p>
                <LazyLoadImage
                  className="w-16 py-2"
                  src={Razorpay}
                  alt="Razorpay Logo"
                />
              </div>
            </div>

            <div
              onClick={() => setPaymentColorChange("cod")}
              className="flex border w-full md:w-1/2 lg:w-auto px-5 py-2 cursor-pointer items-center justify-between md:justify-start"
            >
              <div className="flex items-center gap-4">
                <p
                  className={`rounded-full border shadow w-4 h-4 ${paymentColorChange === "cod" ? "bg-green-700" : ""}`}
                ></p>
                <p className="text-neutral-600 py-[2px]">CASH ON DELIVERY</p>
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="w-full flex justify-center md:justify-start mt-5">
            <button
              onClick={() => navigation("/orders")}
              className="bg-black text-white p-3 px-5 w-full md:w-auto"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceHolder;
