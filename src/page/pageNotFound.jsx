import '../index.css';
import './notfound.css';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import { meta } from '../Data/compData';

function PageNotFound() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <>
        <section className="body max-w-screen flex h-screen items-center justify-center  overflow-hidden bg-zinc-900 py-32 dark:bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat lg:py-0">
          <div className="container mx-auto h-full">
            <div className="flex h-full items-center pt-8">
              <div className="flex flex-1 flex-col items-center lg:items-center">
                <h1 className="h1">404</h1>
                <span>The page you are looking for does not exist.</span>
                <a href="/" className="btn-holder ">
                  <button type="button" className="px-2 py-2 bg-zinc-600 hover:bg-zinc-700">
                    <span href="/" className="text-zinc-100">
                      {' '}
                      Return Home
                    </span>
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
