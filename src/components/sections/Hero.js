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

const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      {" "}
      <section className=" h-screen ">
        <motion.div
          variants={variantg}
          initial="hidden"
          animate="visible"
          transition={{ duration: 3 }}
        >
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        >
          <Profile />
          <motion.div 
          variants={variants}
          
          transition={{ duration: 4 }}
          className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
