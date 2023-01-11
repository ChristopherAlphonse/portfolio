import { Helmet, HelmetProvider } from "react-helmet-async";
import { LazyMotion, domAnimation, m } from "framer-motion";
import React, { Suspense, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import DataBase from "../../Data/jumbo.db.json";
import { Footer, ResponsiveNavBar } from "../compIndex";
import { transition } from "../../FramerVariant/variants";
import ye from "./ye.jpg";

function Gallery() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
      <HelmetProvider>
        <Helmet prioritizeSeoTags>
          <title>Christopher Alphonse | Full-Stack Developer | Boston, MA</title>
          <meta
                name="keywords"
          content="Christopher Alphonse, full-stack developer, Boston, MA, software engineer, web development, front-end development, back-end development"
        />
        <meta
                name="description"
                content="Christopher Alphonse is a full-stack developer based in Boston, MA. With experience in front-end and back-end development, Christopher is skilled in using technologies like JavaScript, React, and Node.js to build scalable and effective web applications. Check out his portfolio to learn more about his work and skills."
        />
          <meta property="twitter:image" content="projects" />
          <meta name="author" content="Christopher Alphonse" />
        <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://christopheralphonse.com/projects" />
          <meta
          property="og:url"
          href="https://christopheralphonse.com/projects"
        />
          <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Christopher Alphonse" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="christopheralphonse" />
          <meta property="twitter:creator" content="Christopher Alphonse" />
          <meta
                name="copyright"
          content="Copyright 2022. All rights reserved for Christopher Alphonse"
        />
      </Helmet>
        <Suspense fallback={<div />}>
              {loading ? (
            <PropagateLoader
              color="#36c8d6"
            size={20}
              speedMultiplier={2}
              cssOverride={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              minHeight: "100vh",
              width: "100%",
              background: " #3f3f46 ",
            }}
          />
        ) : (
            <>
              <Suspense fallback={<div />}>
                <ResponsiveNavBar />
                <LazyMotion features={domAnimation}>
                  <section className="body-font text-gray-600">
                    <div className="container mx-auto px-5 py-24">
                      <div className="mb-20 flex w-full flex-col text-center">
                        <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
                              Welcome & Thank you for visiting
                      </h1>
                      <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                              These projects are a selection of projects that have been created or are in
                              development. The projects include a variety of web development projects,
                              such as an e-commerce store, a workflow management system, and a note taking
                              app, as well as a theme for Visual Studio Code. Each project includes a
                              brief description and information about the technologies used.
                      </p>
                    </div>
                      <div className="-m-4 flex flex-wrap">
                            {DataBase.map((items) => {
                        const { id, name, short, description, view } = items;
                        return (
                            <m.div
                              variants={transition("down")}
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: false, amount: 0.7 }}
                              className="p-4 sm:w-1/2 lg:w-1/3 "
                            as="ul"
                              key={id}
                          >
                            <Link to={view} target="_blank">
                                    <div className="relative flex" as="li">
                                  <img
                                        src={ye}
                                        height={300}
                                  width={200}
                                        alt="gallery"
                                  srcSet={ye}
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover object-center"
                                  decoding="async"
                                        sizes="(min-width: 66em) 33vw,
                                  (min-width: 44em) 50vw,
                                  100vw"
                                />

                                <div className="relative z-10 w-full border-4 border-zinc-900 bg-zinc-900 px-8 py-10 opacity-0 hover:opacity-70">
                                        <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-zinc-300">
                                          {short}
                                  </h2>
                                        <h1 className="title-font mb-3 text-lg font-medium text-gray-400">
                                      {name}
                                  </h1>
                                        <p className="leading-relaxed text-zinc-50">
                                    {description}
                                  </p>
                                    </div>
                              </div>
                                </div>
                            </Link>
                          </m.div>
                        );
                      })}
                        </div>
                  </div>
                </section>
              </LazyMotion>
            </Suspense>
          </>
        )}
              )
        <Footer />
          </Suspense>
    </HelmetProvider>
  );
}
export default Gallery;
