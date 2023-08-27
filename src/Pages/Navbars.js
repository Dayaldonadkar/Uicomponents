import React, { useState } from "react";
import Navbar1 from "../components/Navbar.js/Navbar1";
import Navbar2 from "../components/Navbar.js/Navbar2";

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
          hoverbuttoncolor="hover:bg-grry-700" //not working
          hoverborder="hover:border-white"
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
    </main>
  );
};

export default Navbars;
