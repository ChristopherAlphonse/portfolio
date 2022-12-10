import { GrClose, GrMenu } from "react-icons/gr";
import React, { lazy, useEffect, useState } from "react";

import { Disclosure } from "@headlessui/react";
import { Resume } from "../../src/assets";

const Theme = lazy(() => import("../comp/ThemeToggle"));

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "Resume",
    href: `${Resume}`,
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
    href: "https://www.linkedin.com/in/christopher-alphonse",
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
      return window.scrollY > 10 ? setBg(true) : setBg(false);
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
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8  lg:flex justify-center">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md  text-gray-900  hover:text-white ">
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
              <div className="flex flex-1 items-center sm:items-stretch justify-center ">
                <div className="hidden sm:ml-6 sm:block mt-6">
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
            <div className="space-y-1  bg-tertiary shadow-gray-100">
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
                    "block  rounded-md text-base font-medium"
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