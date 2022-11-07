import Projects from "./Projects";
import React from "react";
const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-zinc-800 min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title  relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block title-heading">
            My latest work
          </h2>
          <p className="title-para subtitle">
            Knowledgeable on Content management systems(CMS), search engine
            optimization (SEO), lighthouse performance metrics for mobile
            optimization.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
