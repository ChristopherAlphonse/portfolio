import React from "react";

const github = "https://github.com/ChristopherAlphonse";
const msStore =
  "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme";
const linkedin = "https://www.linkedin.com/in/christopher-alphonse/";
const codepen = "https://codepen.io/christopheralphonse/";

import {
  AiFillGithub,
  AiFillCodepenCircle,
  AiFillLinkedin,
  AiFillWindows,
} from "react-icons/ai";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer
      id="section2"
      className="flex flex-col items-center justify-between p-6  sm:flex-row md:h-[10vh] bg-tertiary dark:bg-gray-200
      
      
      text-slate-500 dark:text-slate-700
       "
    >
      <div className="items-center grid-flow-col">
        <p>Copyright © 2022 - {year} - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-6 md:place-self-center  md:justify-self-end">
        <a href={github} target="_blank" className="hover:text-slate-400  ">
          <AiFillGithub />
        </a>
        <a href={codepen} target="_blank" className="hover:text-slate-400  ">
          <AiFillCodepenCircle />
        </a>
        <a href={linkedin} target="_blank" className="hover:text-slate-400  ">
          <AiFillLinkedin />
        </a>
        <a href={msStore} target="_blank" className="hover:text-slate-400 ">
          <AiFillWindows />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
