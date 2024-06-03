import React from "react";
import TypeWriter from "typewriter-effect";
import Button from "./Button";
const AnimatingName = () => {
  return (
    <>
      {" "}
      <h2 className="w-full  md:w-[80%] capitalize text-start text-4xl mb-2">
        Discover a New era of cool
      </h2>
      <TypeWriter
        options={{ autoStart: true, loop: true }}
        onInit={(typeWriter) => {
          typeWriter
            .typeString(
              `<span style='color:blue; font-size:1.4rem;'>NFT.s</span>`
            )
            .pauseFor(2000)
            .deleteAll()
            .typeString(
              `<span style='color:orange; font-size:1.4rem;'>Collectable Items.</span>`
            )
            .pauseFor(2000)
            .deleteAll()
            .typeString(
              `<span style='color:red; font-size:1.4rem;'>Ape Killers!</span>`
            )
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
      <h3 className=" mt-2 text-lg capitalize font-semibold mb-[1rem] w-[80%] items-start text-black/55">
        Bored of Apes? Try Something New
      </h3>
      <div className="w-[80%] items-start">
        <Button text="Explore" link="#about" />
      </div>
    </>
  );
};

export default AnimatingName;
