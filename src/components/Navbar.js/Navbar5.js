import React, { useState } from "react";

const Navbar5 = ({
  img,
  li1,
  li2,
  li3,
  li4,
  DensityMediumIcon,
  CloseIcon,
  button1,
}) => {
  const [hamburger, setHamburger] = useState(false);
  const toggleHam = () => {
    setHamburger(!hamburger);
  };
  return (
    <main>
      <div className="flex justify-between items-center px-5 lg:px-20 py-4 relative ">
        <div className="flex item-center justify-between w-[100%]">
          <div className="flex items-center space-x-10 -z-10">
            <img src={img} alt="" />
            <ul className="flex font-light items-center text-sm space-x-3">
              <l className="px-3">{li1}</l>
              <li className="px-3">{li2}</li>
              <li className="">{li3}</li>
            </ul>
          </div>
          <div className="hidden md:block pt-2">
            <div className="flex items-center space-x">
              <div className="flex items-center text-light text-sm space-x-5">
                <h6 className="text-sm font-light">{li4}</h6>
                <button className="text-md md:text-xs  rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 py-2 px-2">
                  {button1}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div onClick={() => toggleHam()} className="md:hidden">
          {hamburger ? "" : <DensityMediumIcon />}
        </div>
      </div>

      {hamburger && (
        <div className="absolute top-0 bg-white w-[72%] xxs:w-[65%] xs:w-[53%] sm:w-[45%] h-screen px-7 space-y-5 py-14 md:hidden flex flex-col justify-between z-auto">
          <div className="flex justify-between items-center z-10">
            <img src={img} alt="" />

            <div onClick={() => toggleHam(false)}>
              <CloseIcon />
            </div>
          </div>

          <ul className="space-y-7 pt-8">
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
          </ul>

          <button className="flex justify-center items-center px-3 py-2 text-md rounded-lg bg-indigo-500 text-white hover:bg-indigo-600">
            {button1}
          </button>
        </div>
      )}
    </main>
  );
};

export default Navbar5;
