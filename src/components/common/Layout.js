import React from "react";
import Footer from "./Footer";
import HeadComponent from "../HeadComponent";

const Layout = ({ children, darkMode, setDarkMode }) => {
  return (
    <div>
      <HeadComponent />
      <main>{children}</main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Layout;
