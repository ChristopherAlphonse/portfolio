import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';

import DataBase from '../../Data/jumbo.db.json';
import { Link } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { meta } from '../../../src/Data/compData';
import { transition } from '../../FramerVariant/variants';
import ye from './ye.jpg';

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
      <Helmet prioritizeSeoTags></Helmet>
      <Suspense fallback={<div />}>
        {loading ? (
          <PropagateLoader
            color="#000"
            size={20}
            speedMultiplier={2}
            cssOverride={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '100vh',
              width: '100%',
              background: ' #fff ',
            }}
          />
        ) : (
          <>
            <Suspense fallback={<div />}>
              <LazyMotion features={domAnimation}>
                <section className=" body-font text-gray-600 bg-white">
                  <div className="container mx-auto px-5 py-24">
                    <div className="mb-20 flex w-full flex-col text-center">
                      <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
                        Welcome & Thank you for visiting
                      </h1>
                      <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                        These projects are a selection of projects that have been created or are in development. The
                        projects include a variety of web development projects, such as an e-commerce store, a workflow
                        management system, and a note taking app, as well as a theme for Visual Studio Code. Each
                        project includes a brief description and information about the technologies used.
                      </p>
                    </div>
                    <div className="-m-4 flex flex-wrap">
                      {DataBase.map((items) => {
                        const { id, name, short, description, view } = items;
                        return (
                          <m.div
                            variants={transition('down')}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className="p-4 sm:w-1/2 lg:w-1/3 "
                            as="ul"
                            key={id}
                          >
                            <Link to={view} target="_blank">
                              <div className="relative flex">
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
                                  <h1 className="title-font mb-3 text-lg font-medium text-gray-400">{name}</h1>
                                  <p className="leading-relaxed text-zinc-50">{description}</p>
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
      </Suspense>
    </HelmetProvider>
  );
}
export default Gallery;
