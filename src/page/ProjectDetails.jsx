import { Helmet, HelmetProvider } from 'react-helmet-async'
import React, { Suspense, useState } from 'react'

import PropagateLoader from 'react-spinners/PropagateLoader'
import { ResponsiveNavBar } from '../components/head'
import { projectsData } from '../data'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])

  const { id } = useParams()

  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Christopher Alphonse | {id}</title>

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
              background: ' #3f3f46 '
            }}
          />
        ) : (
          <>
            <Suspense fallback={<div />}>
              <ResponsiveNavBar />

              <section className="containerr flex h-[100vh] items-center overflow-hidden bg-zinc-800 py-32 dark:bg-slate-50 lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0">
                {projectsData
                  .filter((z) => z.id === id)
                  .map((z) => {
                    return (
                      <section className="bg-white dark:bg-gray-900" key={z.id}>
                        <div className="mx-auto max-w-screen-xl items-center gap-16 py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                          <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                              {z.name}
                            </h2>
                            <p className="mb-4">{z.description2}</p>
                            <p>{z.stack}</p>
                          </div>
                          <div className="mt-8 grid grid-cols-2 gap-4">
                            <img
                              className="w-full rounded-lg"
                              src={z.image}
                              alt={z.name}
                            />
                          </div>
                        </div>
                      </section>
                    )
                  })}
              </section>
            </Suspense>
          </>
        )}
      </div>
    </HelmetProvider>
  )
}

export default ProjectDetails
