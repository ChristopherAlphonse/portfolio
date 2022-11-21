import React from "react";
import "./index.css";

const pageNotFound = () => {
  return (
    <section class=" dark:bg-gray-900    h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="text-[30rem] font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
          Page Not Found <br /> 404
        </h2>

        <div class="mt-6 sm:-mx-2">
          <div class="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
            <a
              href="/"
              class="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80"
            >
              Return Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default pageNotFound;
