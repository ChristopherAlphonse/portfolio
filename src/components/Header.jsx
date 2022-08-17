import React, { useEffect, useState } from "react";

import NavMobile from "./NavMobile";
import { SoundBar } from "./CompIndex";
import Logo from "../assets/img/LOGO.png";
import Nav from "./Nav";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="shi">
          <img src={Logo} alt="logo" width="200" height="200" />
        </div>
        <SoundBar />
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
