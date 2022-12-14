import '../index.css'

import {
  About,
  BackTopBtn,
  Contact,
  Footer,
  Hero,
  Projects
} from '../components/compIndex'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import React, { Suspense, useState } from 'react'

import PropagateLoader from 'react-spinners/PropagateLoader'
import { ResponsiveNavBar } from '../components/Head'

const HomePage = () => {
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [])

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>
          Christopher Alphonse | Full Stack Developer, Software Engineer, Front
          end & App Developer.
        </title>

        <meta
          name="description"
          content=" I specialize in designing and building amazing digital experiences that are both functional and engaging.
          At the moment, I'm concentrating on learning new technologies and improving human-centered services ."
        />
      </Helmet>
      <div className="">
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
              background: '#18181b'
            }}
          />
        ) : (
          <>
            <Suspense fallback={<div />}>
              <ResponsiveNavBar />

              <Hero />
              <About />
            </Suspense>

            <Suspense fallback={<div />}>
              <Projects />
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
  )
}

export default HomePage
