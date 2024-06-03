import React from "react";
import DrawSvg from "../DrawSvg";

const Roadmap = () => {
  return (
    <section id="roadmap" className="min-h-[100vh]">
      <h1 className="w-fit  text-center border-b-2 border-black mx-auto text-5xl mt-10">
        Roadmap
      </h1>
      <div className="w-[70%] h-[20px] mx-auto flex items-center justify-center relative">
        <div className="flex h-full items-center justify-center">
          <DrawSvg />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
