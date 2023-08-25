import React, { useState } from "react";
import Footer from "./Footer";
import HeadComponent from "./HeadComponent";
import Scroll from "@/pages/scroll";

const Layout = ({ children }) => {
  return (
    <div>
      <Scroll />
      <HeadComponent />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
