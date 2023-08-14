import React from "react";

const Resume = () => {
  return (
    <li>
      <a className="button dark:text-white group  rounded-md ml-8 animate-pulse hover:animate-none">
        <svg>
          <rect
            className="dark:stroke-white group-hover:stroke-green-400"
            x="0"
            y="0"
            fill="none"
            width="100%"
            height="100%"
          />
        </svg>
        Resume
      </a>
    </li>
  );
};

export default Resume;
