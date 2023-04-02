import { Helmet, HelmetProvider } from 'react-helmet-async';

import { meta } from '../Data/compData';
import '../index.css';

function PageNotFound() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <>
        <section
          id="section1"
          className="max-w-screen flex h-screen items-center justify-center  overflow-hidden bg-zinc-900 py-32 dark:bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0"
        >
          <div className="container mx-auto h-full">
            <div className="flex h-full items-center pt-8">
              <div className="flex flex-1 flex-col items-center lg:items-center">
                <h1 className="text-4xl font-bold leading-[44px] dark:text-zinc-500 md:text-6xl md:leading-tight md:tracking-[-2px] lg:text-7xl lg:leading-[1.2] xl:text-9xl">
                  404 | The page you are looking for does not exist.
                </h1>

                <a href="/" className="btn-holder ">
                  <button type="button" className="hero-btn hero-btn-3 hover-border-2 focus-none">
                    <span href="/"> Return Home</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </HelmetProvider>
  );
}
export default PageNotFound;
