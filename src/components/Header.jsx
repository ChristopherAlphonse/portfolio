import { Nav } from "./CompIndex";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const ButtonCover = () => {
    fetch("cover.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "cover.pdf";
        alink.click();
      });
    });
  };

  const ButtonResume = () => {
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <div
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <h1 className="text-xl md:text-[20px]">{"< CHRIS />"}</h1>
        <nav>
          <section className=" flex lg:hidden">
            <div
              className=" space-y-2 transition-all duration-300"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-500"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-500"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-500"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8 transition-all duration-300"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px]">
                <li className="my-8 uppercase">
                  <div
                    onClick={ButtonResume}
                    className="hover:active  cursor-cell text-xl hovertext"
                    data-hover="download my resume :)"
                  >
                    Resume
                  </div>
                </li>
                <li className="my-8 uppercase ">
                  <div
                    onClick={ButtonCover}
                    className="hover:active  cursor-cell text-xl hovertext"
                    data-hover="download my Full-Stack MERN certificate"
                  >
                    BootCamp Certificate
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex ">
            <li>
              <a
                className="hovertext"
                href="/Download Resume"
                data-hover="download my resume :)"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="hovertext"
                href="/Download  Cert "
                data-hover="download my Full-Stack MERN certificate"
              >
                Cert
              </a>
            </li>
          </ul>
        </nav>
        <style>{`
  .hideMenuNav {
    display: none;
  }
  .showMenuNav {



    transition: ease-in-out duration-300;

    display: block;
    position: absolute;
    width: 60%;
    height: 100vh;
    top: 0;
  right: 0;
  	background-color: rgb(31 41 55);
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`}</style>
      </div>
    </div>
  );
};

export default Header;
