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

console.log(navigation);

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
      <a
        href="/"
        className="text-sm md:text-xl dark:text-black text-white  font-bold no-underline  hover:text-gray-600"
      >
        Chris Alphonse
      </a>
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

const FireSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
      clipRule="evenodd"
    />
  </svg>
);

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
