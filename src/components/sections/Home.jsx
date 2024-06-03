import React from "react";
// import AnimatedName from "../AnimatedName";
import HeroBanner from "../HeroBanner";
import Side from "../Side";

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen w-screen">
      <div className="w-full lg:w-[75%]  mx-auto flex flex-col lg:flex-row justify-center">
        <HeroBanner />
        <div className="hidden lg:visible absolute bottom-[8rem] right-[90%] w-[6rem] h-[6rem]">
          <Side />
        </div>
      </div>
    </section>
  );
};

export default Home;
