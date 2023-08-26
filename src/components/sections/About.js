import React from "react";
import Image from "next/image";

import Lorem50 from "@/components/specific/Lorem50";
import deved from "../../../public/dev-ed-wave.png";
import { motion } from "framer-motion";
import Services from "../specific/Services";
const About = () => {
  return (
    <div>
      {" "}
      <section>
        <motion.div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover" />
        </motion.div>
        <div className="text-center ">
          <h3 className="text-3xl py-1  dark:text-white ">Services I offer</h3>
          <Lorem50 />
        </div>
        <Services />
      </section>
    </div>
  );
};

export default About;
