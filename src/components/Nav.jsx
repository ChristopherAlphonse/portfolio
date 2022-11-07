import React, { lazy } from "react";

const Resume = lazy(() => import("../assets/resume.docx.pdf"));

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        <button>
          <a href="/" download={Resume} className="hover:active target ">
            Download Resume
          </a>
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
