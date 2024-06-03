import React from "react";
import Accordion from "../Accordion";

const Faq = () => {
  return (
    <div id="faq" className="bg-black/80  min-h-screen ">
      <h1 className="text-2xl text-white w-fit border-b-2 border-black text-center mx-auto pt-10">
        FAQ
      </h1>
      <Accordion />
    </div>
  );
};

export default Faq;
