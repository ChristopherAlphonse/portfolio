import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import React, { Suspense, useState } from 'react';
import { fadeIn, transition } from '../FramerVariant/variants';

import { BsArrowReturnLeft } from 'react-icons/bs';
import { Footer } from '../components/compIndex';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { ResponsiveNavBar } from '../components/head';
import { TfiWorld } from 'react-icons/tfi';
import { projectsData } from '../data';
import { useParams } from 'react-router-dom';

const ImageProps = {
  width: 48,
  height: 48,
};

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
        <title>Christopher Alphonse | {id} | Full-Stack Developer | Boston, MA</title>

        <meta
          name='keywords'
          content='Christopher Alphonse, full-stack developer, Boston, MA, software engineer, web development, front-end development, back-end development'
        />

        <meta
          name='description'
          content='Christopher Alphonse is a full-stack developer based in Boston, MA. With experience in front-end and back-end development, Christopher is skilled in using technologies like JavaScript, React, and Node.js to build scalable and effective web applications. Check out his portfolio to learn more about his work and skills.'
        />
      </Helmet>

      <div className=''>
        {loading ? (
          <PropagateLoader
            color='#36c8d6'
            size={20}
            speedMultiplier={2}
            cssOverride={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '100vh',
              width: '100%',
              background: ' #3f3f46 ',
            }}
          />
        ) : (
          <>
            <Suspense fallback={<div />}>
              <ResponsiveNavBar />
              <LazyMotion features={domAnimation}>
                <section className='containerr flex h-full items-center justify-center bg-zinc-800  py-32 dark:bg-zinc-50 lg:h-[100vh] '>
                  {projectsData
                    .filter((z) => z.id === id)
                    .map((z) => {
                      return (
                        <section key={z.id}>
                          <div className='container mx-auto px-5 py-24'>
                            <m.h2
                              variants={transition('down')}
                              initial='hidden'
                              whileInView={'show'}
                              viewport={{ once: false, amount: 0.7 }}
                              className='title-font mb-1 text-3xl tracking-widest  dark:text-zinc-900  md:text-4xl lg:text-5xl '
                            >
                              {z.name}
                            </m.h2>
                            <h1 className='title-font mb-1 font-body text-sm font-medium text-zinc-500 md:text-lg'>
                              {z.short}
                            </h1>
                            <div className=' mx-auto flex flex-wrap'>
                              <img
                                className='h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2'
                                src={z.image}
                                alt={`${z.name}, ${z.short} image`}
                                {...ImageProps}
                              />
                              <div className='mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10'>
                                <div className='mb-4 flex '>
                                  <span className='flex items-center text-blue-300'>
                                    <span>{z.stack}</span>
                                  </span>
                                </div>
                                <button className='mb-5 bg-slate-500 px-6'>{z.status}</button>
                                <p className='leading-relaxed text-zinc-500 md:text-lg'>
                                  {z.description2}
                                </p>
                                <div className='mt-2 mb-5 flex items-center border-b-2 border-zinc-100 pb-5'></div>
                                <div className='flex'>
                                  <span className='ml-1 flex items-center space-x-2 py-1 pl-3  text-blue-600 transition-all hover:text-blue-600/50 dark:text-blue-700 dark:hover:text-blue-700/70'>
                                    <a href={z.view} className='flex items-center'>
                                      <TfiWorld />{' '}
                                      <span className='ml-2 items-center'>V I S I T</span>
                                    </a>
                                  </span>

                                  <a
                                    href='/'
                                    className='btn btn-md md:btn-lg  ml-auto flex items-center rounded border-0 bg-blue-600  py-1  px-9 text-white transition-all hover:bg-blue-600/50 dark:bg-blue-700 dark:hover:bg-blue-700/70'
                                  >
                                    <BsArrowReturnLeft />{' '}
                                    <span className='ml-2 items-center'>R E T U R N</span>
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
