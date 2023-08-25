import React, { useState } from "react";
import Footer from "./Footer";
import HeadComponent from "./HeadComponent";
import Scroll from "@/pages/scroll";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Scroll />
      <HeadComponent darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
