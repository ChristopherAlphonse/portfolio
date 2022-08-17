import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SocialIcons } from "./components/CompIndex";
import { Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

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
      backgroundColor: "#0000FF",
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
        <title>Christopher Alphonse | Web Developer | Software Engineer</title>
        <link rel="canonical" href="/404" />
        <meta
          property="og:title"
          content="Christopher Alphonse software/web developer"
        />
        <meta
          name="description"
          property="og:description"
          content="Christopher Alphonse specialize in JavaScript libraries and framework "
        />
        <meta
          name="image"
          property="og:image"
          content="author image"
          href="%SRC_URL%/assets/images/Author.jpg"
        />
      </Helmet>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-zinc-300 cursor-none">
        <SocialIcons />
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-[10rem] md:text-[30rem] font-extrabold text-white tracking-widest pointer-events-none "
        >
          404
        </h1>
        <div className="copy-container center-xy cursor-pointer relative top-[11rem] right-5">
          <button className="cursor-pointer px-6 py-2 bg-gray-200/50 hover:bg-gray-200">
            <Link to="/"> Return Home </Link>
          </button>
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
