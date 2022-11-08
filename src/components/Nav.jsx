import React from "react";

const Nav = () => {
  const onButtonClick = () => {
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

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
