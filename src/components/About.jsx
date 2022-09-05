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
             
              <p className="mb-8 text-gray-700/75 text-sm md:text-[16px] container mx-auto">
                I'm a software engineer with experience using JavaScript
                libraries and frameworks for full stack development. I have a
                great enthusiasm for creating and interacting with technology.
                I'm a positive person who appreciates being very hands-on. I
                worked in the pharmaceutical business for 4 years before
                deciding it was time to pursue my interest in tech, where I can
                explore prospects and share my enthusiasm for technology. I just
                finished a rigorous 14-week coding boot program that improved my
                understanding of full-stack software development. I'm eager to
                contribute my talents and knowledge to a team that is vibrant
                and cooperative. I'm looking forward to joining a mission-driven
                firm that prioritizes making a good impact via the development
                of new technology and services.
              </p>
              <h1 className="text-center pb-6 text-gray-700 font-italic md:text-xl mb-5">
                Tools | Libraries | Framework
              </h1>

              <div className="grid grid-cols-2 gap-4 text-sm md:text-[16px]">
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
