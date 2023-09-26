import React from "react";
import { motion } from "framer-motion";
import { variantg, variants } from "../specific/motionVariants";
import Navbar from "../common/Navbar";
import Profile from "@/components/specific/profile";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsArrow90DegDown, BsArrowDown } from "react-icons/bs";

const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      {" "}
      <section className=" h-screen relative " id="home">
       
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        >
          <Profile />
          {/* <motion.div
            variants={variants}
            transition={{ duration: 4 }}
            className="text-5xl flex justify-center  py-3 text-gray-600 dark:text-gray-400"
          >
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </motion.div> */}
        </motion.div>
        <div className="absolute bottom-0 left-0">
          <BsArrowDown
            height={100}
            width={100}
            className={`${
              darkMode ? "fill-white" : "fill-black"
            } animate-bounce `}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
