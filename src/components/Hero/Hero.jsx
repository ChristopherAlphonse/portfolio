import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import { introData, meta } from '../../Data/compData';
import { fadeIn } from '../../FramerVariant/variants';
import files from '../../files/resume.pdf';
import DownBtn from '../Btn/DownBtn';
import './st.css';

function Hero() {
  return (
    <HelmetProvider>
      <LazyMotion features={domAnimation}>
        <section
          id="section1"
          className="max-w-screen flex h-screen items-center justify-center  overflow-hidden bg-zinc-900 py-32 dark:bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0"
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title> {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <div className="container mx-auto h-full">
            <div className="flex h-full items-center pt-8">
              <div className="flex flex-1 flex-col items-center lg:items-center">
                <m.p
                  variants={fadeIn('right')}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-md mb-[22px] text-lg text-blue-600"
                ></m.p>

                <h1 className="text-normal title text-black">
                  {introData.title}
                  <span className="title text-normal ">{introData.name} </span>
                </h1>
                <h1 className="span text-black"> {introData.span}</h1>
                <p className="mb-1x text-normal  text-center p">{introData.description}</p>
                <div className="intro_btn-action ">
                  <Link to="/portfolio" className="text_2 it menu_item">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                    </div>
                  </Link>
                  <Link
                    className="it menu_item"
                    to="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = files;
                    }}
                  >
                    <div id="button_h" className="ac_btn btn text-black">
                      Contact Me
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <DownBtn />
          </div>
        </section>
      </LazyMotion>
    </HelmetProvider>
  );
}
export default Hero;
