import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex flex-wrap items-center justify-between w-full p-4 md:p-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex justify-between w-full md:w-auto mb-4 md:mb-0"
      >
        <img src={Logo} alt="logo" className="h-12 md:h-16 w-auto" />
        <button className="text-2xl md:hidden" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:items-center md:justify-center gap-4 md:gap-10 text-center md:mb-0 absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
      >
        <Link to="/aboutus" className="hover:text-blue-500">
          About Us
        </Link>
        <Link to="/virtual-labs" className="hover:text-blue-500">
          Virtual Labs
        </Link>
        <Link to="/program" className="hover:text-blue-500">
          Programs
        </Link>
        <Link to="/for-colleges" className="hover:text-blue-500">
          For Colleges
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-wrap justify-center md:justify-end gap-3 mt-4 md:mt-0"
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          type="button"
          className="text-[#2B95ED] border border-blue-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Log in
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          type="button"
          className="text-white bg-[#2B95ED] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Register
        </motion.button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
