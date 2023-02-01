import React from 'react';
import ResumePDF from '../../assets/sample.pdf';

const Resume = () => {
  let className = 'position:absolute;right:0; top:0; bottom:0; width:100%;';
  return (
    <div className="h-[100vh] bg-red-600">
      <div id="pdf">
        <iframe
          className={className}
          src={`${ResumePDF}?#zoom=100&scrollbar=1&toolbar=1&navpanes=1`}
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
