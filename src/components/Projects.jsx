import { LazyMotion, domAnimation, m } from "framer-motion";
import React, { useMemo, useState } from "react";
import { fadeIn, transition } from "../FramerVariant/variants";
import { projectsData, projectsNav } from "../data";

import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useMemo(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-[#27272af5] dark:bg-[#fffffff5] ">
        <div className="container mx-auto px-1 py-10 ">
          <div className="text-center">
            <m.h1
              variants={fadeIn("right")}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text font-primary text-5xl font-semibold  capitalize italic text-transparent  dark:from-blue-600 dark:to-blue-300  lg:text-4xl
            
              "
            >
              My latest work
            </m.h1>
          </div>

          <m.nav
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mx-auto mb-1 max-w-xl text-xl md:mt-4 md:rounded-full md:border md:border-gray-900 md:bg-gray-900  
          
          
          md:py-1 md:shadow dark:md:border-gray-200
        
        dark:md:bg-gray-200
        "
          >
            <ul
              className="flex flex-col items-center justify-evenly text-gray-100 dark:text-gray-900 md:flex-row
          "
            >
              {projectsNav.map((item, index) => {
                return (
                  <li
                    onClick={(e) => {
                      handleClick(e, index);
                    }}
                    className={`${
                      active === index
                        ? "active -mb-px h-10 whitespace-nowrap border-b-2 border-blue-500 bg-transparent px-4 py-2 text-center text-sm text-blue-600 focus:outline-none dark:border-blue-700  dark:text-blue-800 first-letter:sm:text-base "
                        : ""
                    } cursor-base text-md -mb-px h-10 cursor-pointer whitespace-nowrap border-b-2 border-transparent bg-transparent px-4 py-2 text-center text-gray-100 hover:border-gray-400 focus:outline-none dark:text-gray-500  sm:text-base`}
                    key={index}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </m.nav>
          <section className="grid max-w-full  grid-cols-1  gap-x-8 lg:grid-cols-2 lg:gap-x-9 lg:gap-y-5 ">
            {projects.map((item) => {
              return <Project key={item.id} project={item} />;
            })}
          </section>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Projects;
