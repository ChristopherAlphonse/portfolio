import React from 'react';
import ResumePDF from '../../assets/sample.pdf';

const Resume = () => {
  return (
    <div className="h-[100vh] bg-red-600">
      <div id="pdf">
        <object
          id="pdf_content"
          width="100%"
          height="1500px"
          type="application/pdf"
          trusted="yes"
          application="yes"
          title="Assembly"
          data={`${ResumePDF}?#zoom=100&scrollbar=1&toolbar=1&navpanes=1`}
        >
          <embed
            src={`${ResumePDF}`}
            width="100%"
            height="100%"
            type="application/x-pdf"
            trusted="yes"
            application="yes"
            title="Assembly"
          ></embed>
          <p>System Error - This PDF cannot be displayed, please contact Me.</p>
        </object>
      </div>
    </div>
  );
};

export default Resume;
