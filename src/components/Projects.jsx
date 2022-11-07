import React, { useEffect, useState } from "react";

import Project from "./Project";
import { projectsData } from "../data";
import { projectsNav } from "../data";

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
    <section className="bg-[#27272af5] ">
      <div className="container px-1 py-10 mx-auto">
        <div className="text-center">
          <h1
            className="text-3xl font-semibold front-primary text-gray-100 capitalize lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 italic
              "
          >
            My latest work
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-paragraph">
            Knowledgeable on Content management systems(CMS), search engine
            optimization (SEO), lighthouse performance metrics for mobile
            optimization.
          </p>
        </div>

        <nav
          className="mb-1 max-w-xl mx-auto md:shadow md:bg-gray-900 md:border md:border-gray-900 md:py-1 md:rounded-full md:mt-4
        
        
        "
        >
          <ul
            className="flex flex-col md:flex-row justify-evenly items-center text-gray-100 
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
                      ? "active h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none"
                      : ""
                  } h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 cursor-pointer`}
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
            return <Project item={item} key={item.id} />;
          })}
        </section>
      </div>
    </section>
  );
};

export default Projects;
