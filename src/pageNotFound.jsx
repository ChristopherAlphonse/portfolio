import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { SocialIcons } from "./components/CompIndex";
import { motion } from "framer-motion";

const PageNotFound = () => {
  const [mousePos, setMousePos] = useState({
    x: 5,
    y: 5,
  });
  // console.log(mousePos);

  const [cursorVar, setCursorVar] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 1,
      y: mousePos.y - 1,
      backgroundColor: "#1684A3",
      mixBlendMode: "difference",
    },
    text: {
      height: 150,
      width: 150,
    },
  };
  const textEnter = () => setCursorVar("text");
  const textLeave = () => setCursorVar("default");

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Christopher Alphonse | 404 </title>
        <link rel="canonical" href="/404" />
      </Helmet>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-zinc-900 cursor-none">
        <SocialIcons />
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-[10rem] md:text-[30rem] font-extrabold text-white tracking-widest pointer-events-none "
        >
          404
        </h1>
        <div className="copy-container center-xy cursor-pointer relative top-[10rem] right-1">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600/50 hover:text-blue-600/75"
          >
            return home
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </Link>
        </div>
        <motion.div
          variants={variants}
          animate={cursorVar}
          className="bg-[#111] h-[32px] w-[32px] rounded-full fixed top-0 left-0 "
        ></motion.div>
      </div>
    </HelmetProvider>
  );
};

export default PageNotFound;
