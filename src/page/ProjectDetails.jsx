import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { Suspense, useState } from "react";

import PropagateLoader from "react-spinners/PropagateLoader";
import { ResponsiveNavBar } from "../components/head";
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
        <title>Christopher Alphonse | {id}</title>

        <meta
          name="description"
          content=" Full Stack Developer and PC enthusiast. I want to focus on writing
          clean, efficient code, and user friendly UI/UX experiences"
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

              <section className="h-[100vh] containerr flex items-center bg-zinc-800 dark:bg-slate-50 lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
                {projectsData
                  .filter((z) => z.id === id)
                  .map((z) => {
                    return (
                      <section className="bg-white dark:bg-gray-900" key={z.id}>
                        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                              {z.name}
                            </h2>
                            <p className="mb-4">{z.description2}</p>
                            <p>{z.stack}</p>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mt-8">
                            <img
                              className="w-full rounded-lg"
                              src={z.image}
                              alt={z.name}
                            />
                          </div>
                        </div>
                      </section>
                    );
                  })}
              </section>
            </Suspense>
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default ProjectDetails;
