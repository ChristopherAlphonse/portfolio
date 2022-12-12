import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import React from "react";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const icon =
    theme === "light" ? (
      <h1 className="inline-flex text-[#c69f26] hover:text-yellow-300  items-center">
        L I G H T
        <span>
          <BsFillSunFill size={20} color="#c69f26" className="ml-3" />
        </span>
      </h1>
    ) : (
      <h1 className="inline-flex text-[#000080] hover:text-blue-800 items-center">
        D A R K
        <span>
          <BsFillMoonFill size={20} color="#000080" className="ml-3" />
        </span>
      </h1>
    );

  return (
    <div className="transition duration-500 ease-in-out rounded-full">
      <button onClick={changeTheme}>{icon}</button>
    </div>
  );
};

export default Toggle;
