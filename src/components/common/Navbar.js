import { BsFillMoonStarsFill } from "react-icons/bs";
import Resume from "../specific/Resume";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-10 mb-12 flex flex-col ">
      <div className="flex flex-row justify-between">
        {" "}
        <h1 className=" text-3xl font-bold bg-clip-text text-gray-700  font-burtons dark:text-white mr-6 ">
          BMJ
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-white animate-pulse hover:animate-none"
            />
          </li>
          <Resume />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
