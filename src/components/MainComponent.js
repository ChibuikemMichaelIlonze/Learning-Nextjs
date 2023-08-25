import React, { useState } from "react";


import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";

const MainComponent = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      {" "}
      <main className="selection:bg-green-200 selection:text-black dark:selection:bg-green-800  dark:selection:text-white relative bg-white  text-black  dark:bg-gray-950">
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
