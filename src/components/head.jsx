import { Logo, Resume } from "../../src/assets";
import React, { lazy, useEffect, useState } from "react";

const Theme = lazy(() => import("../comp/ThemeToggle"));

const navigation = [
  {
    name: "Resume",
    href: `${Resume}`,
  },
  {
    name: "Cert",
    href: "https://drive.google.com/file/d/1k1qrYWQeJOyMB743MuDphaMmcZG5hTlR/view?usp=sharing",
  },
  {
    name: "GitHub",
    href: "https://github.com/ChristopherAlphonse",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/christopher-alphonse",
  },
  {
    name: <Theme />,
    href: null,
  },
];

export const ResponsiveNavBar = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 10 ? setBg(true) : setBg(false);
    });
  });
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className={`${
        bg ? "bg-tertiary dark:bg-zinc-100 shadow-md h-20 " : "h-24 "
      }  fixed top-0 w-full dark:text-black text-white  z-10 transition-all duration-300 `}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        className="bg-zinc-900/90  dark:bg-zinc-900/50
      
      
      
      
      
      
      "
      >
        {menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
      </div>
    </div>
  );
};

const navLinks = navigation.map((page) => (
  <a
    key={page.name}
    className="no-underline text-zinc-200 font-semibold hover:text-zinc-200/50  
    
    
    
    dark:text-zinc-800 dark:hover:text-zinc-800/50"
    href={page.href}
  >
    {page.name}
  </a>
));

const Navbar = ({ menuOpen, setMenuOpen }) => (
  <div className="flex items-center justify-between p-4">
    <div className="flex items-center">
      <FireSvg />
    </div>
    <nav className="hidden md:block space-x-6">{navLinks}</nav>
    <button
      type="button"
      aria-label="Toggle mobile menu"
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded md:hidden  animate-pulse"
    >
      <MenuAlt4Svg menuOpen={menuOpen} />
    </button>
  </div>
);

const MobileMenu = ({ children }) => (
  <nav className="p-4 flex flex-col space-y-3 md:hidden ">{children}</nav>
);

const FireSvg = () => <img src={Logo} alt="logo" className="h-12 w-12 " />;

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`transition duration-100 ease h-8 w-8 ${
      menuOpen ? "transform rotate-90" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);
