import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, Suspense, useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

import "./index.css";

const Projects = lazy(() => import("./components/Projects"));
const BackTopBtn = lazy(() => import("./components/BackTopBtn"));
const Hero = lazy(() => import("./components/Hero"));
const Header = lazy(() => import("./components/Header"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Christopher Alphonse - Full Stack Developer</title>

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
            speedMultiplier={3}
            cssOverride={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              minHeight: "100vh",
              width: "100%",
              background: "#3f3f46",
            }}
          />
        ) : (
          <>
            <Suspense fallback={<div />}>
              <Header />
            </Suspense>

            <Suspense fallback={<div />}>
              <Hero />
            </Suspense>

            <Suspense fallback={<div />}>
              <Projects />
            </Suspense>

            <Suspense fallback={<div />}>
              <Contact />
            </Suspense>

            <Suspense fallback={<div />}>
              <Footer />
              <BackTopBtn />
            </Suspense>
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
