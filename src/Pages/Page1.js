import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import Flex1 from "../components/Headers.js/Flex1";
import Navbar4 from "../components/Navbar.js/Navbar4";
import FlexPricing from "../components/Pricing.js/FlexPricing";
import Feature1 from "../components/Pricing.js/Feature1";
import FeaturePage1 from "../components/Pricing.js/FeaturePage1";
import FeaturePage2 from "../components/Pricing.js/FeaturePage2";

const Page1 = () => {
  return (
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
      <Flex1 />
      <FeaturePage1 />
      <FeaturePage2 />
    </div>
  );
};

export default Page1;
