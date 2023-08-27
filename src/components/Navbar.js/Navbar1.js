import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";

const Navbar1 = ({
  li,
  li2,
  li3,
  li4,
  button1,
  button2,
  bgcolor,
  textcolor,
  img,
  miui,
  toggleHam,
  hamburger,
  hovertext,
  buttoncolor,
  onhoverbutton,
  hoverborder,
  hoverbuttoncolor,
  hoverbuttonborder,
}) => {
  console.log("img", img);
  console.log(textcolor, "textcolor");
  // const [hamburger, setHamburger] = useState(false);

  // const toggleHam = () => {
  //   setHamburger(!hamburger);
  // };

  return (
    // <div className="bg-white text-black px-5 py-4 relative">
    <main className="relative">
      <div
        className={`${hamburger ? "bg-green-400" : `${bgcolor}`} ${
          hamburger ? "h-screen" : `${bgcolor}`
        } px-5 py-4 lg:px-20`}
      >
        <div className="flex justify-between items-center">
          <div>
            <img src={img} alt="" />
          </div>

          <div className="hidden md:block">
            <ul
              className={`${textcolor} flex space-x-4 lg:space-x-10 xl:space-x-14 text-sm lg:text-base`}
            >
              <li>{li}</li>
              <li>{li2}</li>
              <li>{li3}</li>
              <li>{li4}</li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-3">
              {/* <button className="flex items-center justify-center px-4 text-center text-sm text-gray-700 font-semibold border border-gray-200 hover:bg-gray-100 shadow-lg rounded-lg transition duration-200"> */}
              <button
                className={`flex items-center justify-center px-4 text-center text-sm border border-black text-gray-700 ${hoverborder} ${buttoncolor} ${hoverbuttoncolor}  font-semibold  shadow-lg rounded-lg transition duration-500`}
              >
                {button1}
              </button>
              {/* <button className="flex items-center justify-center h-12 px-4 text-center text-base text-white font-semibold bg-gradient-to-b from-cyanGreen-800 to-cyan-800 rounded-lg transition duration-200">
                  Get Started
                </button> */}
              <button className="flex items-center justify-center px-5 h-8 text-center text-white font-semibold bg-gree rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                {button2}
              </button>
            </div>
          </div>

          {/* <div className="md:hidden relative" onClick={() => toggleHam()}> */}
          <div
            className={`${hamburger ? "pr-28" : "pt-0"} z-20 pt-5 md:hidden`}
            onClick={() => toggleHam()}
          >
            {hamburger ? (
              <CloseIcon
                style={{
                  color: miui,
                }}
              />
            ) : (
              <DensityMediumIcon style={{ color: miui }} />
            )}
          </div>
        </div>

        <div
          className={`${bgcolor} md:hidden absolute left-0 top-0 pt-3 w-5/6 px-10`}
        >
          {hamburger && (
            <div className=" flex flex-col h-full py-5">
              <div>
                <img src={img} alt="" />
              </div>
              <div>
                <ul className={`${textcolor}  py-28 space-y-12`}>
                  <li>{li}</li>
                  <li>{li2}</li>
                  <li>{li3}</li>
                  <li>{li4}</li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col">
                  <button className="flex items-center justify-center h-12 mb-4 px-4 text-center text-base text-gray-700 font-semibold border border-gray-200 hover:bg-gray-100 shadow-lg rounded-lg transition duration-200">
                    {button1}
                  </button>

                  <button className="flex items-center justify-center h-12 px-4 text-center text-white font-semibold bg-gree rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
                    {button2}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Navbar1;
