import { LazyMotion, domAnimation, m } from 'framer-motion';

import { logEvent } from '../../FirebaseAnalytics';
import { fadeIn } from '../../FramerVariant/variants';
import files from '../../files/resume.pdf';
import DownBtn from '../Btn/DownBtn';

function Hero() {
  const log = () => {
    logEvent(' Work with me ', 'Button Clicked');
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="section1"
        className="max-w-screen flex h-screen items-center justify-center  overflow-hidden bg-zinc-900 py-32 dark:bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0"
      >
        <div className="container mx-auto h-full">
          <div className="flex h-full items-center pt-8">
            <div className="flex flex-1 flex-col items-center lg:items-center">
              <m.p
                variants={fadeIn('right')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="text-md mb-[22px] text-lg text-blue-600"
              >
                Hey, I&apos;m Chris 👋
              </m.p>
              <m.h1
                variants={fadeIn('left')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
                className="text-3xl font-bold leading-[44px] dark:text-zinc-900 md:text-6xl md:leading-tight md:tracking-[-2px] lg:text-7xl lg:leading-[1.2] xl:text-9xl"
              >
                I Build & Design <br /> Web Applications.
              </m.h1>
              <m.p
                variants={fadeIn('right')}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
                className=" max-w-6xl pt-4 pb-8 text-center text-xs text-zinc-500 dark:text-zinc-600 sm:text-sm md:pt-6 md:pb-12 md:text-lg lg:text-left"
              >
                I specialize in <span className="text-blue-600"> designing</span> and{' '}
                <span className="text-blue-600"> building </span> amazing digital experiences that are both{' '}
                <span className="text-blue-600">functional</span> and <span className="text-blue-600"> engaging</span>
                .
                <br /> At the moment, I&apos;m concentrating on <span className="text-blue-600"> learning</span> new
                technologies and improving <span className="text-blue-600"> human-centered </span>
                services .
              </m.p>

              <div className="mt-6">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = files;
                    logEvent('Resume Download', 'User clicked on the resume download button');
                  }}
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-800 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 cursor-pointer"
                >
                  <span className="mx-2">My Resume</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  <span className="mx-2">My Contact</span>
                </a>
              </div>
            </div>
          </div>
          <DownBtn />
        </div>
      </section>
    </LazyMotion>
  );
}
export default Hero;
