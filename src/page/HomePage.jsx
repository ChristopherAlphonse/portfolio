import '../index.css';

import {
  About,
  BackTopBtn,
  Contact,
  Footer,
  Hero,
  Projects,
  ResponsiveNavBar,
  TimeLine,
} from '../components/compIndex';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { Suspense, useState } from 'react';

import { Note } from '../components/Note';
import PropagateLoader from 'react-spinners/PropagateLoader';
import TempHero from '../components/TempHero';

const HomePage = () => {
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Christopher Alphonse | Full-Stack Developer | Boston, MA</title>

        <meta
          name='keywords'
          content='Christopher Alphonse, full-stack developer, Boston, MA, software engineer, web development, front-end development, back-end development'
        />

        <meta
          name='description'
          content='Christopher Alphonse is a full-stack developer based in Boston, MA. With experience in front-end and back-end development, Christopher is skilled in using technologies like JavaScript, React, and Node.js to build scalable and effective web applications. Check out his portfolio to learn more about his work and skills.'
        />
      </Helmet>
      <div className=''>
        {loading ? (
          <PropagateLoader
            color='#36c8d6'
            size={20}
            speedMultiplier={2}
            cssOverride={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '100vh',
              width: '100%',
              background: '#18181b',
            }}
          />
        ) : (
          <>
            <Suspense fallback={<div />}>
              <ResponsiveNavBar />

              <Hero />
              <About />
              <TimeLine />
            </Suspense>

            <Suspense fallback={<div />}>
              <TempHero />
              <Note />
            </Suspense>

            <Suspense fallback={<div />}>
              <Contact />
            </Suspense>

            <Suspense fallback={<div />}>
              <Footer />
              <BackTopBtn />
            </Suspense>
          </>
        )}
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
