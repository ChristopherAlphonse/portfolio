import { LazyMotion, domAnimation, m } from "framer-motion";

import React from "react";
import { projectsData } from "../../Data/data";
import { transition } from "../../FramerVariant/variants";

function Projects() {
  return (
    <LazyMotion features={domAnimation}>
      <div className=" bg-zinc-900 py-9 dark:bg-zinc-50 ">
        <div className=" mb-9 ">
          <h1 className=" text-center text-3xl text-zinc-400 dark:text-zinc-800 md:text-5xl">
            Others
          </h1>

          <m.div
            variants={transition("right")}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="flex flex-wrap items-center justify-center text-center md:flex-nowrap"
          >
            {projectsData.map((project) => {
              const { id, name, description, short } = project;
              return (
                <ul key={id}>
                  <li className=" p-4">
                    <div className=" xs:h-screen relative overflow-hidden rounded-lg bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 text-center shadow-xl dark:bg-gray-300  xl:h-80 xl:max-h-80">
                      <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-500 dark:text-gray-700">
                        {short}
                      </h2>
                      <h1 className="title-font mb-3 text-xl font-medium dark:text-zinc-800 sm:text-2xl">
                        {name}
                      </h1>
                      <p className="mb-3 leading-relaxed dark:text-zinc-700">{description}</p>
                      <a
                        href={`/projects/${id}`}
                        className="inline-flex items-center text-blue-500 hover:text-blue-400 "
                      >
                        Learn More
                        <svg
                          className="ml-2 h-4 w-4 "
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              );
            })}
          </m.div>
          <div className="flex justify-center ">
            <button
              disabled
              className="cursor-b cursor-not-allowed "
              aria-label="Work in progress, come back at a later time"
            >
              <p
                // href="/projects"
                className=" text-md ml-7 flex cursor-not-allowed items-center  justify-center rounded-3xl px-6 py-3 text-center text-sm text-gray-50 hover:text-zinc-300 dark:hover:text-zinc-500 sm:px-6 sm:py-1"
              >
                {" "}
                Show More
              </p>
            </button>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
export default Projects;
