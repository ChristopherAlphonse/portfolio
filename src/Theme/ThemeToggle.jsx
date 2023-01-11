import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Toggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      // Switch to system preference
      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  };
  const icon =
    theme === "light" ? (
      <h1 className="inline-flex items-center font-body  uppercase tracking-widest  text-[#c69f26] hover:text-yellow-300">
        L I G H T
        <span>
          <BsFillSunFill size={20} color="#c69f26" className="ml-3" />
        </span>
      </h1>
    ) : (
      <h1 className="inline-flex items-center font-body uppercase tracking-widest  text-[#000080] hover:text-blue-800">
        D A R K
        <span>
          <BsFillMoonFill size={20} color="#000080" className="ml-3" />
        </span>
      </h1>
    );

  return (
    <div className="rounded-full transition duration-500 ease-in-out">
      <button type="button" onClick={changeTheme}>
        {icon}
      </button>
    </div>
  );
}
export default Toggle;
