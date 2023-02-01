import React from 'react';
import ResumePDF from '../../assets/Christopher_Alphonse.docx.pdf';

const Resume = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: 'red' }}>
      <div id="pdf">
        <iframe
          style={{ height: '100vh', width: '100vw', position: 'absolute' }}
          src={`${ResumePDF}#zoom=FitH`}
          border="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
