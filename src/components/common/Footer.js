import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMailbox,
  BsMailbox2,
  BsTwitter,
} from "react-icons/bs";
import { AiOutlineAim, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div id="contact" className="w-full  flex flex-col gap-6 justify-between items-center h-64 p-10 text-center dark:bg-gray-950 dark:text-white ">
      {" "}
        <h2>Contact me on any of these platforms</h2>
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
        <a href="mailto:chibuikemichaelilonze@gmail.com" target="_blank">
          <AiOutlineMail />
        </a>
      </div>
      <p>
        Copyright @ <span className="font-bold">{date}</span>
      </p>
    </div>
  );
};

export default Footer;
