import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center transform transition duration-300 "
    >
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800/25 dark:border-gray-700">
        <a href="#">
          <LazyLoadImage
            className=" rounded-t-lg object-cover h-45 w-96"
            alt={item.id}
            height="250"
            width="300"
            src={item.image}
          />
        </a>
        <div className="p-5">
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
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700/50 rounded-lg hover:bg-blue-800/50 focus:ring-4 focus:outline-none focus:ring-blue-300/50 dark:bg-blue-600/50 dark:hover:bg-blue-700 dark:focus:ring-blue-800/50"
          >
            Live
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
