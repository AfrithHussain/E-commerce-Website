import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "@/ContextApi/ShopContext";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import ProductItem from "./ProductItem";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SingleProducts() {
  let { id } = useParams();
  let { products, currency, addToCart } = useContext(ShopContext);

  // Get single product
  let singleProductData = products.find((item) => id === item._id);
  let [similarProducts, setSimilarProduct] = useState([]);

  // State to manage the current main image and selected size
  const [mainImage, setMainImage] = useState(singleProductData?.image[0]);
  const [selectedSize, setSelectedSize] = useState(null); // Track selected size

  similarProducts = products.filter(
    (product) =>
      product.category == singleProductData.category &&
      product.subCategory == singleProductData.subCategory &&
      product.price >= singleProductData.price &&
      product._id !== singleProductData._id,
  );

  useEffect(() => {
    if (singleProductData) {
      setMainImage(singleProductData.image[0]);
    }
    setSimilarProduct(similarProducts);
  }, [id]);

  return (
    <div className="px-4 sm:px-10">
      {/* Main flex container */}
      <div className="mt-10 flex flex-col lg:flex-row lg:justify-evenly lg:items-start">
        {/* All images (left section) */}
        <div className="flex lg:flex-col gap-4 lg:w-1/6">
          {singleProductData?.image.map((img, index) => (
            <LazyLoadImage
              key={index}
              src={img}
              className={`w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover cursor-pointer border-2 ${mainImage === img ? "border-black" : "border-transparent"} rounded-md`}
              alt={`Product Thumbnail ${index + 1}`}
              onClick={() => setMainImage(img)} // Change the main image on click
            />
          ))}
        </div>

        {/* Main product image (middle section) */}
        <div className="mt-4 lg:mt-0 lg:w-2/5 ">
          <LazyLoadImage
            src={mainImage}
            className="w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[600px] object-contain rounded-md"
            alt="Main Product"
          />
        </div>

        {/* Product details (right section) */}
        <div className="mt-6 lg:mt-0 lg:w-1/3">
          <h1 className="font-semibold text-2xl md:text-[25px]">
            {singleProductData?.name}
          </h1>

          <div className="flex text-xl text-orange-600 mt-3">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStarHalf />
            <IoStarOutline />
          </div>

          <p className="font-semibold text-3xl md:text-4xl mt-6">
            {currency}
            {singleProductData?.price}
          </p>

          <p className="mt-6 leading-8 text-neutral-600 text-lg">
            {singleProductData?.description}
          </p>

          <p className="mt-10 text-xl">Select Size</p>

          <div className="flex gap-3 items-center mt-6">
            {singleProductData?.sizes.map((size, index) => (
              <div
                key={index}
                className={`border-2 p-2 w-10 h-10 text-center cursor-pointer rounded-md transition-all duration-200 
                ${selectedSize === size ? "border-black bg-black text-white" : "border-neutral-300 hover:border-black"}`}
                onClick={() =>
                  setSelectedSize(selectedSize === size ? null : size)
                } // Toggle size selection
              >
                {size}
              </div>
            ))}
          </div>

          <button
            onClick={() => addToCart(singleProductData._id, selectedSize)}
            className="bg-black text-white p-3 w-full sm:w-auto sm:px-8 rounded-sm text-lg mt-10 hover:bg-gray-800 transition-all duration-200"
          >
            Add to cart
          </button>

          <hr className="mt-5" />
          <div className="leading-8 text-sm text-neutral-600">
            <p>100% original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="mt-28">
        <div className="flex justify-center md:justify-start items-center gap-2 md:gap-4 lg:gap-2 mx-10">
          <h1 className="prata-regular text-xl md:text-2xl text-neutral-700">
            Similar Products
          </h1>
          <hr className="w-10 h-[3px] bg-neutral-700" />
        </div>

        {
          similarProducts.length > 0 ? <div className="flex flex-wrap gap-10 justify-center mt-6">
          {similarProducts.map((data, index) => (
            <ProductItem
              key={index}
              name={data.name}
              image={data.image}
              price={data.price}
              id={data._id}
            />
          ))}
        </div> :  <p className="text-center mt-10 text-neutral-800 text-2xl ">No Similar Product Found!</p>
        }
      </div>
    </div>
  );
}

export default SingleProducts;
