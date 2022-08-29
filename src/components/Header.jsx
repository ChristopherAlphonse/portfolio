import { BackTopBtn, Nav, NavMobile, SocialIcons, SoundBar } from "./CompIndex";
import React, { useEffect, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../assets/img/LOGO.png";

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
          <LazyLoadImage alt="logo" height="200" width="200" src={Logo} />
        </div>

        <div className="hidden lg:block">
          <Nav />
          <SoundBar />
          <SocialIcons />
          <BackTopBtn />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
