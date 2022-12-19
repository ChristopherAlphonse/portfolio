import React, { useEffect, useState } from "react";

import { BsArrowDown } from "react-icons/bs";

const BackBottomBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY < 1000 ? setShow(true) : setShow(false);
    });
  });

  {
    return (
      show && (
        <a
          href="#section2"
          className="fixed right-5  bottom-24 flex h-6 w-6 cursor-pointer items-center justify-end rounded-full bg-none text-white shadow-orange-50 transition-all md:block"
        >
          <BsArrowDown className="h-6 w-6 text-blue-300" />
        </a>
      )
    );
  }
};

export default BackBottomBtn;
