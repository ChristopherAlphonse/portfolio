import React from "react";
import DownBtn from "./DownBtn";

const Hero = () => {
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
    <section
      id="home"
      className="h-[100vh] containerr flex items-center bg-zinc-800 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-center">
            <h1
              className=" 
              
              bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 italic
              
              
              text-5xl leading-[50px] md:text-5xl text-center md:leading-tight lg:text-8xl xl:text-9xl lg:leading-[1.2] font-bold md:tracking-[-2px] title-heading"
            >
              Christopher Alphonse
            </h1>
            <p className="pt-3 pb-7 md:pt-5 md:pb-11 title-para text-md text-center  ">
              Software Engineer based in Boston, Massachusets, and I'm extremely
              passionate about building computers, and developing web/desktop
              facing applications .
            </p>

            <a
              onClick={onButtonClick}
              className="hover:active target px-9 lg:hidden cursor-cell"
            >
              Download Resume
            </a>

            <DownBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
