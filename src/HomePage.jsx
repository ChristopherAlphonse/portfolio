import {
  About,
  BackTopBtn,
  Contact,
  Footer,
  Header,
  Hero,
  Portfolio,
} from "./components/CompIndex";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { SocialIcons, SoundBar } from "./components/CompIndex";

import React from "react";

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Christopher Alphonse | Web Developer | Software Engineer</title>
        <link rel="canonical" href="/portfolio" />
        <meta
          property="og:title"
          content="Christopher Alphonse software/web developer"
        />
        <meta
          name="description"
          property="og:description"
          content="Christopher Alphonse specialize in JavaScript libraries and framework "
        />
        <meta
          name="image"
          property="og:image"
          content="author image"
          href="%SRC_URL%/assets/images/Author.jpg"
        />
      </Helmet>
      <BackTopBtn />
      <SocialIcons />
      <Header />
      <SoundBar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </HelmetProvider>
  );
};

export default HomePage;
