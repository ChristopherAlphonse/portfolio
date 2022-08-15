import React from "react";
import { SocialIcons, SoundBar } from "./components/CompIndex";
import {
  Footer,
  Hero,
  Header,
  Contact,
  BackTopBtn,
  Portfolio,
  About,
} from "./components/CompIndex";


const HomePage = () => {
  return (
    <>
      <SocialIcons />
      <Header />
      <SoundBar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <BackTopBtn />
    </>
  );
};

export default HomePage;
