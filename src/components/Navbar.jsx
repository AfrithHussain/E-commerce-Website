import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Subbase from "../assets/subase.jpg";
import { TfiSearch } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { PiShoppingCartThin } from "react-icons/pi";
import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShopContext } from "@/ContextApi/ShopContext";

function Navbar() {
  // State for controlling the sidebar (Sheet)
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // search bar handler

  let { setSearchFilter, addCount, navigation } = useContext(ShopContext);

  function SearchHandler() {
    setSearchFilter((prev) => !prev);
  }

  // Function to handle closing the Sheet
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <div>
      <div className="flex justify-around mt-6 items-center">
        <div className="flex items-center gap-2">
          <LazyLoadImage src={Subbase} className="w-8" alt="" />
          <Link to={"/"}>
            <h1 className="text-lg md:text-xl lg:text-2xl">VOGUE VIBE</h1>
          </Link>
        </div>
        <div className="text-lg md:flex gap-5 hidden ">
          <div className="">
            <NavLink to="/" className="flex flex-col items-center">
              <p>Home</p>
              <hr className="w-2/4 border-none h-[1.5px] hidden transition-all bg-gray-700" />
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/collection" className="flex flex-col items-center">
              <p>Collection</p>
              <hr className="w-2/4 border-none h-[1.5px] hidden transition-all bg-gray-700" />
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/about" className="flex flex-col items-center">
              <p>About</p>
              <hr className="w-2/4 border-none h-[1.5px] hidden transition-all bg-gray-700" />
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/contact" className="flex flex-col items-center">
              <p>Contact</p>
              <hr className="w-2/4 border-none h-[1.5px] hidden transition-all bg-gray-700" />
            </NavLink>
          </div>
        </div>

        <div className="flex  items-center gap-3">
          <TfiSearch
            onClick={SearchHandler}
            className={`border p-[9px] text-4xl rounded-full cursor-pointer  transition-all  ease-in `}
          />
          {/* here here */}
          <div
            className="relative inline-block text-left"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* Trigger Button */}
            <button
              onClick={() => navigation("/myorders")}
              className="p-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              <CiUser size={20} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white border rounded-md shadow-lg z-50">
                <ul className="py-1">
                  <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
                    My Profile
                  </li>
                  <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
                    Orders
                  </li>
                  <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* cart page */}
          <Link to="/cart">
            <div className="relative">
              <PiShoppingCartThin className="text-4xl border rounded-full p-2 " />
              <p className="absolute bottom-0 right-0 bg-black text-white rounded-full text-[8px] p-[3px] px-[5px] translate-y-1 flex justify-center">
                {addCount()}
              </p>
            </div>
          </Link>
        </div>

        <div className="bg-white md:hidden text-3xl">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger onClick={() => setIsSheetOpen(true)}>
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-10 text-xl mt-32">
                <SheetTitle>
                  <div className="">
                    <Link
                      to="/"
                      className="flex flex-col items-center"
                      onClick={closeSheet}
                    >
                      <p>Home</p>
                      <hr className="w-2/4 border-none h-[1.5px] hidden transition-all bg-gray-700" />
                    </Link>
                  </div>
                </SheetTitle>

                <div className="">
                  <Link
                    to="/collection"
                    className="flex flex-col items-center"
                    onClick={closeSheet}
                  >
                    <p>Collection</p>
                    <hr className="w-2/4 border-none h-[1.5px] hidden transition-all bg-gray-700" />
                  </Link>
                </div>

                <div className="">
                  <Link
                    to="/about"
                    className="flex flex-col items-center"
                    onClick={closeSheet}
                  >
                    <p>About</p>
                    <hr className="w-2/4 border-none h-[1.5px] hidden transition-all bg-gray-700" />
                  </Link>
                </div>

                <div className="">
                  <Link
                    to="/contact"
                    className="flex flex-col items-center"
                    onClick={closeSheet}
                  >
                    <p>Contact</p>
                    <hr className="w-2/4 border-none h-[1.5px] hidden transition-all bg-gray-700" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
