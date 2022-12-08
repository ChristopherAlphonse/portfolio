import "./index.css";

import {
  BackTopBtn,
  Contact,
  Footer,
  Hero,
  Projects,
} from "./components/compIndex";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Suspense, useEffect, useState } from "react";

import PropagateLoader from "react-spinners/PropagateLoader";

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
        <title>
          Christopher Alphonse | Full Stack Developer, Software Engineer, Front
          end & App Developer.
        </title>

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
