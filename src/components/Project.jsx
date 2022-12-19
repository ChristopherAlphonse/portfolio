import { LazyMotion, domAnimation, m } from 'framer-motion';
import { fadeIn, transition } from '../FramerVariant/variants';

import React from 'react';

const logoProps = {
  height: 563,
  width: 1000,
};

const Project = ({ project }) => {
  const { id, image, description, stack, view, name } = project;

  return (
    <LazyMotion features={domAnimation}>
      <div className=' rounded object-cover object-center '>
        <div className='drop-shadow-9xl  mt-8   rounded-sm  p-0.5  text-white  shadow-xl  dark:bg-zinc-300 dark:text-black md:mt-16 md:grid-cols-2 xl:grid-cols-3   '>
          <div className='bg-zinc-900 text-center dark:bg-zinc-200  '>
            <div className='relative '>
              <div>
                <m.img
                  variants={transition('right')}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                  className=' hover:scale-44  block object-cover object-center'
                  alt={id}
                  src={image}
                  loading='lazy'
                  {...logoProps}
                />
              </div>

              <div
                className='dark absolute bottom-0 flex  bg-gray-900 p-1 dark:bg-slate-50 
           '
              >
                <m.div
                  variants={transition('left')}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.6 }}
                  className='mx-6'
                >
                  {stack}
                </m.div>
              </div>
            </div>
            <m.h1
              variants={transition('up')}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className=' mt-1 font-primary  text-3xl  font-bold uppercase italic  text-white dark:text-black '
            >
              {name}
            </m.h1>
            <m.p
              variants={transition('down')}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className='text-md ye mx-3 mt-2 max-w-2xl  font-bold text-zinc-500 dark:text-zinc-600'
            >
              {description}
            </m.p>

            <div className='container mx-auto flex flex-col items-center justify-center px-4 py-3 xl:flex-row '>
              <m.div
                variants={fadeIn('up')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className='mt-6 sm:-mx-2'
              >
                <a
                  target='_blank'
                  href={view}
                  className=' mt-4  justify-center overflow-hidden rounded-lg border-2  border-blue-600/50 px-5  py-3 text-zinc-100 shadow transition-colors duration-300 hover:bg-blue-600/50
                  dark:text-zinc-900  dark:hover:bg-blue-600
                  dark:hover:text-zinc-100 
                  
                  sm:mx-2 sm:mt-0 sm:w-auto 
                  
                  '
                >
                  <span className='mx-2 '>Visit</span>
                </a>

                <a
                  href={`/project/${id}`}
                  className=' mx-2  mt-2 justify-center overflow-hidden rounded-lg  border-2 border-blue-600/50  bg-blue-600 px-5 py-3 text-zinc-100 shadow
                  transition-colors duration-300 hover:border-blue-600/50 
hover:bg-zinc-900
dark:hover:bg-zinc-100/50
 dark:hover:text-zinc-900
 sm:mt-0

sm:w-auto

                     '
                >
                  <span className='mx-2  '>Learn More</span>
                </a>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Project;
