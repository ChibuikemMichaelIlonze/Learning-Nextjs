import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import logoWhite from "../../../public/images/logo-white.png";
import logoBlack from "../../../public/images/logo-black.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
 

  const [open, setOpen] = useState(false);

  return (
    <div className=" mx-auto w-[75%] fixed justify-between flex z-50">
      <nav className="py-5 mb-5   justify-between flex items-center w-full">
        <h1>
          <Image
            src={darkMode ? logoWhite : logoBlack}
            width={100}
            height={100}
          />
        </h1>

       
        <ul
          className={`${
            darkMode ? "text-white" : "text-black"
          } flex gap-5 cursor-pointer items-center text-xl`}
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
        <ul>
          {" "}
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
