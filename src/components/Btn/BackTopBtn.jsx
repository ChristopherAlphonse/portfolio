/* eslint-disable no-lone-blocks */

import React, {useEffect, useState} from "react";

import {BsArrowUp} from "react-icons/bs";

function BackTopBtn() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => (window.scrollY > 1000 ? setShow(true) : setShow(false)));
  });
  {
    return (
      show && (
        <a
          href="#section1"
          className="fixed right-5  bottom-24 flex h-6 w-6 cursor-pointer items-center justify-end rounded-full bg-none text-white shadow-orange-50 transition-all md:block"
        >
          <BsArrowUp className="h-6 w-6 text-blue-300" />
        </a>
      )
    );
  }
}
export default BackTopBtn;
