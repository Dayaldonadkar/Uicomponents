import React, { useState } from "react";
import Navbar1 from "../components/Navbar.js/Navbar1";
import Navbar2 from "../components/Navbar.js/Navbar2";
import Navbar3 from "../components/Navbar.js/Navbar3";
import Navbar4 from "../components/Navbar.js/Navbar4";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import Navbar5 from "../components/Navbar.js/Navbar5";

const Navbars = () => {
  const [hamburger, setHamburger] = useState(false);
  const toggleHam = () => {
    setHamburger(!hamburger);
  };

  return (
    <main>
      <div>
        <Navbar1
          li="Products"
          li2="Features"
          li3="Pricing"
          li4="Resources"
          button1="Sign In"
          button2="Create a Account"
          img="https://static.shuffle.dev/components/preview/1d434082-6186-4123-90b0-b38266853c0d/assets/public/aurora-assets/logos/aurora-logo.svg"
          miui="black"
          bgcolor="bg-white"
          toggleHam={toggleHam}
          hamburger={hamburger}
          hoverbuttoncolor="hover:bg-gray-100" //not working
          hoverbuttonborder="hover:border-gray-700"
        />
      </div>
      <div>
        <Navbar1
          li="Dayal"
          li2="Features"
          li3="Pricing"
          li4="Resources"
          button1="Login"
          button2="Get started"
          bgcolor="bg-black"
          textcolor="text-white"
          img="https://static.shuffle.dev/components/preview/1d434082-6186-4123-90b0-b38266853c0d/assets/public/aurora-assets/logos/aurora-logo-white.svg#"
          miui="white"
          toggleHam={toggleHam}
          buttoncolor="bg-white"
          hovertext="text-black"
          onhoverbutton=""
        />
      </div>

      <div>
        <Navbar2
          img="https://shuffle.dev/asitrastudio-assets/logos/logo-asi.svg"
          li1="About"
          li2="Services"
          li3="Projects"
          li4="Contact us"
          button1="Login"
          button2="Sign In"
        />
      </div>

      <div>
        <Navbar1
          li="Shopping"
          li2="Features"
          li3="Services"
          li4="About us"
          button1="Login"
          button2="Sign Up"
          bgcolor="bg-white"
          textcolor="text-black"
          img="https://shuffle.dev/flex-ui-assets/logos/flex-ui-green-light.svg"
          miui="black"
          toggleHam={toggleHam}
          buttoncolor="bg-white"
          hovertext="text-black"
          ohoverbuttoncolor="hover:bg-gray-100" //not working
          hoverbuttonborder="hover:border-gray-700"
        />
      </div>

      <div>
        <Navbar3
          img="https://shuffle.dev/flex-ui-assets/logos/flex-ui-green-light.svg"
          li1="Product"
          li2="Features"
          li3="Pricing"
          li4="Resources"
        />
      </div>

      <div>
        <Navbar4
          img="https://shuffle.dev/basko-assets/logos/basko-logo-dark.png"
          li1="Features"
          li2="Pricing"
          li3="Automation"
          li4="Customer Login"
          DensityMediumIcon={DensityMediumIcon}
          CloseIcon={CloseIcon}
          button1="Try 14 Days Free Trials"
        />
      </div>
      <div>
        <Navbar5
          img="https://shuffle.dev/basko-assets/logos/basko-logo-dark.png"
          li1="Features"
          li2="Pricing"
          li3="Automation"
          li4="Login"
          DensityMediumIcon={DensityMediumIcon}
          CloseIcon={CloseIcon}
          button1="Try 14 Days Free Trials"
        />
      </div>
    </main>
  );
};

export default Navbars;
