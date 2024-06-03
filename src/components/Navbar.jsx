import React, { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavLink = ({ title, singleItem = "", link, handleToggleMenu = "" }) => {
  const MotionLink = motion(Link);

  const handleScroll = (event) => {
    // for mobile
    if (handleToggleMenu) handleToggleMenu();
    let target = event.target.getAttribute("href");
    // Removing the / before the link to make an id

    target = target.slice(1);
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionLink
      to={link}
      variants={singleItem}
      onClick={handleScroll}
      className="mx-[1rem] cursor-pointer relative group text-xl lg:text-base"
    >
      {title}
      <span
        className="h-[2px] w-0 bg-black  absolute 
        left-0 bottom-0 group-hover:w-full transition-all duration-300"
      ></span>
    </MotionLink>
  );
};
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      // making the scroll on when menu is closed
      document.querySelector("html").style.overflow = "visible";
    } else {
      setMenuOpen(true);
      // making the scroll off when menu is opened
      document.querySelector("html").style.overflow = "hidden";
    }
  };

  const container = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      x: 0,
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
    exit: { x: "100vw" },
  };
  const singleItem = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section>
      <nav className="flex justify-between items-center w-[85%] my-0 mx-auto py-5">
        <Logo />
        {/* Mobile Menu Button */}
        <button
          onClick={handleToggleMenu}
          className="visible lg:hidden flex items-center justify-center flex-col gap-1 z-30"
        >
          <span
            className={`bg-black dark:bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              menuOpen ? `rotate-45 translate-y-[0.70rem]` : `-translate-y-0.5`
            } `}
          ></span>
          <span
            className={` my-0.5 bg-black dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              menuOpen ? `opacity-0` : `opacity-100`
            } `}
          ></span>
          <span
            className={`bg-black dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              menuOpen ? `-rotate-45 -translate-y-1` : `translate-y-0.5`
            } `}
          ></span>
        </button>

        <ul className="hidden lg:flex justify-between text-center">
          <NavLink title="Home" link="home" />
          <NavLink title="About" link="about" />
          {/* <NavLink title="Roadmap" link="roadmap" /> */}
          <NavLink title="Showcase" link="showcase" />
          <NavLink title="Team" link="team" />
          <NavLink title="Faq" link="faq" />
        </ul>
        <div className="hidden lg:block">
          <Button text="Connect Wallet" link="/" />
        </div>
      </nav>{" "}
      <AnimatePresence>
        {menuOpen && (
          <div className="visible lg:hidden fixed top-0 right-0 left-0  z-20 min-h-screen backdrop-blur-md overflow-hidden w-full">
            <motion.ul
              className="h-screen flex items-center justify-center flex-col gap-8"
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              <NavLink
                title="Home"
                singleItem={singleItem}
                link="home"
                handleToggleMenu={handleToggleMenu}
              />
              <NavLink
                title="About"
                singleItem={singleItem}
                link="about"
                handleToggleMenu={handleToggleMenu}
              />
              {/* <NavLink title="Roadmap" singleItem={singleItem} link='home'/> */}
              <NavLink
                title="Showcase"
                singleItem={singleItem}
                link="showcase"
                handleToggleMenu={handleToggleMenu}
              />
              <NavLink
                title="Team"
                singleItem={singleItem}
                link="team"
                handleToggleMenu={handleToggleMenu}
              />
              <NavLink
                title="Faq"
                singleItem={singleItem}
                link="faq"
                handleToggleMenu={handleToggleMenu}
              />
            </motion.ul>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Navbar;
