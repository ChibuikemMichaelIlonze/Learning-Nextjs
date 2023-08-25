import React from "react";
import Footer from "./Footer";
import HeadComponent from "../HeadComponent";

const Layout = ({ children }) => {
  return (
    <div>
      <HeadComponent />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
