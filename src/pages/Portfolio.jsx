import { BsArrowReturnLeft, BsGithub } from "react-icons/bs";
import { Footer, Header } from "../components/compIndex";
import { Helmet, HelmetProvider } from "react-helmet-async";

import React from "react";

const Portfolio = ({
  view,
  name,
  description,
  description2,
  image,
  id,
  stack,
}) => {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <link rel="canonical" href={id} />
        <link rel={id} href={view} />
        <title>Christopher Alphonse | {name} </title>

        <meta name="description" content={description2} />
      </Helmet>

      <Header />

      <section class="bg-white dark:bg-gray-900 h-[90vh]" key={id}>
        <div class="relative flex">
          <div class="min-h-screen lg:w-1/3"></div>
          <div class="hidden w-3/3 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div class="max-w-[1200px] flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 class="text-6xl font-semibold text-gray-800 capitalize lg:text-9xl dark:text-white">
              {name}
            </h1>

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img
                class="object-cover shadow-lg object-center w-full lg:w-[32rem] rounded-lg h-96"
                src={image}
                alt={name}
              />

              <div class="mt-8 lg:px-10 lg:mt-0">
                <p class="max-w-lg mt-6 text-xl text-gray-600 dark:text-gray-400">
                  {description}
                </p>

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  “ {description2} ”
                </p>

                <p class="mt-6 text-lg font-medium text-gray-500 dark:text-gray-400">
                  Technology used:{" "}
                  <span className="text-blue-500">{stack} </span>
                </p>
                <div className=" pt-2">
                  <a
                    href="/"
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-5 mb-2"
                  >
                    <BsArrowReturnLeft /> &nbsp; Return
                  </a>
                  <a
                    href="/"
                    className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
                  >
                    <BsGithub /> &nbsp; GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </HelmetProvider>
  );
};

export default Portfolio;
