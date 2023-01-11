import "../index.css";

import {
  About,
  BackTopBtn,
  Contact,
  Footer,
  Hero,
  Projects,
  ResponsiveNavBar,
  TimeLine,
} from "../components/compIndex";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Suspense, useMemo, useState } from "react";

import Featured from "../components/Featured/Featured";
import { Profile } from "../assets/index";
import PropagateLoader from "react-spinners/PropagateLoader";

function HomePage() {
  const [loading, setLoading] = useState(false);

  useMemo(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Christopher Alphonse | Software Developer | Boston, MA</title>
        <meta
          name="description"
          content="Christopher Alphonse is a full-stack developer based in Boston, MA who is skilled in using technologies like JavaScript, React, and Node.js to build scalable and effective web applications. As a new developer with a passion for technology and a strong foundation in front-end and back-end development, I am eager to use my skills and knowledge to create innovative solutions for businesses and organizations. My expertise includes the MERN stack, TypeScript, Tailwind CSS, GraphQL, and MySQL. Check out my portfolio to learn more about my work and skills."
        />
        <meta
          name="keywords"
          content="developer, chris alphonse, christopher developer boston, technology, front end development, back end development, MERN stack, TypeScript, Tailwind CSS, GraphQL, MySQL,full-stack developer, Boston, MA, front-end development, back-end development, JavaScript, React, Node.js, web applications, MERN stack, TypeScript, Tailwind CSS, GraphQL, MySQL, portfolio, skills, entry level javascript developer,junior javascript developer, node js debugger, react developers, Christopher Alphonse Boston, Christopher Alphonse developer, Christopher Alphonse engineer,Christopher Alphonse full stack, Christopher Alphonse software engineer, Christopher Alphonse LinkedIn, Christopher Alphonse GitHub, Christopher Alphonse Twitter, Christopher Alphonse facebook, Christopher Alphonse Tiktok, Christopher Alphonse Codepen, software engineer Boston, full-stack developer Boston, front-end developer Boston, back-end developer Boston, software developer Boston, web development Boston, software engineer services,  full-stack development services Boston,front-end development services Boston, back-end development services Boston, software engineer jobs"
        />
        <meta
          property="og:title"
          content="Christopher Alphonse | Software Developer | Boston, MA"
        />
        <meta
          property="og:description"
          content="I am a new developer with a passion for technology and a strong foundation in front and back end development. I am eager to use my skills and knowledge to create innovative solutions for businesses and organizations. I have expertise in various technologies such as the MERN stack, TypeScript, Tailwind CSS, GraphQL, MySQL, and more."
        />
        <meta property="og:image" content={Profile} />
        <meta
          property="twitter:title"
          content="Christopher Alphonse | Software Developer | Boston, MA"
        />
        <meta
          property="twitter:description"
          content="Christopher Alphonse is a full-stack developer based in Boston, MA who is skilled in using technologies like JavaScript, React, and Node.js to build scalable and effective web applications. As a new developer with a passion for technology and a strong foundation in front-end and back-end development, I am eager to use my skills and knowledge to create innovative solutions for businesses and organizations. My expertise includes the MERN stack, TypeScript, Tailwind CSS, GraphQL, and MySQL. Check out my portfolio to learn more about my work and skills."
        />
        <meta property="twitter:image" content={Profile} />
        <meta name="author" content="Christopher Alphonse" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://christopheralphonse.com/v1/" />
        <meta property="og:url" content="https://christopheralphonse.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Christopher Alphonse" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="christopheralphonse" />
        <meta property="twitter:creator" content="Christopher Alphonse" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Christopher Alphonse" />
        <meta httpEquiv="content-type" content="text/html" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="copyright"
          content="Copyright 2022. All rights reserved for Christopher Alphonse"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="apple-mobile-web-app-title"
          content="Christopher Alphonse"
        />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Helmet>
      <div>
        {loading ? (
          <PropagateLoader
            color="#36c8d6"
            size={20}
            speedMultiplier={2}
            cssOverride={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              minHeight: "100vh",
              width: "100%",
              background: "#18181b",
            }}
          />
        ) : (
          <>
            <Suspense fallback={<div />}>
              <ResponsiveNavBar />
            </Suspense>
            <Suspense fallback={<div />}>
              <BackTopBtn />
            </Suspense>
            <Suspense fallback={<div />}>
              <Hero />
            </Suspense>
            <Suspense fallback={<div />}>
              <About />
            </Suspense>
            <Suspense fallback={<div />}>
              <TimeLine />
            </Suspense>
            <Suspense fallback={<div />}>
              <Featured />
            </Suspense>
            <Suspense fallback={<div />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<div />}>
              <Contact />
            </Suspense>
            <Suspense fallback={<div />}>
              <Footer />
            </Suspense>
          </>
        )}
      </div>
    </HelmetProvider>
  );
}
export default HomePage;
