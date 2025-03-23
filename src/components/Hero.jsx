import { Link } from "react-router-dom";
import Heromodel from "../assets/heromodel.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Hero() {
  return (
    <div className="mt-32  mx-20">
      {/* main div */}
      <div className=" flex flex-col lg:flex-row mx-5  w-full md:mx-auto  md:gap-10 lg:gap-0 justify-center items-center">
        {/* div 1 */}
        <div className=" flex mx-2 flex-col gap-6 md:gap-10 items-center justify-center text-center md:text-left px-4 md:px-0">
          <div className="flex justify-center md:justify-start items-center gap-2 md:gap-4 lg:gap-2">
            <h1 className="prata-regular text-md md:text-2xl  xl:text-[32px]">
              Step Into Style, Own the Spotlight!
            </h1>
            <hr className=" w-0 md:w-20 xl:w-24 h-[3px] bg-neutral-700" />
          </div>
          <p className="outfit  text-sm  md:text-xl leading-7 md:leading-9  md:text-center lg:text-start xl:mx-20">
            Discover the latest trends, timeless classics, and exclusive
            collections — all in one place. Your fashion journey starts here.
          </p>

          <Link to={"/collection"}>
            {" "}
            <button className="bg-black text-white py-3 px-6 md:px-8 rounded-sm outfit hover:bg-neutral-800 transition duration-200">
              Buy Now
            </button>
          </Link>
        </div>

        {/* div 2 */}
        <div className="w-full lg:w-[1000px] flex justify-center md:justify-start mt-10 md:mt-0">
          <LazyLoadImage
            src={Heromodel}
            className="h-[350px]  md:mx-auto md:h-[500px] md:w-[80%] lg:w-[80%] object-cover object-center"
            alt="Hero Model"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
