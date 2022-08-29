import { FaDesktop, FaGithub, FaRocket } from "react-icons/fa";

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
          className="rounded-3xl w-[20rem] md:w-[30rem] "
          alt={item.id}
          height="250"
          width="300"
          src={item.image}
        />
      </div>
      <p className="capitalize text-accent text-sm mb-2">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-1">{item.name}</h3>
      <p className="text-base max-w-md mb-4">{item.description}</p>
      <p className="inline-block list-none text-sm text-white font-semibold bg-blue-400/50 px-3 rounded-full">
        {item.stack}
      </p>

      <div className="hover:text-cyan-500 cursor-pointer">
        <a href={item.livePreview} aria-label="live preview" className="icon">
          <FaDesktop />
        </a>
      </div>
    </div>
  );
};

export default Project;
