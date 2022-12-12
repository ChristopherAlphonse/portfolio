import React from "react";
import { projectsData } from "../data";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <section className="h-[100vh] containerr flex items-center bg-zinc-800 dark:bg-slate-50 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
      {projectsData
        .filter((z) => z.id === id)
        .map((z) => {
          return (
            <section className="bg-white dark:bg-gray-900" key={z.id}>
              <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    {z.name}
                  </h2>
                  <p className="mb-4">{z.description2}</p>
                  <p>{z.stack}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <img
                    className="w-full rounded-lg"
                    src={z.image}
                    alt={z.name}
                  />
                </div>
              </div>
            </section>
          );
        })}
    </section>
  );
};

export default ProjectDetails;
