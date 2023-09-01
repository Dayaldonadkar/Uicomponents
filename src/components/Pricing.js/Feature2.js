import React from "react";
import FeaturesComponent from "./FeaturesComponent";

const Feature2 = () => {
  return (
    <div className="space-y-16 lg:flex lg:items-center lg:space-y-0 ">
      <div className="space-y-16 md:space-y-0 lg:space-y-6 md:flex lg:flex-col lg:w-[80%] ">
        <div className="">
          <FeaturesComponent
            feature=" Measure your performance"
            description="Stay connected with your team and make quick decisions wherever you are"
          />
        </div>
        <div className="">
          <FeaturesComponent
            feature="Custom analytics"
            description="Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
          />
        </div>
      </div>
      <div className="flex justify-center w-[90%] xl2:w-[95%]">
        <img
          className=""
          src="https://shuffle.dev/flex-ui-assets/images/features/stock.png"
          alt=""
        />
      </div>

      <div className="space-y-16 md:space-y-0 lg:space-y-6 md:flex lg:flex-col lg:w-[80%]">
        <div className="">
          <FeaturesComponent
            feature=" Measure your performance"
            description="Stay connected with your team and make quick decisions wherever you are"
          />
        </div>
        <div className="">
          <FeaturesComponent
            feature="Custom analytics"
            description="Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
          />
        </div>
      </div>
    </div>
  );
};

export default Feature2;
