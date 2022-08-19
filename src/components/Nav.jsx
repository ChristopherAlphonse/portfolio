// import Link
import { Link } from "react-scroll";
import React from "react";
import file from "../../src/assets/img/LOGO.png";
// import navigation data
import { navigation } from "../data";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, idx) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer "
              key={idx}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={100}
                offset={100}
                className="transition-all duration-300 "
              >
                {item.name}
              </Link>
            </li>
          );
        })}
        <button>
          <a href={file} download={file} className="hover:active target ">
            Download Resume
          </a>
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
