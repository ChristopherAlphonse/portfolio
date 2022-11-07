import React from "react";

const Nav = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        <button>
          <a
            onClick={onButtonClick}
            className="hover:active target cursor-cell "
          >
            Download Resume
          </a>
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
