import React from "react";
import Image from "next/image";

import web1 from "../../../public/web1.png";
import web2 from "../../../public/web2.png";
import web3 from "../../../public/web3.png";
import web4 from "../../../public/web4.png";
import web5 from "../../../public/web5.png";
import web6 from "../../../public/web6.png";

import Lorem50 from "@/components/specific/Lorem50";

const Portfolio = () => {
  return (
    <div>
      {" "}
      <section>
        <div className="text-center mt-10">
          <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          <Lorem50 />
        </div>
        <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image
              src={web1}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web2}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web3}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web4}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web5}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web6}
              className="rounded-lg object-cover "
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
