import { Helmet, HelmetProvider } from "react-helmet-async";
import { lazy, useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const Hero = lazy(() => import("./components/Hero"));
const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Footer = lazy(() => import("./components/Footer"));

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2022);
  }, []);

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>
          Christopher Alphonse | Software Developer | Software Engineer
        </title>

        <meta
          name="description"
          content="Christopher Alphonse is a software developer/engineer based in Boston, MA that specializes in web applications and web development. Proficient at utilizing the MERN Stack to complete Full-Stack Applications."
        />
      </Helmet>
      <div>
        {loading ? (
          <PropagateLoader
            color="#36c8d6"
            size={20}
            speedMultiplier={2}
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
            <Header />
            <Hero />
            {/* <About /> */}
            <Portfolio />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
