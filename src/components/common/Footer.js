import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="w-screen h-44 p-10 text-center dark:bg-gray-950 dark:text-white ">
      {" "}
      <p className="mb-5">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
        nihil voluptatibus. Itaque, perferendis quod eius labore sapiente optio!
        Hic cumque illum qui tempore, nam nisi corrupti aperiam eligendi
        deserunt ad distinctio veritatis magnam culpa dolore provident vel
        numquam quam itaque? Veritatis voluptas perferendis modi necessitatibus
        inventore dolores molestiae cupiditate dicta?
      </p>
      <p >Copyright @ <span className="font-bold">{date}</span></p>
    </div>
  );
};

export default Footer;
