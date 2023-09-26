import React from "react";

import HeadComponent from "../HeadComponent";

const Layout = ({ children, darkMode, setDarkMode }) => {
  return (
    <div>
      <HeadComponent />
      <main>{children}</main>
     
    </div>
  );
};

export default Layout;
