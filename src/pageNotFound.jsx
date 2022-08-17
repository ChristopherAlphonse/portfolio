import React from "react";
import "./404.css";
import { Link } from "react-router-dom";
import { SocialIcons } from "./components/CompIndex";

const PageNotFound = () => {
  return (
    <>
      <SocialIcons />
      <div className="containe ">
        <div className="copy-container center-xy">
          <div className="text-4xl  para md:text-[24rem] ">404 </div>
          <h1 className="span text-gray-500"> page not found......</h1>
        </div>
        <button className="hover:text-accent">
          <Link to="/"> Return Home</Link>
        </button>
      </div>
    </>
  );
};

export default PageNotFound;
