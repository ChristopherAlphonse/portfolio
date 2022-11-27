import { Footer, Header } from "../components/compIndex";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { HarleyCover } from "../assets";
import React from "react";
import { projectsData } from "../data";

const Items = Object.entries(projectsData);

console.log(Items[1][1]); //loggin data

function Noted() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <link rel="canonical" href="/projects/note-app" />
        <link
          rel="Noted"
          href="https://christopheralphonse.com/v1/projects/note-app"
        />
        <title>Christopher Alphonse | Noted App</title>

        <meta
          name="description"
          content=" Full Stack Developer and PC enthusiast. I want to focus on writing
              clean, efficient code, and user friendly UI/UX experiences"
        />
      </Helmet>

      <Header />

      <section
        className="text-white py-28 bg-center bg-cover"
        style={{ backgroundImage: "url(" + HarleyCover + ")" }}
      >
        <div className="hidden sm:ml-6 sm:block mt-2">
          <div className="flex space-x-4 font-[600]"></div>
        </div>

        <div className="container mx-auto px-4">
          <h2 className="text-lg font-bold uppercase">
            {Items[1][1].category}
          </h2>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-6"></h1>

          <div className="text-lg md:flex gap-12">
            <div className="mb-4 md:mb-0">
              <span className="font-bold block mb-4">Role</span>
              Website Design
            </div>

            <div>
              <span className="font-bold block mb-4">Visit Website</span>
              <a
                target="_blank"
                href="htts://halrey-davidson.com"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.harley-davison.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-black border-t-2 py-16  
      
      dark:bg-white  bg-gray-800  
        
         dark:border-gray-700   "
      >
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4 text-slate-500 dark:text-slate-800">
            {Items[1][1].name}
          </h1>
          <p className="text-lg max-w-xl mb-16 text-slate-500 dark:text-slate-800">
            {Items[1][1].description}
          </p>

          <img
            src={Items[1][1].image}
            alt="Harley Davidson website"
            width="1053"
            height="539"
            loading="lazy"
            className="mx-auto mb-16"
          />

          <p className="text-lg max-w-xl mb-16 text-slate-500 dark:text-slate-800">
            {Items[1][1].description2}
          </p>
        </div>
      </section>
      <Footer />
    </HelmetProvider>
  );
}

export default Noted;
