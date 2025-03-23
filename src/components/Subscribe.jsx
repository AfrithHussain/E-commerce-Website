function Subscribe() {
  function SubmitHandler(event) {
    event.preventDefault();
  }
  return (
    <div className="text-xs md:text-lg flex flex-col  justify-center items-center gap-4 mt-32">
      <h1 className="outfit text-2xl">Subscribe now & Get 15% offer</h1>
      <p className="text-neutral-500 outfit text-center md:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cupiditate
        laudantium quo!
      </p>
      <div className="mt-5">
        <form action="">
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-center w-[800px]">
            <input
              type="text"
              className=" w-[40%] md:w-[70%] border p-3  translate-y-[1px]"
              placeholder="enter your email"
            />
            <button
              onClick={SubmitHandler}
              type="submit"
              className="bg-black text-white outfit p-3 px-6"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
