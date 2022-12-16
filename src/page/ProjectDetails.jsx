import { Helmet, HelmetProvider } from "react-helmet-async";
import { LazyMotion, domAnimation, m } from "framer-motion";
import React, { Suspense, useState } from "react";
import { fadeIn, transition } from "../FramerVariant/variants";

import { BsArrowReturnLeft } from "react-icons/bs";
import { Footer } from "../components/compIndex";
import PropagateLoader from "react-spinners/PropagateLoader";
import { ResponsiveNavBar } from "../components/head";
import { TfiWorld } from "react-icons/tfi";
import { projectsData } from "../data";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const { id } = useParams();

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>
          Christopher Alphonse | {id} | Full-Stack Developer | Boston, MA
        </title>

        <meta
          name="keywords"
          content="Christopher Alphonse, full-stack developer, Boston, MA, software engineer, web development, front-end development, back-end development"
        />

        <meta
          name="description"
          content="Christopher Alphonse is a full-stack developer based in Boston, MA. With experience in front-end and back-end development, Christopher is skilled in using technologies like JavaScript, React, and Node.js to build scalable and effective web applications. Check out his portfolio to learn more about his work and skills."
        />
      </Helmet>

      <div className="">
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
                <section className="containerr flex h-full lg:h-[100vh] items-center justify-center overflow-hidden bg-zinc-800 py-32 dark:bg-slate-50 lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0">
                  {projectsData
                    .filter((z) => z.id === id)
                    .map((z) => {
                      return (
                        <section key={z.id}>
                          <div className="container px-5 py-24 mx-auto">
                            <m.h2
                              variants={transition("down")}
                              initial="hidden"
                              whileInView={"show"}
                              viewport={{ once: false, amount: 0.7 }}
                              className="title-font text-3xl md:text-7xl  dark:text-zinc-900  tracking-widest mb-1"
                            >
                              {z.name}
                            </m.h2>
                            <h1 className="font-body text-gray-500 text-sm md:text-lg title-font font-medium mb-1">
                              {z.short}
                            </h1>
                            <div className=" mx-auto flex flex-wrap">
                              <img
                                alt={`${z.name}, ${z.short}`}
                                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                src={z.image}
                              />
                              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <div className="flex mb-4 ">
                                  <span className="flex items-center text-blue-300">
                                    <span>{z.stack}</span>
                                  </span>
                                </div>
                                <button className="mb-5 px-6 bg-slate-500">
                                  {z.status}
                                </button>
                                <p className="leading-relaxed md:text-md">
                                  {z.description2}
                                </p>
                                <div className="flex mt-2 items-center pb-5 border-b-2 border-zinc-100 mb-5"></div>
                                <div className="flex">
                                  <span className="flex ml-1 pl-3 py-1 text-blue-600 space-x-2  transition-all hover:text-blue-600/50 items-center dark:text-blue-700 dark:hover:text-blue-700/70">
                                    <a
                                      href={z.view}
                                      className="flex items-center"
                                    >
                                      <TfiWorld />{" "}
                                      <span className="ml-2 items-center">
                                        V I S I T
                                      </span>
                                    </a>
                                  </span>

                                  <a
                                    href="/"
                                    className="flex ml-auto text-white  border-0 py-1 px-9 btn btn-md md:btn-lg  bg-blue-600  transition-all hover:bg-blue-600/50 items-center dark:bg-blue-700 dark:hover:bg-blue-700/70 rounded"
                                  >
                                    <BsArrowReturnLeft />{" "}
                                    <span className="ml-2 items-center">
                                      R E T U R N
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      );
                    })}
                </section>
              </LazyMotion>
            </Suspense>
          </>
        )}
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default ProjectDetails;
