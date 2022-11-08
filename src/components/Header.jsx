import { BackTopBtn, Nav } from "./CompIndex";
import React, { useEffect, useState } from "react";
import log from "../assets/img/logo.webp";

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
        <h1 className="text-xl md:text-[20px]">{"< CHRIS />"}</h1>
        {/* <img src={log} alt="logo" className="w-8 lg:w-16 rounded-full" /> */}

        <div className="hidden lg:block">
          <Nav />

          <BackTopBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
