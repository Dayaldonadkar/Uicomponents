import React, { useState } from "react";
import Navbar1 from "../components/Navbar.js/Navbar1";
import Flex1 from "../components/Headers.js/Flex1";
import FeaturePage3 from "../components/Pricing.js/FeaturePage3";

const Page2 = () => {
  const [hamburger, setHamburger] = useState(false);
  const toggleHam = () => {
    setHamburger(!hamburger);
  };
  return (
    <div>
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

      <Flex1 />

      <FeaturePage3 />
    </div>
  );
};

export default Page2;
