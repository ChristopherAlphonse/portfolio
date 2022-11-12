/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";

import { BsArrowUp } from "react-icons/bs";

const BackTopBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 1000 ? setShow(true) : setShow(false);
    });
  });

  {
    return (
      show && (
        <a
          href="#section1"
          className="bg-none md:block  text-white w-6 h-6 rounded-full fixed right-5 bottom-24 cursor-pointer flex justify-end items-center transition-all shadow-orange-50"
        >
          <BsArrowUp className="w-6 h-6 text-blue-300" />
        </a>
      )
    );
  }
};

export default BackTopBtn;
