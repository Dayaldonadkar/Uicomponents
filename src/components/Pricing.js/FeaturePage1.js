import React from "react";
import Feature1 from "./Feature1";
import bg from "./pattern-light-big.svg";

const FeaturePage1 = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="flex justify-center pt-16"
    >
      <div className="w-[80%] md:[]">
        <div className="text-center">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold">
            Gain more insight into how people use your
          </h1>
          <p className="text-lg md:text-xl text-[#71717A] mb-20">
            With our integrated CRM,project management,collaboration adn
            invoicng capabilities, you can manage every aspect of your business
            in one secure platform
          </p>
        </div>

        <Feature1 />
      </div>
    </div>
  );
};

export default FeaturePage1;
