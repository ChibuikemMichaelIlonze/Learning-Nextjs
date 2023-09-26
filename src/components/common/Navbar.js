import { BsFillMoonStarsFill, BsOption, BsSunFill, BsThreeDots } from "react-icons/bs";
import Resume from "../specific/Resume";
import logoWhite from "../../../public/images/logo-white.png";
import logoBlack from "../../../public/images/logo-black.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
function Navbar({ darkMode, setDarkMode }) {
  const navLinks = [
    { title: "What we do", href: "/" },
    { title: "How it works", href: "/" },
    { title: "Case studies", href: "/" },
    { title: "About", href: "/" },
    { title: "Contact", href: "/" },
  ];
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <nav className="py-10 mb-5 flex flex-col ">
      <div className="flex flex-row justify-between">
        {" "}
        <h1>
          <Image
            src={darkMode ? logoWhite : logoBlack}
            width={100}
            height={100}
          />
        </h1>
        <ul className="flex items-center gap-10">
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
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`${
              darkMode ? "bg-gray-950 text-white" : "bg-white text-black"
            } fixed left-0 top-0 w-full h-screen origin-top p-10`}
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between px-24 mt-8">
                <h1 className="text-lg text-black">Portfolio</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 1,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
