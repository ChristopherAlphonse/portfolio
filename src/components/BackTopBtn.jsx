/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";

import { FaChevronUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 1000 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
      show && (
        <button
          onClick={() => scrollToTop()}
          className="bg-none md:block  text-white w-9 h-9 rounded-full fixed right-24 bottom-24 cursor-pointer flex justify-center items-center transition-all"
        >
          <FaChevronUp className="w-6 h-6 text-blue-300" />
        </button>
      )
    );
  }
};

export default BackTopBtn;
