import React from "react";

const About = () => {
  return (
    <section className="section bg-zinc-200" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-col gap-24">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left ">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3  relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block text-zinc-700">
                About Me
              </h2>
              <p className="mb-4 text-cyan-600 ">Software Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8 text-gray-700/75">
                I'm a software developer with full stack development experience
                using JavaScript libraries and frameworks. <br /> I am very
                enthusiastic about creating and connecting with technology. I'm
                a positive person who enjoys being hands-on.
                <br /> I spent four years in the pharmaceutical industry before
                deciding it was time to pursue my passion in technology, where I
                can explore opportunities and share my excitement for
                technology.
                <br />
                I recently completed a tough 14-week coding boot camp that
                enhanced my understanding of full-stack software development.
                <br /> I'm excited to contribute my skills and knowledge to a
                dynamic and cooperative team. <br /> I'm excited to be joining a
                mission-driven company that values making a positive effect
                through the development of innovative technologies and services.
              </p>
              <h1 className="text-center pb-6 text-gray-700 font-italic ">
                Tools | Libraries | Framework
              </h1>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-cyan-600"> {">"} </span> JavaScript
                  {"(ES6+)"}
                </div>
                <div>
                  <span className="text-cyan-600"> {">"} </span> TypeScript
                </div>
                <div>
                  <span className="text-cyan-600"> {">"} </span> Rust
                </div>
                <div>
                  <span className="text-cyan-600"> {">"} </span> Express
                </div>
                <div>
                  <span className="text-cyan-600"> {">"} </span> Node
                </div>
                <div>
                  <span className="text-cyan-600"> {">"} </span> Tailwind
                </div>
                <div>
                  <span className="text-cyan-600"> {">"} </span> MongoDB
                  {"(mongoose)"}
                </div>
                <div>
                  <span className="text-cyan-600"> {">"} </span> React
                </div>
                <div>
                  <span className="text-cyan-600"> {">"} </span> Tauri
                </div>
                <div>
                  <span className="text-cyan-600"> {">"} </span> Bootstrap
                </div>

                <div>
                  <span className="text-cyan-600"> {">"} </span> SQLite
                </div>

                <div>
                  <span className="text-cyan-600"> {">"} </span> Figma
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
