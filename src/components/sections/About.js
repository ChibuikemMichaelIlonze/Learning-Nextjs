import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS


const About = ({ darkmode }) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []); // Empty dependency array to run it once

  return (
    <div className="my-24 min-h-screen">
      <section>
        <div className="text-center  flex flex-col gap-5 mb-20">
          <h3 className={`${darkmode?"text-white":"text-black"} text-3xl py-1 `}>About</h3>
          <p
            className={`${
              darkmode ? "text-gray-300" : "text-gray-950"
            } text-lg md:text-lg leading-10 flex flex-col gap-4`}
          >
            <span
              data-aos="fade-up" // AOS animation effect
              data-aos-duration="1000" // Animation duration in milliseconds
            >
              Hello! My name is Ilonze Chibuikem, and I'm a student at the
              University of Nigeria, Nsukka, studying electronic engineering.
            </span>
            <span data-aos="fade-up" // AOS animation effect
              data-aos-duration="1500">

            My experience in the engineering field has given me strong
            problem-solving abilities and a keen understanding of the potential
            of technology. I have a wide range of interests outside of the
            classroom that keep me active and imaginative. I love football, and
            when I'm not playing, you can find me engrossed in the realm of
            coding, where I'm particularly skilled at creating user-friendly
            websites. 
            </span>
            
            <span data-aos="slide-up" // AOS animation effect
              data-aos-duration="2000">
            I firmly believe in the power of creativity and simplicity
            as a frontend developer. Every website I create has the chance to be
            innovative and useful. Delivering websites that are both simple to
            use and visually appealing is something I'm proud of.
            </span>
          </p>
        </div>
 
      </section>
    </div>
  );
};

export default About;
