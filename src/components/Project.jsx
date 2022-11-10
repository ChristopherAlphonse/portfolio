import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className=" mt-8 md:mt-16 md:grid-cols-2 border-2 border-[#27272a]  rounded-lg  text-white  shadow-md xl:grid-cols-3 bg-[#27272a]"
    >
      <div className="text-center">
        <div className="relative">
          <div>
            <LazyLoadImage
              className=" object-fill object-center w-full h-64 rounded-lg lg:h-80"
              alt={item.id}
              height="250"
              width="600"
              src={item.image}
            />
          </div>

          <div className="absolute bottom-0 flex p-1  bg-gray-900/70 text-black ">
            <div className="mx-6">
              <h1 className="text-sm text-gray-100 font-body ">{item.stack}</h1>
              <a
                href={item.sourceCode}
                className="text-sm text-gray-300/70  py-1 hover:text-white "
              >
                Source
              </a>
            </div>
          </div>
        </div>

        <h1 className="mt-6 text-xl font-semibold text-gray-200 ">
          {item.name}
        </h1>

        <p className="text-sm text-paragraph ">{item.description}</p>

        <a
          href={item.livePreview}
          className="inline-block px-6 py-2 mb-5 mt-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-900/60 rounded-md hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 "
        >
          VIEW
        </a>
      </div>
    </div>
  );
};

export default Project;
