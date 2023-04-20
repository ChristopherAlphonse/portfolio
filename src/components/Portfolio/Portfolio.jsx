import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import DataBase from '../../Data/jumbo.db.json';
import { meta } from '../../Data/compData';

function Portfolio() {
  const data = DataBase;

  return (
    <HelmetProvider>
      <section className="max-w-screen flex h-screen items-center justify-end mt-9">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Portfolio</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="flex h-full items-center pt-8 max-w-full">
          <div className="flex justify-end items-center h-full">
            <ul className="lg:ml-auto max-h-screen">
              {data.map((item) => (
                <li key={item.id} className="text-right lg:text-right">
                  <Link to={`/projects/${item.id}`} className="text-right">
                    <h1 className="text-2xl lg:text-xl font-bold tracking-tighter md:tracking-widest">
                      <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 text-transparent bg-clip-text hover:text-zinc-900 transition-colors duration-500">
                        {item.name}
                      </span>
                    </h1>

                    <p className="text-gray-700 text-xs lg:text-md text-right">{item.short}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default Portfolio;
