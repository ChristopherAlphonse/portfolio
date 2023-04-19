import './st.css';

import { BackGroundVideo, BackGroundVideo2 } from '../../assets';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { introData, meta } from '../../Data/compData';

import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Hero() {
  // const videoRef = useRef();

  // const setPlaybackRate = () => {
  //   videoRef.current.playbackRate = 1;
  // };

  return (
    <HelmetProvider>
      <LazyMotion features={domAnimation}>
        {/* <div className="video-background">
          <video autoPlay loop muted ref={videoRef} onLoadedData={setPlaybackRate}>
            <source src={BackGroundVideo2} type="video/mp4" />
          </video>
        </div> */}
        <section
          id="section1"
          className="max-w-screen flex h-screen items-center justify-center overflow-hidden py-32 lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0"
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title> {meta.title} | Home</title>
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
                      <div className="ring three" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </LazyMotion>
    </HelmetProvider>
  );
}

export default Hero;
