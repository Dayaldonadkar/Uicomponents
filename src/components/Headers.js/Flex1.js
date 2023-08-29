import React from "react";

const Flex1 = () => {
  return (
    <main>
      <div className="px-4 pt-20 x6:px-12 sm:px-24 md:px-4 pmd:px-14 lg:px-16 md:flex md:justify-between md:item-start">
        <div className="md:w-[40%]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl d px-2 font-bold text-center md:text-left">
            A small business is only as good as its tools.
          </h1>
          <div className="flex justify-center md:justify-start">
            <p className="text-center md:text-left text-lg md:text-xl py-12 md:py-6 text-[#6B7280] font-medium flex justify-center w-[85%] md:w-[100%]">
              We’re different. Flex is the only saas business platform that lets
              you run your business on one platform, seamlessly across all
              digital channels.
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
            <button className="bg-green-500  py-5 px-7 rounded-md shadow-sm text-white hover:bg-green-600">
              Request a Demo
            </button>
            <button className="py-5 px-7 bg-[#F4F4F5] rounded-md shadow-sm">
              Sign Up
            </button>
          </div>
        </div>

        <div className="pt-20 md:pt-0 md:w-[45%]">
          <div className="relative">
            <img
              className=""
              src="https://shuffle.dev/flex-ui-assets/images/headers/header.jpg"
              alt=""
            />

            <img
              className="absolute -top-16 -left-16 "
              src="https://shuffle.dev/flex-ui-assets/elements/circle3-yellow.svg"
              alt=""
            />

            <img
              className="absolute -right-3 -bottom-7  w-[20%]"
              src="https://shuffle.dev/flex-ui-assets/elements/dots3-blue.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Flex1;
