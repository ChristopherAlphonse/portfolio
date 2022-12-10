import React from "react";

const Project = ({ name, image, stack, description, view }) => {
  return (
    <>
      <div>
        <div className=" mt-8 md:mt-16 md:grid-cols-2  rounded-lg  text-white dark:text-black  xl:grid-cols-3 bg-[#27272a] dark:bg-gray-100  shadow-lg  hover:scale-110 transition duration-300 ease-in-out">
          <div className="text-center">
            <div className="relative  ">
              <div>
                <img
                  className=" block object-cover object-center w-full h-full rounded-lg hover:scale-44 ease-in duration-500"
                  alt={name}
                  height="250"
                  width="600"
                  src={image}
                  loading="lazy"
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
            <p className="max-w-2xl mb-6 text-[10px] font-[400] text-slate-300 dark:text-slate-900   ">
              {description}
            </p>
            <a
              target="_blank"
              href={view}
              className="inline-flex px-6 py-2 mb-5 mt-2 items-center justify-center text-base font-medium text-center  border 
          
          bg-blue-400/50 text-gray-50 rounded-lg  hover:bg-blue-400/60 hover:text-gray-300 

          border-zinc-900/10 shadow
              
              dark:bg-blue-500/70 dark:text-gray-50    dark:hover:bg-blue-500/60 dark:hover:text-gray-200

          
          "
            >
              View
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
