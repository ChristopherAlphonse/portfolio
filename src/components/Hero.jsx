import React from "react";
import { DownBtn } from "./compIndex";

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
              
              bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 italic  dark:from-blue-600 dark:to-blue-300 
              
              
              text-5xl leading-[50px] md:text-5xl text-center md:leading-tight lg:text-8xl xl:text-9xl lg:leading-[1.2] font-bold md:tracking-[-2px] title-heading cursor-pointer dark:text-"
            >
              Christopher Alphonse
            </h1>
            <p className="pt-3 pb-7 md:pt-5 md:pb-11 title-para text-md text-center font-[500] dark:text-zinc-900 md:text-lg lg-text-xl">
              Full Stack Developer and PC enthusiast. I want to focus on writing
              clean, efficient code, and user friendly UI/UX experiences
            </p>

            <a
              onClick={onButtonClick}
              type="button"
              className="inline-flex items-center font-extrabold text-sm md:text-md lg:text-xl md:px-8 md:py-2 cursor-cell py-2.5 px-4 mr-2 mb-2 focus:outline-none
              
              
               bg-blue-400/50 text-gray-50 rounded-lg   hover:bg-blue-400/60 hover:text-gray-300 
              
              
               dark:bg-blue-500/70 dark:text-gray-50    dark:hover:bg-blue-500/60 dark:hover:text-gray-200 
               
             
               "
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
