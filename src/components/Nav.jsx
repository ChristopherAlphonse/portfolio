
import React from "react";
import file from "../../src/assets/img/Christopher resume.docx.pdf";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        <button>
          <a href={file} download={file} className="hover:active target ">
            Download Resume
          </a>
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
