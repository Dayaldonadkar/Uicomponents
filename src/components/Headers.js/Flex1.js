import React from "react";

const Flex1 = () => {
  return (
    <main>
      <div className="px-4 pt-20 md1:px-8 x6:px-8 sm:px-24 md:px-4 pmd:px-[7%] pmd1:px-[10%] lg:px-[8%] xl:px-[14%] xl2:px-[16%] md:flex md:justify-between md:item-start">
        <div className="md:w-[45%] pmd:w-[50%] pmd1:w-[45%] xl:flex xl:flex-col xl:justify-between xl2:py-14">
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

          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-4">
            <button className="bg-green-500  py-5 px-7 rounded-md shadow-sm text-white hover:bg-green-600 md:px-10 md:py-4">
              Request a Demo
            </button>
            <button className="py-5 px-7 bg-[#F4F4F5] rounded-md shadow-sm md:py-4 ring-2 ring-[#E5E7EB] hover:bg-[#E5E7EB] border border-[#E5E7EB]">
              Sign Up
            </button>
          </div>
        </div>

        <div className="pt-20 md:pt-0 md:w-[50%] xl2:w-[50% xl2:flex xl2:justify-end">
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
              className="absolute -right-3 -bottom-7  w-[20%] lg:w-[25%] xl:w-[30%] xl2:-right-3"
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
