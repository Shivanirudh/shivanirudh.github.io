import React from 'react';
import './CV.css';

const CV = () => {
  const pdfPath = process.env.PUBLIC_URL + '/Resume.pdf';
  return (
    <div className="page">
      <div className="cv-content">
        <h1>My Curriculum Vitae</h1>
        <p>
          Welcome to my CV page! You can download my CV in PDF format using the link below:
        </p>
        <div className="download-link">
          <a href={pdfPath} download="Resume.pdf">Download PDF</a>
        </div>
      </div>
    </div>
  );
};

export default CV;