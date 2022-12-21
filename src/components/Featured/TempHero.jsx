import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeIn, transition } from "../../FramerVariant/variants";

import React from "react";

const TempHero = ({ featured }) => {
  const { id, image, description, stack, view, name } = featured;
  console.log(featured);
  return (
    <LazyMotion features={domAnimation}>
      <div>
        <p className=" mx-3 mb-5 flex justify-center py-2  text-zinc-800 dark:text-zinc-50  lg:justify-end lg:bg-transparent">
          NextJS, TypeScript, Rust, Node, TauriJS
        </p>
        <section className="body-font text-gray-600">
          <div className="container mx-auto">
            <div className="-mx-4 -mb-10 flex flex-wrap text-center">
              <div className="mb-10 px-4 sm:w-1/2">
                <div className="mb-9 text-7xl uppercase sm:text-5xl">
                  Project 001
                </div>
                <div className="title-font text-md mt-6 mb-5 flex items-center bg-gray-900 p-5  text-zinc-100 shadow-2xl dark:bg-zinc-100 dark:text-zinc-800 lg:text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Atque quisquam, itaque, dolore earum doloremque aperiam alias
                  sapiente sunt modi illo commodi incidunt quae ipsa! Illum fuga
                  quidem perspiciatis eaque odit!
                </div>
                <div className="ml-1 flex justify-center lg:mb-10">
                  <button className="bb  md:text-md inline-flex rounded-3xl text-sm text-zinc-800 hover:text-white dark:text-zinc-50">
                    VIEW
                  </button>
                  <button className="text-md ml-7 inline-flex rounded-3xl py-2 px-6 text-sm text-gray-50 hover:text-zinc-800 dark:hover:text-zinc-50">
                    LEARN MORE
                  </button>
                </div>
              </div>
              <div className="ye mb-10 px-9 pb-9 sm:w-1/2">
                <div className="h-70">
                  <img
                    alt="content"
                    className="object-fit object-center"
                    src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LazyMotion>
  );
};
export default TempHero;
