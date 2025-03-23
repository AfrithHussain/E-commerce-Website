import Subscribe from "@/components/Subscribe";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Contact() {
  return (
    <div>
      <div className=" flex  justify-center mx-20 mt-16  items-center gap-3">
        <h1 className="prata-regular text-lg md:text-2xl  ">CONTACT US</h1>
        <hr className="w-12 h-[3px] bg-neutral-700" />
      </div>
      {/* main div */}
      <div className="flex justify-center items-center  gap-10 mt-14 flex-col md:ml-20 md:flex-row">
        <div className="">
          {/* div left section */}
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMHdvcmt8ZW58MHx8MHx8fDA%3D"
            className=""
            alt=""
          />
        </div>
        {/* div right section */}
        <div className="leading-10 text-center md:text-start">
          <h1 className="text-xl font-semibold">Our Store</h1>
          <p className="text-neutral-700">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-neutral-700">Tel: (415) 555-0132</p>
          <p className="text-neutral-700">Email: team@voguevibe.com</p>

          <h1 className="text-xl font-semibold">Careers at Forever</h1>
          <p className="text-neutral-700 mt-2">
            Learn more about our teams and job openings.
          </p>

          <button className="bg-black text-white px-6 p-1 rounded-sm mt-2">
            Explore Jobs
          </button>
        </div>
      </div>

      <div className="mt-10">
        <Subscribe />
      </div>
    </div>
  );
}

export default Contact;
