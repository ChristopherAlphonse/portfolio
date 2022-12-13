import { LazyMotion, domAnimation, m } from "framer-motion";

import { DownBtn } from "./compIndex";
import React from "react";
import { fadeIn } from "../FramerVariant/variants";

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section
        id="section1"
        className="h-[100vh] containerr flex items-center  dark:bg-zinc-50 bg-zinc-900 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
      >
        <div className="container mx-auto h-full">
          <div className="flex items-center h-full pt-8">
            <div className="flex-1 flex flex-col items-center lg:items-center">
              <m.p
                variants={fadeIn("right")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-lg text-accent text-md mb-[22px] dark:text-blue-600"
              >
                Hey, I'm Chris 👋
              </m.p>
              <m.h1
                variants={fadeIn("left")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="text-4xl  dark:text-zinc-900 leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]"
              >
                I Build & Design <br /> Web Applications.
              </m.h1>
              <m.p
                variants={fadeIn("right")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-3xl text-lg text-center lg:text-left dark:text-zinc-900"
              >
                I'm a Full-Stack software engineer who specializes in designing
                and building amazing digital experiences. At the moment, I'm
                concentrating on learning new technologies and improving
                human-centered services.
              </m.p>
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
    </LazyMotion>
  );
};

export default Hero;
