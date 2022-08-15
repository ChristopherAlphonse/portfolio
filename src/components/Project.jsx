import React from "react";
import { FaRocket, FaGithub } from "react-icons/fa";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center transform transition duration-700 hover:scale-110"
    >
      <div className="mb-8">
        <img
          className="rounded-3xl w-[25rem]"
          src={item.image}
          alt="project "
        />
      </div>
      <p className="capitalize text-accent text-sm mb-2">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-1">{item.name}</h3>
      <p className="text-base max-w-md mb-4">{item.description}</p>
      <ul className="inline-block list-none text-sm text-white font-semibold">
        <li className="inline-block bg-blue-400/50 px-3 rounded-full">
          Tailwind
        </li>
        <li className="inline-block bg-green-400/50 px-3 mx-2 rounded-full">
          React
        </li>
        <li className="inline-block bg-pink-400/50 px-3 rounded-full">
          TypeScript
        </li>
      </ul>
      <div>
        <a href={item.sourceCode} aria-label="source code" className="icon">
          <FaGithub />
        </a>
        <a href={item.livePreview} aria-label="live preview" className="icon">
          <FaRocket />
        </a>{" "}
      </div>
    </div>
  );
};

export default Project;
