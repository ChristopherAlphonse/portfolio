import { LazyMotion, domAnimation, m } from "framer-motion";

import { transition } from "../../FramerVariant/variants";
import { useMemo } from "react";

function TempHero({ featured }) {
  const featuredMemoized = useMemo(() => featured, [featured]);
  const { id, image, description, stack, view, name } = featuredMemoized;

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={transition("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="box mt-2 mb-9  max-w-6xl place-items-center rounded-xl  bg-zinc-900 shadow-lg  shadow-blue-900/40 dark:bg-zinc-100"
      >
        <p className=" mx-3 mb-5 flex justify-center py-2  text-zinc-300 dark:text-zinc-400  lg:relative lg:bottom-9 lg:justify-end lg:bg-transparent">
          {stack}
        </p>
        <section className="body-font text-gray-600">
          <div className="container mx-auto">
            <div className="-mx-4 -mb-10 flex flex-wrap text-center">
              <div className="mb-10 px-4 sm:w-1/2">
                <div className="mb-1 text-7xl uppercase xs:mb-9 sm:text-5xl">
                  {name}
                </div>
                <div className="title-font text-md lg:z-9 z-50 mt-6 mb-4 flex items-center bg-gray-900 p-5 text-zinc-100  shadow-md dark:bg-zinc-50 dark:text-zinc-800 lg:relative lg:left-20 lg:text-lg">
                  {description}
                </div>
                <div className="ml-1 flex justify-center sm:mb-4 lg:mb-10">
                  <a
                    href={view}
                    target="_blank"
                    className="bb  md:text-md inline-flex justify-center rounded-3xl text-center text-sm  text-zinc-50 dark:text-zinc-500 dark:hover:text-white sm:px-6 sm:py-2 "
                    rel="noreferrer"
                  >
                    VIEW
                  </a>
                  <a
                    href={`https://christopheralphonse.com/project/${id}`}
                    className=" text-md ml-7  inline-flex rounded-3xl text-sm text-gray-50 hover:text-zinc-300 dark:hover:text-zinc-500 sm:px-6 sm:py-2 "
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
              <div className="ye z-0 mb-10 px-9 pb-9 sm:w-1/2">
                <div className="h-70">
                  <img
                    alt={name}
                    className="object-fit object-center"
                    src={image}
                    width={500}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    srcSet={image}
                    sizes="(min-width: 66em) 33vw,
                    (min-width: 44em) 50vw,
                    100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </m.div>
    </LazyMotion>
  );
}
export default TempHero;
