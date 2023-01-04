import { Link } from "react-router-dom";
import PDF from "./resume.pdf";
import React from "react";

export const Test = () => {
  return (
    <button
      className='uppercase  tracking-widest '
      onClick={() => {
        window.open(`${PDF}`);
      }}>
      Resume
    </button>
  );
};
