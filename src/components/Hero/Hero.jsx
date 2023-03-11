import { LazyMotion, domAnimation, m } from 'framer-motion';

import DownBtn from '../Btn/DownBtn';
import { fadeIn } from '../../FramerVariant/variants';
import files from '../../../public/files/resume.pdf';
import { logEvent } from '../../FirebaseAnalytics';

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
                I specialize in{' '}
                <span className="text-blue-600"> designing</span> and{' '}
                <span className="text-blue-600"> building </span> amazing
                digital experiences that are both{' '}
                <span className="text-blue-600">functional</span> and{' '}
                <span className="text-blue-600"> engaging</span>
                .
                <br /> At the moment, I&apos;m concentrating on{' '}
                <span className="text-blue-600"> learning</span> new
                technologies and improving{' '}
                <span className="text-blue-600"> human-centered </span>
                services .
              </m.p>
              <div className="flex">
                <a
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = files;
                    logEvent(
                      'Resume Download',
                      'User clicked on the resume download button'
                    );
                  }}
                  className="btn-holder"
                >
                  <button
                    type="button"
                    className=" hero-btn hero-btn-3 hover-border-2 hover-border-9 focus-none  "
                  >
                    <span className="my-resume">My Resume</span>
                  </button>
                </a>
                <a
                  href="#contact"
                  className="btn-holder   "
                  onClick={e => {
                    logEvent(
                      'My Contact',
                      'User clicked on the My Contact button'
                    );
                  }}
                >
                  <button
                    type="button"
                    className=" hero-btn hero-btn-3 hover-border-2 focus-none "
                  >
                    <span href="#contact">My Contact</span>
                  </button>
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
