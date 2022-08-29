import Projects from "./Projects";
import React from "react";
const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-zinc-800 min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title  relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My latest work
          </h2>
          <p className="subtitle">
            Past few months I have been working on optimizing performance and
            SEO, while using frameworks like NextJS for full-stack facing web
            development and Sanity.io as a CMS for clients.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
