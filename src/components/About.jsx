import { LazyMotion, domAnimation, m } from "framer-motion";

import React from "react";
import { fadeIn } from "../FramerVariant/variants";

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
                  variants={fadeIn("down")}
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
                  As a programmer with experience in front and back end
                  development, I specialize in creating engaging online user
                  experiences, developing robust servers and databases for
                  website operation, and coding for mobile and desktop
                  platforms. I'm passionate about using my skills and knowledge
                  to create innovative solutions that help businesses and
                  organizations achieve their goals.
                  <br />
                  <br /> I believe that the key to successful programming is a
                  combination of technical expertise and creative
                  problem-solving. By combining these skills, I'm able to create
                  solutions that are not only effective, but also intuitive and
                  user-friendly. I'm excited to continue learning and growing as
                  a programmer, and to continue finding new and innovative ways
                  to solve complex problems.
                  <br />
                  <br />
                  My journey began in early 2022, when I decided to take a leap
                  of faith and signed up for a bootcamp. The boot camp was the
                  first step in my journey to pursuing my passion. I have always
                  loved tinkering with computers, building my own machines and
                  experimenting with different software and settings. However, I
                  never considered pursuing a career in technology because I
                  lacked the formal education and training.
                  <br />
                  <br />
                  But with the encouragement of my friends and mentors, I
                  decided to take the plunge and enroll in the bootcamp. I was
                  excited and nervous, but I knew that this was my chance to
                  make a real change in my life and pursue my dream of working
                  in the tech industry.
                  <br />
                  <br />
                  The bootcamp was intense and challenging, but it was also
                  incredibly rewarding. I learned a huge amount in a short
                  amount of time, and I gained the confidence and skills I
                  needed to start my career in technology.
                  <br />
                  <br />
                  My passion for technology drives me to continuously learn and
                  expand my knowledge, and I have expertise in various
                  technologies such as MERN stack, TypeScript, Tailwind CSS,
                  GraphQL, MySQL, and more. I am dedicated to using my skills to
                  help businesses and organizations achieve their goals through
                  innovative solutions.
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
