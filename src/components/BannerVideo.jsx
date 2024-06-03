import React from "react";
import nft from "../assets/Home Video.mp4";
const BannerVideo = () => {
  return (
    <div className="w-full">
      <video
        src={nft}
        type="video/mp4"
        autoPlay
        muted
        loop
        className="w-full h-auto"
      />
    </div>
  );
};

export default BannerVideo;
