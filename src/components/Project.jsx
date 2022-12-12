import React from "react";

const logoProps = {
  height: 96,
  width: 96,
};

const Project = ({ project }) => {
  const { id, image, description, stack, view, name } = project;

  return (
    <>
      <div>
        <div className=" mt-8 md:mt-16 md:grid-cols-2  rounded-lg  text-white dark:text-black  xl:grid-cols-3 bg-zinc-900/70 dark:bg-zinc-300 drop-shadow-9xl md:hover:scale-110 transition duration-300 ease-in-out">
          <div className="text-center">
            <div className="relative  ">
              <div>
                <img
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
                <div className="mx-6">{stack}</div>
              </div>
            </div>
            <h1 className="mt-6 text-xl font-semibold text-white dark:text-black ">
              {name}
            </h1>
            <p className="max-w-2xl mb-6 text-md font-bold text-slate-300 dark:text-slate-900   ">
              {description}
            </p>

            <div className="container flex flex-col items-center px-4 py-2 mx-auto xl:flex-row">
              <div className="mt-6 sm:-mx-2">
                <a
                  href={view}
                  className="inline-flex items-center justify-center w-full px-5 py-3 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                >
                  <span className="mx-2">Visit</span>
                </a>

                <a
                  href={`/project/${id}`}
                  className="inline-flex items-center justify-center w-full px-5 py-3 mt-4 overflow-hidden text-white transition-colors duration-300  rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 bg-blue-600  hover:bg-blue-600/50
                  dark:bg-blue-700 dark:hover:bg-blue-700/70     "
                >
                  <span className="mx-2">Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
