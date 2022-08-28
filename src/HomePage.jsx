import { Helmet, HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";

const Hero = lazy(() => import("./components/Hero"));
const Header = lazy(() => import("./components/Header"));
const About = lazy(() => import("./components/About"));
const BackTopBtn = lazy(() => import("./components/BackTopBtn"));
const Contact = lazy(() => import("./components/Contact"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const SoundBar = lazy(() => import("./components/SoundBar"));
const SocialIcons = lazy(() => import("./components/SocialIcons"));
const Footer = lazy(() => import("./components/Footer"));

const renderLoader = () => <p>Loading</p>;

const HomePage = () => {
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
      <Suspense fallback={renderLoader()}>
        <SoundBar />
        <SocialIcons />
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
        <BackTopBtn />
      </Suspense>
    </HelmetProvider>
  );
};

export default HomePage;
