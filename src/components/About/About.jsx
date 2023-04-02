import { Helmet, HelmetProvider } from 'react-helmet-async';

import { LazyMotion, domAnimation, m } from 'framer-motion';

import { meta } from '../../Data/compData';
import { fadeIn, transition } from '../../FramerVariant/variants';

function About() {
  return (
    <HelmetProvider>
      <LazyMotion features={domAnimation}>
        <section className="section h-full bg-zinc-800 dark:bg-zinc-50" id="about">
          <Helmet>
            <meta charSet="utf-8" />
            <title> {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <div className="container mx-auto">
            <m.div
              variants={fadeIn('up')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="flex flex-col gap-24 xl:flex-row"
            >
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="flex flex-col">
                  <h2 className="before:content-about relative mb-3 font-primary text-4xl font-medium before:absolute before:-top-[2rem] before:hidden before:opacity-40 dark:text-zinc-900  md:text-6xl  lg:font-extrabold before:lg:block xl:text-8xl ">
                    About Me
                  </h2>
                  <m.p
                    variants={transition('left')}
                    initial="hidden"
                    whileInView="show"
                    className="mb-4 text-accent dark:text-blue-600"
                  >
                    Full-Stack Software Engineer
                  </m.p>
                  <hr className="mb-8 opacity-5" />
                  <m.p
                    variants={fadeIn('up')}
                    initial="hidden"
                    whileInView="show"
                    className="mb-8  text-xl dark:text-zinc-900"
                  >
                    I am a software developer with 1 year experience. My passion for software development started when I
                    wrote my first Hello World program in HTML. Since then, I have gained a wide range of skills and
                    expertise in various technologies and programming languages, including JavaScript, TypeScript, and
                    React.
                    <br />
                    <br />
                    I have always been drawn to technology and the endless possibilities it offers for innovation and
                    problem-solving. That&apos;s why I decided to take a leap of faith and enroll in a bootcamp in early
                    2022, determined to pursue my dream of working in the tech industry. The bootcamp was intense and
                    demanding, but it was also incredibly rewarding, and I gained the confidence and skills I needed to
                    start my career in technology.
                    <br />
                    <br />
                    Since then, I have been dedicated to continuously learning and expanding my knowledge, and I have
                    expertise in a variety of technologies such as the MERN stack, TypeScript, Tailwind CSS, GraphQL,
                    MySQL, and more. I am confident that my technical skills, combined with my passion for
                    problem-solving and creativity, make me well-suited to contribute to a team of professionals in the
                    tech industry.
                    <br />
                    <br />
                  </m.p>
                </div>
              </div>
            </m.div>
          </div>
        </section>
      </LazyMotion>
    </HelmetProvider>
  );
}
export default About;
