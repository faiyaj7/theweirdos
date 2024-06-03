import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className="font-akaya font-semibold text-5xl hover:scale-125 transition-all duration-300">
      <Link to="/">W.</Link>
    </h1>
  );
};

export default Logo;
