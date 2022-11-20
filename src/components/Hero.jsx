import React from "react";
import DownBtn from "./DownBtn";

const Hero = () => {
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
    <section
      id="section1"
      className="h-[100vh] containerr flex items-center bg-zinc-800 dark:bg-slate-200 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-center">
            <h1
              className=" 
              
              bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 italic
              
              
              text-5xl leading-[50px] md:text-5xl text-center md:leading-tight lg:text-8xl xl:text-9xl lg:leading-[1.2] font-bold md:tracking-[-2px] title-heading cursor-pointer dark:text-"
            >
              Christopher Alphonse
            </h1>
            <p className="pt-3 pb-7 md:pt-5 md:pb-11 title-para text-md text-center  dark:text-zinc-900 ">
              Software Engineer based in Boston, Massachusetts, and I'm
              extremely passionate about building computers, and developing
              web/desktop facing applications .
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
