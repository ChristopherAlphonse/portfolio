import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center transform transition duration-300 max-w-xs"
    >
      <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800/25 dark:border-gray-700">
        <a href="#">
          <LazyLoadImage
            className=" rounded-t-lg object-cover h-50 w-96"
            alt={item.id}
            height="250"
            width="300"
            src={item.image}
          />
        </a>
        <div className="mb-2">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.description}
          </p>
          <a
            href={item.livePreview}
            className="inline-flex items-center py-2 px-6 text-sm font-medium text-center text-white bg-blue-700/25 rounded-lg "
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
