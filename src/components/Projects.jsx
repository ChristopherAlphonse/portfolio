import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "../data";

import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
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
    <section className="bg-[#27272af5] dark:bg-[#fffffff5]">
      <div className="container px-1 py-10 mx-auto">
        <div className="text-center">
          <h1
            className=" font-semibold front-primary capitalize lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r  from-blue-400 to-blue-200 italic  dark:from-blue-600 dark:to-blue-300  text-5xl
            
              "
          >
            My latest work
          </h1>

          <p className="max-w-[550px] mx-auto mt-4 text-paragraph dark:text-gray-500">
            Although I am a self taught developer with some bootcamp training, I
            took it upon myself to stay knowledgeable on numerous technologies,
            such as TypeScript, TauriJS, HydrogenJS, NextJS, Vite etc..
          </p>
        </div>

        <nav
          className="mb-1 max-w-xl mx-auto md:shadow md:bg-gray-900 md:border md:border-gray-900 dark:md:bg-gray-200 dark:md:border-gray-200  
          
          
          md:py-1 md:rounded-full md:mt-4
        
        
        "
        >
          <ul
            className="flex flex-col md:flex-row justify-evenly items-center text-gray-100 dark:text-gray-900
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
                      ? "active h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 dark:text-blue-800 dark:border-blue-700 first-letter:sm:text-base  whitespace-nowrap focus:outline-none "
                      : ""
                  } h-10 px-4 py-2 -mb-px text-sm text-center text-gray-100 dark:text-gray-900 bg-transparent border-b-2 border-transparent sm:text-base dark:text-gray-500whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 cursor-pointer`}
                  key={index}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </nav>
        <section className="grid gap-x-8  md:grid-cols-2  lg:grid-cols-3 lg:gap-x-7 lg:gap-y-7 ">
          {projects.map((item) => {
            return (
              <Project
                key={item.id}
                name={item.name}
                image={item.image}
                category={item.category}
                description={item.description}
                description2={item.description2}
                stack={item.stack}
                view={item.view}
                learnMore={item.learnMore}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Projects;
