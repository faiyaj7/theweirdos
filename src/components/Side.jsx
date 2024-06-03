import React from "react";
import roundtext from "../assets/Rounded-Text-Black.png";
const Side = () => {
  return (
    <>
      <span
        className="w-[3rem] h-[3rem] flex justify-center items-center rounded-full
      absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  text-white bg-black "
      >
        &#x2193;
      </span>
      <img src={roundtext} alt="NFT" className="w-full h-auto animate-spin" />;
    </>
  );
};

export default Side;
