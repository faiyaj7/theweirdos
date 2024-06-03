import React from "react";

const Button = ({ text, link }) => {
  return (
    <button
      className="inline-block border-none outline-none 
    px-[1.8rem] py-[1.2rem] rounded-3xl cursor-pointer
     bg-black transition-all duration-300  relative hover:ring hover:ring-black hover:ring-offset-4"
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-white text-sm"
      >
        {text}
      </a>
    </button>
  );
};

export default Button;
