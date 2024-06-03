import React from "react";
import img4 from "../../assets/Nfts/bighead-4.svg";
import img5 from "../../assets/Nfts/bighead-5.svg";
import img6 from "../../assets/Nfts/bighead-6.svg";
import img7 from "../../assets/Nfts/bighead-7.svg";
import img8 from "../../assets/Nfts/bighead-8.svg";
import Button from "../Button";
import Logo from "../Logo";

import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col w-full min-h-screen ">
      {/* Top Part */}
      <div className="flex flex-col justify-center items-center w-full">
        <div className="relative w-full">
          {/* Images */}
          <div className="grid grid-cols-5 w-full bg-black/40 py-32">
            <img src={img4} alt="Weirdos" />
            <img src={img5} alt="Weirdos" />
            <img src={img6} alt="Weirdos" />
            <img src={img7} alt="Weirdos" />
            <img src={img8} alt="Weirdos" />
          </div>
          {/* Overlay */}
          <div className="absolute left-0 top-0 w-full h-full bg-black/70" />
          {/* Text */}
          <div
            className="absolute left-[10%] top-[25%] md:top-[50%] flex items-center justify-between w-[70%] 
          flex-col md:flex-row gap-6"
          >
            <h1 className="text-white text-2xl md:text-6xl font-bold w-[50%]">
              Join the Weirdos Club
            </h1>
            <Button text="Join Now" link="" />
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="flex items-center justify-center flex-col w-[75%] mt-10">
        <div className="flex justify-between items-center w-full flex-col lg:flex-row gap-10 border-b-2 border-black/70 mb-10">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 flex-col mb-8">
            <Logo />
            <div className="flex justify-center items-center gap-3 text-2xl  ">
              <FaFacebook className="hover:scale-110 transition-all duration-300  cursor-pointer" />
              <FaInstagram className="hover:scale-110 transition-all duration-300  cursor-pointer" />
              <FaTwitter className="hover:scale-110 transition-all duration-300  cursor-pointer" />
              <FaLinkedin className="hover:scale-110 transition-all duration-300  cursor-pointer" />
            </div>
          </div>
          {/* Menu */}
          <div className="mb-8 hidden lg:block">
            <ul className="grid grid-cols-2 w-full gap-x-64 gap-y-4 font-light auto-cols-fr ">
              <Link
                href="#home"
                className="text-sm font-medium hover:scale-110 transition-all duration-300  cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="#roadmap"
                className="text-sm font-medium hover:scale-110 transition-all duration-300  cursor-pointer"
              >
                Roadmap
              </Link>
              <Link
                href="#team"
                className="text-sm font-medium hover:scale-110 transition-all duration-300  cursor-pointer"
              >
                Team
              </Link>
              <Link
                href="#home"
                className="text-sm font-medium hover:scale-110 transition-all duration-300  cursor-pointer"
              >
                About
              </Link>
              <Link
                href="#roadmap"
                className="text-sm font-medium hover:scale-110 transition-all duration-300  cursor-pointer"
              >
                Showcase
              </Link>
              <Link
                href="#team"
                className="text-sm font-medium hover:scale-110 transition-all duration-300  cursor-pointer"
              >
                Faq
              </Link>
            </ul>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <h1>© Copyright {new Date().getFullYear()}. All rights reserved.</h1>
          <h1>Made with ❤ by Faiyaj Bin Ahmed</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
