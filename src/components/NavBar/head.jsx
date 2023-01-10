import React, { useEffect, useState } from "react";

import { Logo } from "../../assets";
import Theme from "../../Theme/ThemeIndex";

const navigation = [
  {
    name: "Resume",
    key: 1,
    href: "/resume",
  },
  {
    key: 2,
    name: "GitHub",
    href: "https://github.com/ChristopherAlphonse",
  },
  {
    key: 3,
    name: "linkedin",
    href: "https://www.linkedin.com/in/christopher-alphonse",
  },
  {
    key: 4,
    name: <Theme />,
    href: null,
  },
];

export function ResponsiveNavBar() {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => (window.scrollY > 10 ? setBg(true) : setBg(false)));
  });
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className={`${
        bg ? "h-20  bg-zinc-900 shadow-md shadow-blue-900/40 dark:bg-zinc-100 " : "h-24 "
      }  fixed top-0 z-10 w-full  text-white   transition-all duration-300 dark:text-zinc-700 `}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        className="bg-zinc-900/90  dark:bg-zinc-100/90
      "
      >
        {menuOpen && <MobileMenu>{navLinks}</MobileMenu>}
      </div>
    </div>
  );
}
const navLinks = navigation.map((page) => (
  <a
    key={page.key}
    child-src="true"
    target="_blank"
    rel="noopener noreferrer"
    className="text-accent
     font-semibold no-underline
     hover:text-zinc-100
    dark:text-zinc-800
     dark:hover:text-blue-600"
    href={page.href}
  >
    {page.name}
  </a>
));

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <a href="/" className="p-0">
          <FireSvg />
        </a>
      </div>
      <nav className="hidden space-x-6 md:block">{navLinks}</nav>
      <button
        type="button"
        aria-label="Toggle mobile menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="animate-pulse rounded  md:hidden"
      >
        <MenuAlt4Svg menuOpen={menuOpen} />
      </button>
    </div>
  );
}
function MobileMenu({ children }) {
  return <nav className="flex flex-col space-y-3 p-4 md:hidden ">{children}</nav>;
}
function FireSvg() {
  return <img src={Logo} height={40} width={40} alt="logo" />;
}

function MenuAlt4Svg({ menuOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`ease h-8 w-8 transition duration-100 ${menuOpen ? "rotate-90 transform" : ""}`}
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
}
