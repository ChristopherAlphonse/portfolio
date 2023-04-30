import { Helmet, HelmetProvider } from 'react-helmet-async';

import React from 'react';
import { meta } from '../../Data/compData';
import resume from '../../files/Resume.pdf';

function Resume() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> {meta.title} | Resume</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="w-full h-screen mt-12">
        <embed className="w-full h-full " src={resume} type="application/pdf" />
      </div>
    </HelmetProvider>
  );
}

export default Resume;
