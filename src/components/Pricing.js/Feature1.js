import React from "react";
import FeaturesComponent from "./FeaturesComponent";

const Feature1 = () => {
  return (
    <div className="pb-20">
      <div className=" space-y-16 lg:space-y-0">
        <div className="space-y-14 md:space-y-0 flex md:flex-row  flex-col md:justify-between  lg:flex-start  items-center md:items-start">
          <div className="lg:w-1/2 md:w-1/2">
            <FeaturesComponent
              feature=" Measure your performance"
              description="Stay connected with your team and make quick decisions wherever you are"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2">
            <FeaturesComponent
              feature="Custom analytics"
              description="Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place."
            />
          </div>
          <div className="hidden lg:block lg:w-1/2 md:w-1/2">
            <FeaturesComponent
              feature="Team Management
"
              description="Our calendar lets you know what is happening with customer and projects so you"
            />
          </div>
        </div>
      </div>

      <div className="pt-16 space-y-16 lg:space-y-0 ">
        <div className=" space-y-14 md:space-y-0 flex md:flex-row flex-col md:justify-between lg  items-center md:items-start">
          <div className="lg:hidden md:w-1/2">
            <FeaturesComponent
              feature="Team Management
"
              description="Our calendar lets you know what is happening with customer and projects so you"
            />
          </div>
          <div className="md:w-1/2 lg:w-1/2 ">
            <FeaturesComponent
              feature="Build your website"
              description="A tool that lets you build a dream website even if you know nothing about web design or programming."
            />
          </div>
          <div className="hidden lg:block lg:w-1/2 md:w-1/2">
            <FeaturesComponent
              feature="Connect multiple apps"
              description="The first business platform to bring together all of your products from one place."
            />
          </div>
          <div className="hidden lg:block lg:w-1/2 md:w-1/2">
            <FeaturesComponent
              feature="Easy setup"
              description="End to End Business Platform, Sales Management, Marketing Automation, Help Desk"
            />
          </div>
        </div>
      </div>

      <div className="pt-16 space-y-16 lg:hidden ">
        <div className="space-y-14 md:space-y-0 flex md:flex-row  flex-col md:justify-between  items-center md:items-start">
          <div className="md:w-1/2">
            <FeaturesComponent
              feature="Connect multiple apps"
              description="The first business platform to bring together all of your products from one place."
            />
          </div>
          <div className="md:w-1/2">
            <FeaturesComponent
              feature="Easy setup"
              description="End to End Business Platform, Sales Management, Marketing Automation, Help Desk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
