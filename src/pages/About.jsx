/* eslint-disable react/no-unescaped-entities */
function About() {
  return (
    <div className="w-full overflow-hidden">
      {/* Heading Section */}
      <div className="flex justify-center mt-10 md:mt-16 items-center gap-3">
        <h1 className="prata-regular text-lg md:text-2xl text-neutral-800">ABOUT US</h1>
        <hr className="w-8 h-[3px] bg-neutral-700" />
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center px-5 md:px-10 mt-5 md:mt-10 xl:mx-32 xl:gap-20">
        {/* Image */}
        <img
          className="w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[450px] object-cover object-center"
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us"
        />

        {/* Content */}
        <div className="text-neutral-700 w-full md:w-1/2 lg:text-start">
          {/* About Us Content */}
          <div className="outfit">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Vogue Vibe was born out of a passion for fashion and a desire to bring the latest trends to every wardrobe. Our journey started with a simple mission: to create a platform where style enthusiasts can effortlessly discover, explore, and purchase chic, high-quality fashion pieces that reflect their unique personality and vibe.
            </p>
            <p className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-relaxed">
              Since our inception, we have been committed to curating an exclusive collection of fashion-forward clothing and accessories. From everyday essentials to statement pieces, our wide range caters to diverse styles and preferences. Whether you're looking for timeless classics, bold trends, or must-have seasonal looks, Vogue Vibe ensures you find everything you need, sourced from trusted designers and suppliers.
            </p>
          </div>

          {/* Our Goals */}
          <div className="outfit mt-6">
            <h1 className="text-black font-semibold text-base sm:text-lg md:text-xl">Our Goals</h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
              At Vogue Vibe, our mission is to empower individuals with confidence, style, and convenience. We believe fashion is more than clothing—it's self-expression, creativity, and a way to make a statement.
            </p>
            <p className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-relaxed">
              We're dedicated to delivering a seamless shopping experience that exceeds expectations, from browsing our carefully curated collections to the moment your favorite pieces arrive at your door. Vogue Vibe is your ultimate fashion destination, where quality meets elegance, and every customer is treated to a world of style without limits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
