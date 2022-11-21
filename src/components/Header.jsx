import { Disclosure } from "@headlessui/react";

import { GrClose, GrMenu } from "react-icons/gr";


import Logo from "../assets/img/png/logo-no-background.png";

import React, { useEffect, useState, lazy } from "react";

const Theme = lazy(() => import("../comp/ThemeToggle"));

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1CsOt5QC-eNyWjDZ0MpDCNhyuMW7LRea9/view?usp=sharing",
    current: false,
  },
  {
    name: "Cert",
    href: "https://drive.google.com/file/d/1k1qrYWQeJOyMB743MuDphaMmcZG5hTlR/view?usp=sharing",
    current: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/ChristopherAlphonse",
    current: false,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/christopher-alphonse-834989161/",
    current: false,
  },
  {
    name: "My Theme",
    href: "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme&ssr=false#overview",
    current: false,
  },
  {
    name: "My PWSH Settings",
    href: "https://github.com/ChristopherAlphonse/Powershell",
    current: false,
  },
  {
    name: "Recommended",
    href: "https://github.com/builtbybel/privatezilla",
    current: false,
  },
  {
    name: <Theme />,
    href: null,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  const Reload = () => {
    window.location.reload();
  };

  return (
    <Disclosure
      as="nav"
      className={`${
        bg ? "bg-tertiary dark:bg-slate-100 shadow-md h-20 " : "h-24 "
      }  fixed top-0 w-full dark:text-black text-white  z-10 transition-all duration-300 `}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 justify-evenly lg:flex">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <GrClose
                      className="block h-6 w-6 animate-pulse  opacity-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <GrMenu
                      className="block h-6 w-6 animate-pulse opacity-5"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch justify-evenly ">
                <div className="img-change cursor-pointer " onClick={Reload}>
                  <a href="/">
                    <img
                      src={Logo}
                      alt="logo"
                      width="60px"
                      height="60px"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className=" flex-shrink-0  flex  items-center justify-center"></div>

                <div className="hidden sm:ml-6 sm:block mt-2">
                  <div className="flex space-x-4 font-[600]">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-800"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white dark:text-gray-800 dark:hover:bg-gray-100 dark:hover:text-black",
                          " rounded-md text-sm font-900"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div className="space-y-1 px-2 pt-2 pb-3 bg-tertiary shadow-gray-100">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white "
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
