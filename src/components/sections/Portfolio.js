import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsTwitter, BsTwitch, BsGithub } from "react-icons/bs"; // Import the icons

import web1 from "../../../public/images/1.png";
import web2 from "../../../public/images/2.png";
import web3 from "../../../public/images/3.png";
import web4 from "../../../public/images/4.png";

const portfolioItems = [
  {
    title: "Movies App",
    description:
      "I was tasked by HNG to develop a Movies App, which displays top-rated movies and includes a search feature for movie exploration.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    imageSrc: web1,
    link: "https://hng-internship-stage2.vercel.app/",
    linkgit: "https://github.com/ChibuikemMichaelIlonze/HNG-Internship-stage2",
  },
  {
    title: "Image Gallery",
    description:
      "I was assigned a task by HNG to develop a React image gallery where users have the ability to interactively rearrange and move images.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    imageSrc: web2,
    link: "https://hng-intership-stage3-v2.vercel.app/",
    linkgit:
      "https://github.com/ChibuikemMichaelIlonze/hng-intership-stage3-v2",
  },
  {
    title: "Blog Application",
    description:
      "I completed a project while taking Angela Yu's Udemy course. The project involved creating a blog application that allows users to perform essential operations such as creating, reading, updating, and deleting blog posts.",
    technologies: ["HTML", "CSS", "JavaScript", "EJS", "MongoDB"],
    imageSrc: web3,
    link: "https://ruby-hungry-frog.cyclic.app/",
    linkgit: "https://github.com/ChibuikemMichaelIlonze/blogpost",
  },
  {
    title: "To-Do List App",
    description:
      "I worked on a project while following Angela Yu's course. In this project, I created a to-do list application where users can add items to their to-do list. Additionally, users can create a new to-do list by simply adding '/[any word]' to the end of the website link.",
    technologies: ["HTML", "CSS", "JavaScript", "EJS", "MongoDB"],
    imageSrc: web4,
    link: "https://ruby-hungry-frog.cyclic.app/",
    linkgit: "https://github.com/ChibuikemMichaelIlonze/a-todolist-website",
  },
];

const Portfolio = ({ darkmode }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen pt-24  " id="portfolio">
      <section>
        <div className="text-center mt-10">
          <h3 className="text-3xl pb-5 dark:text-white">Portfolio</h3>
        </div>
        <div className="flex flex-col gap-10 py-14 md:flex-row md:flex-wrap">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`basis-1/3 flex-1 gap-2 flex flex-col ${
                index % 2 === 0 ? "aos-init aos-animate" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1500"
            >
              <a href={item.link} target="_blank">
                <div className="relative mx-auto bg-gradient-to-b from-teal-500  w-full h-96 overflow-hidden rounded-xl">
                  <Image src={item.imageSrc} layout="fill" objectFit="cover" />
                </div>
              </a>
              <p
                className={`${
                  darkmode
                    ? "text-gray-200 border-gray-400"
                    : "text-black border-black "
                } rounded-lg border-2 text-center md:text-left p-2`}
              >
                {item.description}
              </p>
              <div
                className={`${
                  darkmode ? "text-white" : "text-black"
                } flex gap-2 m-1 flex-wrap items-center justify-center `}
              >
                <a
                  href={item.linkgit}
                  target="_blank"
                  className="text-teal-600"
                >
                  <BsGithub />
                </a>
                {item.technologies.map((tech, techIndex) => (
                  <p
                    key={techIndex}
                    className={`${
                      darkmode ? "border-gray-400 " : "border-black"
                    } border-2 border-opacity-60 rounded-lg p-1`}
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
