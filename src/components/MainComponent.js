import React, { useState } from "react";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Scroll from "./common/scroll";
import Services from "./specific/Services";
import Link from "next/link";
import Navbar from "./common/Navbar";

const MainComponent = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      {" "}
      <main
        className={`selection:bg-green-200  selection:text-black dark:selection:bg-green-800   dark:selection:text-white relative bg-white  text-black  dark:bg-gray-950 w-full`}
      >
        <Scroll />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Link href="/#portfolio"> </Link>
        <div className=" px-10 md:px-20 lg:px-40">
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
          <About darkmode={darkMode} />
          <Services darkmode={darkMode} />
          <Portfolio darkmode={darkMode} />
        </div>
      </main>
    </div>
  );
};

export default MainComponent;
