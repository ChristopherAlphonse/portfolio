import { DownBtn } from "./compIndex";
import React from "react";
import { ResponsiveNavBar } from "./head";

const Hero = () => {
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
              
              
              text-[46px] leading-[50px] md:text-[60px] text-center md:leading-tight lg:text-8xl xl:text-9xl lg:leading-[1.2] font-bold md:tracking-[-2px] title-heading cursor-pointer dark:text-"
            >
              Christopher Alphonse
            </h1>
            <p className="text-[14px] lg-text[40px]  pb-7 md:pt-5 md:pb-11 title-para text-md text-center font-[500] dark:text-zinc-900 md:text-lg lg-text-xl">
              Full Stack Developer, Software Engineer, Front end & App
              Developer.
            </p>

            <DownBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
