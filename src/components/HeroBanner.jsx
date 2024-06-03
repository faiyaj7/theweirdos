import React from "react";
import AnimatingName from "./AnimatingName";
import BannerVideo from "./BannerVideo";

const HeroBanner = () => {
  return (
    <>
      <div className="w-full px-4 mt-5 lg:w-1/2 flex flex-col justify-center  ">
        <AnimatingName />
      </div>
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center text-center order-first lg:order-last">
        <BannerVideo />
      </div>
    </>
  );
};

export default HeroBanner;
