import React from "react";
import Carousel from "../Carousel";
import Button from "../Button";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-[100vh] w-full flex items-center justify-between relative bg-black/60"
    >
      <div className="w-[75%] min-h-[80vh] mx-auto flex flex-col lg:flex-row items-center justify-center ">
        <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
          <Carousel />
        </div>
        <div className="mt-5 lg:mt-0 w-full lg:w-1/2 h-full pb-4 flex flex-col items-center justify-center">
          <h2 className="text-3xl capitalize w-[80%] mx-auto ">
            Welcome To The Weirdos Club.
          </h2>
          <p className="text-xl w-full my-[1rem] mx-auto font-normal">
            The WEIRDOS CLUB is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </p>
          <p className="text-lg w-full font-normal my-[1rem] mx-auto text-white/40">
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </p>
          <Button text="JOIN OUR DISCORD" link="#" />
        </div>
      </div>
    </section>
  );
};

export default About;
