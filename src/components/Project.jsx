import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className=" mt-8 md:mt-16 md:grid-cols-2  rounded-lg  text-white dark:text-black  xl:grid-cols-3 bg-[#27272a] dark:bg-gray-100  shadow-lg"
    >
      <div className="text-center">
        <div className="relative">
          <div>
            <LazyLoadImage
              className=" block object-cover object-center w-full h-full rounded-lg"
              alt={item.id}
              height="250"
              width="600"
              src={item.image}
            />
          </div>

          <div
            className="absolute bottom-0 flex p-1  bg-gray-900 dark dark:bg-slate-50 
           "
          >
            <div className="mx-6">{item.stack}</div>
          </div>
        </div>

        <h1 className="mt-6 text-xl font-semibold text-white dark:text-black ">
          {item.name}
        </h1>

        <p className="max-w-2xl mb-6  font-[400] text-slate-300 dark:text-slate-900  lg:mb-8 md:text-lg lg:text-xl ">
          {item.description}
        </p>

        <a
          href="#"
          class="inline-flex px-6 py-2 mb-5 mt-2 items-center justify-center text-base font-medium text-center  border 
          
          bg-blue-400/50 text-gray-50 rounded-lg  hover:bg-blue-400/60 hover:text-gray-300 

          border-zinc-900/10 shadow
              
              dark:bg-blue-500/70 dark:text-gray-50    dark:hover:bg-blue-500/60 dark:hover:text-gray-200
          
          
          
          "
        >
          View
        </a>

        <a
          href="#"
          class="inline-flex px-6 py-2 mb-5 mt-2 items-center justify-center ml-3 text-base font-medium text-center text-slate-500 rounded-lg bg-primary-700 hover:bg-primary-800 
          
          
          border-zinc-900/10 shadow border border-blue-900 hover:bg-blue-900
           "
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Project;
