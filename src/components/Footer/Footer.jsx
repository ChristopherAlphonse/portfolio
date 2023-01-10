import { AiFillCodepenCircle, AiFillGithub, AiFillLinkedin, AiFillWindows } from "react-icons/ai";

import React from "react";

const github = "https://github.com/ChristopherAlphonse";
const msStore =
  "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme";
const linkedin = "https://www.linkedin.com/in/christopher-alphonse/";
const codepen = "https://codepen.io/christopheralphonse/";
function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer
      id="section2"
      className="bg-tertiary flex flex-col items-center justify-between  p-6 text-zinc-500 dark:bg-gray-200 dark:text-zinc-700
      sm:flex-row md:h-[10vh]
       "
    >
      <div className="grid-flow-col items-center">
        <p>Copyright © 2022 - {year} - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-6 md:place-self-center  md:justify-self-end">
        <a href={github} target="_blank" className="hover:text-zinc-100  " rel="noreferrer">
          <AiFillGithub size="20" />
        </a>
        <a href={codepen} target="_blank" className="hover:text-zinc-100   " rel="noreferrer">
          <AiFillCodepenCircle size="20" />
        </a>
        <a href={linkedin} target="_blank" className="hover:text-zinc-100   " rel="noreferrer">
          <AiFillLinkedin size="20" />
        </a>
        <a href={msStore} target="_blank" className="hover:text-zinc-100  " rel="noreferrer">
          <AiFillWindows size="20" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
