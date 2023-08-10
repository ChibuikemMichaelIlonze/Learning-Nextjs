import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/design.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Chibuikem</title>
        <meta name="description" content="ggggg" />
        <link
          rel="preload"
          href="/public/Burtons.otf"
          as="font"
          type="font/otf"
          crossorigin="anonymous"
        />
      </Head>
      <main className="bg-white px-10 text-black md:px-20 lg:px-40 dark:bg-gray-950">
        <section className=" min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500  font-burtons dark:text-white mr-6 ">
              BikeManJames
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Ilonze Chibuikem
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Designer
            </h3>
            <p className="text-medium py-5 leading text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              alias officia consectetur aliquam ex sint, voluptatum dicta
              suscipit nobis in?
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1  dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aperiam eius alias libero a quis veniam iure. Ea pariatur cum qui
              corporis <span className="text-teal-500">repellat</span> adipisci
              excepturi voluptas, eligendi labore inventore a ex ipsa maiores.
              Consequatur consequuntur, ex cum delectus, distinctio aliquid nam
              nulla eveniet quibusdam obcaecati soluta aut! Itaque optio
              possimus explicabo cumque rerum ullam aperiam facilis
              reprehenderit, laboriosam saepe.
            </p>{" "}
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aperiam eius alias libero a quis veniam iure. Ea pariatur cum qui
              corporis <span className="text-teal-500">repellat</span> adipisci
              excepturi voluptas, eligendi labore inventore a ex ipsa maiores.
              Consequatur consequuntur, ex cum delectus, distinctio aliquid nam
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400">
              <Image
                src={design}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque saepe similique veritatis ratione! Perspiciatis,
                dolores consectetur.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400">
              <Image
                src={consulting}
                width={100}
                height={100}
                className=" mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque saepe similique veritatis ratione! Perspiciatis,
                dolores consectetur.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400">
              <Image src={code} width={100} height={100} className=" mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque saepe similique veritatis ratione! Perspiciatis,
                dolores consectetur.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aperiam eius alias libero a quis veniam iure. Ea pariatur cum qui
              corporis <span className="text-teal-500">repellat</span> adipisci
              excepturi voluptas, eligendi labore inventore a ex ipsa maiores.
              Consequatur consequuntur, ex cum delectus, distinctio aliquid nam
              nulla eveniet quibusdam obcaecati soluta aut! Itaque optio
              possimus explicabo cumque rerum ullam aperiam facilis
              reprehenderit, laboriosam saepe.
            </p>{" "}
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aperiam eius alias libero a quis veniam iure. Ea pariatur cum qui
              corporis <span className="text-teal-500">repellat</span> adipisci
              excepturi voluptas, eligendi labore inventore a ex ipsa maiores.
              Consequatur consequuntur, ex cum delectus, distinctio aliquid nam
            </p>
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
      </main>
    </div>
  );
}
