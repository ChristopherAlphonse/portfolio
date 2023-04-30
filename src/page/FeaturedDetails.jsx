import { Helmet, HelmetProvider } from 'react-helmet-async';

import { useParams } from 'react-router-dom';
import Data from '../Data/jumbo.db.json';
import { meta } from '../Data/compData';

function FeaturedDetails() {
  const { id } = useParams();
  const project = Data.find((item) => item.id === id);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {meta.title} | {id}
        </title>
        <meta name="description" content={project.description} />
      </Helmet>
      <section className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <img src={`images/${project.id}.jpg`} alt={project.name} />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
            <p className="mb-4">{project.description}</p>
            {project.stack && (
              <>
                <h3 className="text-lg font-bold mb-2">Tech Stack</h3>
                <ul className="list-disc ml-8">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            <a
              href={project.view}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-lg font-bold underline"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default FeaturedDetails;
