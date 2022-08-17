import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, Twitter, Linkedin } from "./AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: transparent;
`;

const SocialIcons = () => {
  return (
    <Icons className="hidden md:block ">
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.linkedin.com/in/christopher-alphonse/" }}
        >
          <Linkedin
            width={25}
            height={25}
            fill="#000000"
            className="hidden md:block hover:accent-amber-500 "
          />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/ChristopherAlphonse" }}
        >
          <Github
            width={25}
            height={25}
            fill="#000000"
            className="hidden md:block "
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://twitter.com/trackoalphonse" }}
        >
          <Twitter
            width={25}
            height={25}
            fill="#000000"
            className="hidden md:block "
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      ></motion.div>

      <Line
        className="hidden md:block text-cyan-400"
        initial={{
          height: 1,
        }}
        animate={{
          height: "19rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
