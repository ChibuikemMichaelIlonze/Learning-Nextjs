import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
 
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="w-screen flex flex-col  justify-between items-center h-44 p-10 text-center dark:bg-gray-950 dark:text-white ">
      {" "}
      <div className="mb-5 flex gap-14 items-center justify-center">
        <a
          href="https://www.linkedin.com/in/chibuikem-ilonze-7397a522a/"
          target="_blank"
        >
          {" "}
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/BikeManJames" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/cmi_james/" target="_blank">
          {" "}
          <BsInstagram />
        </a>
        <a href="https://github.com/ChibuikemMichaelIlonze" target="_blank">
          {" "}
          <BsGithub />
        </a>
      </div>
      <p>
        Copyright @ <span className="font-bold">{date}</span>
      </p>
    </div>
  );
};

export default Footer;
