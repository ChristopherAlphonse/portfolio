import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center transform transition duration-700 hover:scale-110"
    >
      <div className="mb-8">
        <LazyLoadImage
          className="rounded-2xl w-[20rem] md:w-[30rem] "
          alt={item.id}
          height="250"
          width="300"
          src={item.image}
        />
      </div>
      <p className="capitalize text-accent text-sm mb-2">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-1">{item.name}</h3>
      <p className="text-base max-w-md mb-4">{item.description}</p>
      <div>
        <p className="inline-block list-none text-sm text-white font-semibold bg-blue-400/20 px-3 rounded-full mr-1">
          {item.stack}
        </p>
        <p className="inline-block list-none text-sm text-white font-semibold bg-blue-400/20 px-3 rounded-full  mr-1 ">
          {item.stack2}
        </p>
        <p className="inline-block list-none text-sm text-white font-semibold  bg-blue-400/20 px-3 rounded-full   mr-1">
          {item.stack3}
        </p>
      </div>

      <div className="hover:text-cyan-500 cursor-pointer">
        <div className="copy-container cursor-pointer ">
          <a
            href={item.livePreview}
            aria-label="live preview"
            className="inline-flex items-center text-blue-600 hover:text-blue-600/75 icon"
          >
            Live Preview
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
