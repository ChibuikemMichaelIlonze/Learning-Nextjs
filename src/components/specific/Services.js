import React from "react";
import Image from "next/image";

import code from "../../../public/images/frontend.svg";
import consulting from "../../../public/images/node1.svg";
import database from "../../../public/images/database1.svg";

const servicesData = [
  {
    title: "Frontend Development",
    image: code,
    description:
      "I specialize in creating user-friendly websites that are both visually appealing and functional. I have expertise in HTML, CSS, and JavaScript, and I'm skilled in various frontend libraries and frameworks.",
    tools: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    image: consulting,
    description:
      "I'm proficient in backend technologies, focusing on Express.js and Node.js for server-side logic, API development, and routing.",
    tools: ["Node.js", "Express.js"],
  },
  {
    title: "Database Management",
    image: database,
    description:
      "I have hands-on experience with MongoDB, a robust NoSQL database, which allows for efficient data storage and retrieval. My skills in database management help ensure seamless interactions between the frontend and backend, resulting in responsive and dynamic web applications.",
    tools: ["MongoDB"],
  },
];

const Services = ({ darkmode }) => {
  return (
    <div
      className={`${darkmode ? "text-black" : "text-gray-300"} pt-24`}
      id="skills"
    >
      <h3
        className={`${
          darkmode ? "text-white" : "text-black"
        } text-3xl py-1 flex justify-center items-center`}
      >
        Skills
      </h3>
      <div className="lg:flex gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`${
              darkmode ? "bg-white" : "bg-gray-950 "
            } text-center shadow-lg p-10 rounded-xl my-10 flex-1`}
            data-aos="fade-up" // Set AOS effect to "fade-up" for all services
            data-aos-duration="1500" // Set AOS duration to 1500 milliseconds (1.5 seconds)
          >
            <Image
              src={service.image}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">{service.title}</h3>
            <p>{service.description}</p>
            <div>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              {service.tools.map((tool, toolIndex) => (
                <p key={toolIndex} className="text-gray-800 py-1">
                  {tool}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
