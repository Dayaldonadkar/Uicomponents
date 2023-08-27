import React, { useState } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";

const Navbar2 = ({ img, li1, li2, li3, li4, button1, button2 }) => {
  const [hamburger, setHamburger] = useState(true);

  console.log("button", button1);

  const toggleHam = () => {
    setHamburger(!hamburger);
  };

  return (
    <main>
      <section>
        <div className="flex justify-between px-5 lg:px-20 py-4 relative">
          <img src={img} alt="logo" />
          <div className="hidden md:block">
            <div className="flex space-x-6 lg:space-x-10 items-center">
              <ul className="flex space-x-5  lg:space-x-7 text-sm">
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
              </ul>

              <button className="hover:bg-black hover:text-white border rounded-full border-black px-3 py-2 transistion duration-400">
                Get Consultation
              </button>
            </div>
          </div>
          <div
            onClick={toggleHam}
            className={`${
              hamburger ? "" : "absolute z-10 left-60 -top-[119px]"
            } md:hidden`}
          >
            {hamburger ? <DensityMediumIcon /> : <CloseIcon />}
          </div>
        </div>
        <div className="md:hidden">
          {!hamburger && (
            <div className="absolute top-0 left-0 bg-white h-screen w-[80%] py-10 pl-10 flex flex-col justify-between">
              <img className="w-36" src={img} alt="" />
              <ul className="space-y-7">
                <li className="hover:underline">{li1}</li>
                <li className="hover:underline">{li2}</li>
                <li className="hover:underline">{li3}</li>
                <li className="hover:underline">{li4}</li>
              </ul>
              <div className="flex text-black flex-col space-y-3 w-[90%]">
                <button className="border border-black py-3 rounded-full hover:text-white hover:bg-black">
                  {button1}
                </button>
                <button className="border border-black py-3 rounded-full bg-blue-600 text-white hover:text-white">
                  {button2}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Navbar2;
