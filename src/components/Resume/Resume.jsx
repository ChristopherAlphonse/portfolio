import React from 'react';
import resume from '../../files/Resume.pdf';

function Resume() {
  return (
    <div className="w-full h-screen mt-12">
      <embed className="w-full h-full " src={resume} type="application/pdf" />
    </div>
  );
}

export default Resume;
