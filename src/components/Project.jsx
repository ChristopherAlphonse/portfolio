import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeIn, transition } from "../FramerVariant/variants";

import React from "react";

const logoProps = {
  height: 96,
  width: 96,
};

const Project = ({ project }) => {
  const { id, image, description, stack, view, name } = project;

  return (
    <LazyMotion features={domAnimation}>
      <div className="ye">
        <div className="  p-1 shadow-xl mt-8 md:mt-16 md:grid-cols-2  rounded-lg  text-white dark:text-black  xl:grid-cols-3 bg-zinc-900/70 dark:bg-zinc-300 drop-shadow-9xl xl:hover:scale-110 transition duration-300 ease-in-out ">
          <div className="text-center bg-zinc-900 dark:bg-zinc-200">
            <div className="relative ">
              <div>
                <m.img
                  variants={transition("right")}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className=" block object-cover object-center w-full h-full rounded-lg  hover:scale-44 ease-in duration-500"
                  alt={id}
                  src={image}
                  loading="lazy"
                  {...logoProps}
                />
              </div>

              <div
                className="absolute bottom-0 flex p-1  bg-gray-900 dark dark:bg-slate-50 
           "
              >
                <m.div
                  variants={transition("left")}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.6 }}
                  className="mx-6"
                >
                  {stack}
                </m.div>
              </div>
            </div>
            <m.h1
              variants={transition("up")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="mt-6 text-xl font-semibold text-white dark:text-black "
            >
              {name}
            </m.h1>
            <m.p
              variants={transition("down")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="max-w-2xl mb-6 text-md font-bold text-slate-300 dark:text-slate-900   "
            >
              {description}
            </m.p>

            <div className="container flex flex-col items-center justify-center px-4 py-6 mx-auto xl:flex-row ">
              <m.div
                variants={fadeIn("up")}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="mt-6 sm:-mx-2"
              >
                <a
                  href={view}
                  className="inline-flex  justify-center w-full px-5 py-3 mt-4 overflow-hidden  transition-colors duration-300  rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 border-2
                  hover:bg-blue-600/50  dark:hover:bg-blue-600
                  border-blue-600/50 
                  
                  text-zinc-100 dark:text-zinc-900 dark:hover:text-zinc-100 
                  
                  "
                >
                  <span className="mx-2 ">Visit</span>
                </a>

                <a
                  href={`/project/${id}`}
                  className="inline-flex  justify-center w-full px-5 py-3 mt-4 overflow-hidden  transition-colors duration-300  rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0
                  border-2 text-zinc-100 dark:hover:text-zinc-900 
bg-blue-600
hover:bg-zinc-900
 hover:border-blue-600/50
 border-blue-600/50

dark:hover:bg-zinc-100/50

                     "
                >
                  <span className="mx-2  ">Learn More</span>
                </a>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Project;
