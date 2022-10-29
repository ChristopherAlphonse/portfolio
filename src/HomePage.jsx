import { lazy, useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";

const Hero = lazy(() => import("./components/Hero"));
const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Footer = lazy(() => import("./components/Footer"));

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(True);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <BarLoader color={color} loading={loading} css={override} size={150} />
      ) : (
        <div>
          <Header />
          <Hero />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default HomePage;
