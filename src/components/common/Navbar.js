import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import logoWhite from "../../../public/images/logo-white.png";
import logoBlack from "../../../public/images/logo-black.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleRotation = () => {
    setIsRotated((prevIsRotated) => !prevIsRotated);
  };

  return (
    <div className="mx-auto w-full fixed justify-around px-10 md:px-20 lg:px-40 flex z-50 bg-black bg-opacity-90">
      <nav className="  justify-between flex items-center w-full">
        <h1>
          <Image
            src={darkMode ? logoWhite : logoBlack}
            width={100}
            height={100}
          />
        </h1>

        <div className="relative">
          <div className="flex md:hidden" onClick={toggleMenu}>
            <label tabIndex={0} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  darkMode ? "text-white" : "text-black"
                } transform ${isRotated ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={toggleRotation}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={` flex-col flex gap-10 items-center mt-3 z-[1] p-5 shadow rounded-box w-screen fixed top-20 left-0 ${
                    darkMode ? "bg-gray-950 text-white" : "bg-white"
                  }`}
                >
                  <Link href="/#home">
                    <li>Home</li>
                  </Link>
                  <Link href="/#about">
                    <li>About</li>
                  </Link>
                  <Link href="/#skills">
                    <li>Skills</li>
                  </Link>
                  <Link href="/#portfolio">
                    <li>Portfolio</li>
                  </Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <ul
            className={`${
              darkMode ? "text-white" : "text-black"
            } hidden md:flex gap-5 cursor-pointer items-center text-xl`}
          >
            <Link href="/#home">
              <li>Home</li>
            </Link>
            <Link href="/#about">
              <li>About</li>
            </Link>
            <Link href="/#skills">
              <li>Skills</li>
            </Link>
            <Link href="/#portfolio">
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <ul>
          <li>
            {darkMode ? (
              <BsSunFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl dark:text-white animate-pulse hover:animate-none"
              />
            ) : (
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl dark:text-white animate-pulse hover:animate-none"
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
