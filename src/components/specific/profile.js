import React from "react";
import { TypeAnimation } from "react-type-animation";
import okay from "../../../public/images/ok.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="flex items-center lg:items-end gap-5 lg:gap-10 flex-col-reverse lg:flex-row pt-40 ">
      {" "}
      <div className="text-center lg:text-left pb-10">
        <h2 className="text-6xl py-2 text-teal-600 font-medium lg:text-6xl">
          Ilonze Chibuikem
        </h2>
        <h3 className="text-2xl py-2 lg:text-3xl dark:text-white">
          I am a{" "}
          <span className="inline-block">
            {" "}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                " Designer",
                1000,
                "soon to be FullStack developer",
                1000,
              ]}
              speed={200}
              repeat={Infinity}
            />
          </span>
        </h3>
      </div>{" "}
      <motion.div className="relative  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
        <Image src={okay} layout="fill" objectFit="cover" />
      </motion.div>
    </div>
  );
};

export default Profile;
