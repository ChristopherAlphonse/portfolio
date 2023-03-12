import { Suspense, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropagateLoader from 'react-spinners/PropagateLoader';

import { Profile } from '../assets/index';
import Featured from '../components/Featured/Featured';
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
import '../index.css';

function HomePage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Christopher Alphonse - Software Developer - Boston, MA</title>
        <meta
          name="description"
          content="Christopher Alphonse is a software developer based in Boston, MA who specializes in building (and occasionally designing) exceptional websites and applications."
        />
      </Helmet>
      <div>
        {loading ? (
          <PropagateLoader
            color="#36c8d6"
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
