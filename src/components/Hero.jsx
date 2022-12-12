import { DownBtn } from "./compIndex";
import React from "react";

const Hero = () => {
  return (
    <section
      id="section1"
      className="h-[100vh] containerr flex items-center  dark:bg-zinc-50 bg-zinc-900 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-center">
            <p className="text-lg text-accent text-md mb-[22px] dark:text-blue-600">
              Hey, I'm Chris 👋
            </p>
            <h1 className="text-4xl  dark:text-zinc-900 leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Build & Design <br /> Web Applications.
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-3xl text-lg text-center lg:text-left dark:text-zinc-900">
              I'm a Full-Stack software engineer who specializes in designing
              and building amazing digital experiences. At the moment, I'm
              concentrating on learning new technologies and improving
              human-centered services.
            </p>
            <button
              className="btn btn-md bg-blue-600  hover:bg-blue-600/50
            dark:bg-blue-700 dark:hover:bg-blue-700/70
            
            md:btn-lg transition-all "
            >
              <a href="#contact"> Work with me</a>
            </button>
          </div>
        </div>
        <DownBtn />
      </div>
    </section>
  );
};

export default Hero;
