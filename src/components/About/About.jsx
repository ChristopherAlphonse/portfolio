import { LazyMotion, domAnimation, m } from "framer-motion";
import { fadeIn, transition } from "../../FramerVariant/variants";

import React from "react";

const About = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section
        className="section h-full bg-zinc-800 dark:bg-zinc-50"
        id="about"
      >
        <div className="container mx-auto">
          <m.div
            variants={fadeIn("up")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex flex-col gap-24 xl:flex-row"
          >
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h2 className="before:content-about relative mb-3 font-primary text-4xl font-medium before:absolute before:-top-[2rem] before:hidden before:opacity-40 dark:text-zinc-900  md:text-6xl  lg:font-extrabold before:lg:block xl:text-8xl ">
                  Christopher Alphonse
                </h2>
                <m.p
                  variants={transition("left")}
                  initial="hidden"
                  whileInView={"show"}
                  className="mb-4 text-accent dark:text-blue-600"
                >
                  Full-Stack Software Engineer
                </m.p>
                <hr className="mb-8 opacity-5" />
                <m.p
                  variants={fadeIn("up")}
                  initial="hidden"
                  whileInView={"show"}
                  className="mb-8  text-xl dark:text-zinc-900"
                >
                  As a highly motivated and passionate developer with a strong
                  foundation in front and back end development, I am excited to
                  bring my skills and knowledge to a company where I can make a
                  meaningful contribution and grow as a professional.
                  <br />
                  <br />
                  I have always been drawn to technology and the endless
                  possibilities it offers for innovation and problem-solving.
                  That's why I decided to take a leap of faith and enroll in a
                  bootcamp in early 2022, determined to pursue my dream of
                  working in the tech industry. The bootcamp was intense and
                  demanding, but it was also incredibly rewarding, and I gained
                  the confidence and skills I needed to start my career in
                  technology.
                  <br />
                  <br />
                  Since then, I have been dedicated to continuously learning and
                  expanding my knowledge, and I have expertise in a variety of
                  technologies such as the MERN stack, TypeScript, Tailwind CSS,
                  GraphQL, MySQL, and more. I am confident that my technical
                  skills, combined with my passion for problem-solving and
                  creativity, make me well-suited to contribute to a team of
                  professionals in the tech industry.
                  <br />
                  <br />I am excited to join a company where I can use my skills
                  and knowledge to create innovative solutions and help
                  businesses and organizations achieve their goals. I am eager
                  to continue learning and growing as a developer, and I am
                  committed to staying up-to-date on the latest technologies and
                  trends in the field. I am confident that my passion and
                  dedication will make me a valuable asset to any team.
                </m.p>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};
export default About;
