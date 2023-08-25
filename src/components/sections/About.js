import React from "react";
import Image from "next/image";
import Testimonial from "@/components/specific/testimonial";
import design from "../../../public/design.png";
import code from "../../../public/code.png";
import consulting from "../../../public/design.png";
import Lorem50 from "@/components/specific/Lorem50";
const About = () => {
  return (
    <div>
      {" "}
      <section>
        <div className="text-center pt-10">
          <h3 className="text-3xl py-1  dark:text-white ">Services I offer</h3>
          <Lorem50 />
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={design} width={100} height={100} className=" mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <Testimonial />
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image
              src={consulting}
              width={100}
              height={100}
              className=" mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <Testimonial />
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={code} width={100} height={100} className=" mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <Testimonial />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
