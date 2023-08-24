import React from "react";
import Navbar1 from "../components/Navbar.js/Navbar1";

const Navbars = () => {
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
          bgcolor="bg-white"
          textcolor="text-black"
        />
      </div>
    </main>
  );
};

export default Navbars;
