import React from "react";
import { motion } from "framer-motion";
import { variantg, variants } from "./motionVariants";
import Navbar from "../components/Navbar";
import Profile from "@/pages/profile";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      {" "}
      <section className=" h-screen ">
        <motion.div
          variants={variantg}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
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
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
        </motion.div>
        <motion.div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover" />
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
