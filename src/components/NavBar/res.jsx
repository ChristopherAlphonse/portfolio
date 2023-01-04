import PDF from "../../assets/resume.pdf";
import React from "react";

export const Test = () => {
  return (
    <button
      className='uppercase  tracking-widest '
      onClick={() => {
        window.open(PDF, "_blank");
        alert("i was clicked");
      }}>
      Resume
    </button>
  );
};
