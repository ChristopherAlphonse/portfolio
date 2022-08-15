import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[100vh] containerr flex items-center bg-zinc-800 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-center">
            <h1 className=" text-5xl leading-[50px] md:text-5xl text-center md:leading-tight lg:text-8xl xl:text-9xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Christopher Alphonse
            </h1>
            <p className="pt-3 pb-7 md:pt-5 md:pb-11  text-md text-center  ">
              I'm a Software Engineer based in Boston, Massachusets, and i'm
              extremely passionate about building computers and making apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
