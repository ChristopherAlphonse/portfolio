import './st.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { introData, meta } from '../../Data/compData';

import DownBtn from '../Btn/DownBtn';
import { Link } from 'react-router-dom';

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
                <h1 className="md:text-xl text-lg title text-black">
                  {introData.title}
                  <span className="title md:text-xl text-lg ">{introData.name} </span>
                </h1>
                <h1 className="span text-black"> {introData.span}</h1>
                <p className="mt-2 text-normal  text-center p">{introData.description}</p>
                <div className="intro_btn-action ">
                  <Link to="/projects" className="text_2  menu_item">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                    </div>
                  </Link>
                  <Link className=" menu_item" to="/contact">
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
