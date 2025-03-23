function Footer() {
  return (
    <div className="mt-32 px-4">
      <footer className="bg-white text-black">
        <div className="flex flex-col gap-10 lg:gap-20 lg:flex-row flex-wrap justify-center lg:justify-evenly items-center w-full">
          {/* Left Section */}
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h2 className="text-2xl font-bold">
              VOGUE VIBE<span className="text-green-600 ml-1">.</span>
            </h2>
            <p className="text-xs max-w-[90%] leading-6 md:text-sm mt-4 outfit text-neutral-600 md:max-w-[600px] md:leading-9 break-words">
              Vogue vibe is your go-to destination for elegant and trendy
              fashion. We bring you a curated collection of the latest styles,
              ensuring you feel confident and look stunning for every occasion.
              Step into the world of fashion that speaks to your personality and
              celebrates your unique style.
            </p>
          </div>

          {/* Middle Section */}
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm outfit text-neutral-600">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-auto text-center lg:text-left">
            <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
            <ul className="space-y-2 text-sm outfit text-neutral-600">
              <li>+1-000-000-0000</li>
              <li>voguevibe@gmail.com</li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm border-t border-gray-200 pt-4">
          Copyright © 2025 @ Vogue Vibe - All Right Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
