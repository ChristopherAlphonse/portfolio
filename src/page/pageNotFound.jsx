import "../index.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { lazy } from "react";

import { ResponsiveNavBar } from "../components/head";

const pageNotFound = () => {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>
          Christopher Alphonse | 404 | Full-Stack Developer | Boston, MA
        </title>
        <meta
          name="description"
          content=" I specialize in designing and building amazing digital experiences that are both functional and engaging.
        At the moment, I'm concentrating on learning new technologies and improving human-centered services ."
        />
      </Helmet>
      <>
        <ResponsiveNavBar />
        <div className="containerr  grid h-screen place-content-center items-center overflow-hidden  bg-zinc-900 px-4 py-32 dark:bg-zinc-50 lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0">
          <h1 className="text-md mb-[22px] text-5xl uppercase tracking-widest text-gray-500">
            404 | The page you are looking for does not exist.
          </h1>
          <button>
            <a
              className="md:btn-lg mt-9 mr-2 bg-blue-600  px-20  transition-all hover:bg-blue-600/50 dark:bg-blue-700 dark:hover:bg-blue-700/70"
              href="/"
            >
              Return Home
            </a>
          </button>
        </div>
      </>
    </HelmetProvider>
  );
};
export default pageNotFound;
