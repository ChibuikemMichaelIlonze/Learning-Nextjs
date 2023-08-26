import React, { useState } from "react";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Scroll from "./common/scroll";

const MainComponent = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      {" "}
      <main className="selection:bg-green-200 selection:text-black dark:selection:bg-green-800  dark:selection:text-white relative bg-white  text-black  dark:bg-gray-950">
        <Scroll />
        <div className=" px-10 md:px-20 lg:px-40">
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
          <About />
          <Portfolio />
        </div>
      </main>
    </div>
  );
};

export default MainComponent;
