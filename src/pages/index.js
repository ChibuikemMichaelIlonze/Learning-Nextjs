import Image from "next/image";
import Navbar from "./Navbar";
import Head from "next/head";
import Lorem50 from "./Lorem50";
import Profile from "./profile";
import { motion } from "framer-motion";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/design.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";
import Scroll from "./scroll";

import Testimonial from "./testimonial";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
    tap: {
      scale: 0.9,
      transition: {
        duration: 1,
      },
    },
    hover: { scale: 1.2 },
  };
  const variantg = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      className={darkMode ? "dark" : ""}
     
    >
      <Head>
        <title>Chibuikem</title>
        <meta name="description" content="ggggg" />
      </Head>
      <main className="selection:bg-green-200 selection:text-black dark:selection:bg-green-800  dark:selection:text-white relative bg-white  text-black  dark:bg-gray-950">
        <Scroll />
        <div className=" px-10 md:px-20 lg:px-40">
          <section className=" min-h-screen ">
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
            <motion.div
            
              className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96"
            >
              <Image src={deved} layout="fill" objectFit="cover" />
            </motion.div>
          </section>
          <section>
            <div className="text-center">
              <h3 className="text-3xl py-1  dark:text-white ">
                Services I offer
              </h3>
              <Lorem50 />
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image
                  src={design}
                  width={100}
                  height={100}
                  className=" mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <Testimonial />
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image
                  src={consulting}
                  width={100}
                  height={100}
                  className=" mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <Testimonial />
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Image
                  src={code}
                  width={100}
                  height={100}
                  className=" mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <Testimonial />
              </div>
            </div>
          </section>
          <section>
            <div className="text-center mt-10">
              <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
              <Lorem50 />
            </div>
            <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web4}
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web5}
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web6}
                  className="rounded-lg object-cover "
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </motion.div>
  );
}
