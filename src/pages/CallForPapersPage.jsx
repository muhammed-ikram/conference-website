// src/pages/CallForPapersPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter';
import DetailedFooter from '../components/DetailedFooter';

function CallForPapersPage() {
  const theme1 = [
    "New-age construction materials",
    "Innovations in materials processing",
    "Advances in characterization",
    "Special concretes",
    "Construction techniques and automation"
  ];

  const theme2 = [
    "Advancements in structural systems",
    "Special structures",
    "Structural performance under Hazardous loadings",
    "Computational mechanics / Numerical simulation",
    "Design advancement"
  ];

  const theme3 = [
    "Corrosion science & Durability issues",
    "Structural health monitoring",
    "Strengthening / Retrofitting techniques",
    "AI and Machine Learning in structural applications",
    "Smart sensors"
  ];

  return (
    <div className="call-for-papers-page">
      <div className="cfp-content">
        <p className="cfp-intro-text">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            Third International Conference on "Construction Materials and Structures" (ICCMS-2025)
          </span>{' '}
          is meticulously planned to muster innovative ideas from researchers, scientists, academicians,
          industry professionals and students. Abstracts not exceeding 600 words should be submitted through
          the Easy Chair portal as per the template provided.
        </p>
        <p className="cfp-themes-heading">Papers should be submitted only on the following themes:</p>

        <div className="cfp-themes-grid">
          <div className="cfp-theme-column">
            <h4>Theme 1<br />Advances in construction materials and technology</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="cfp-theme-column">
            <h4>Theme 2<br />Structural systems and performance assessment</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="cfp-theme-column">
            <h4>Theme 3<br />Structural health monitoring, retrofitting and smart technologies</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme3.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cfp-buttons-container">
          <button className="cfp-btn">GET THE TEMPLATES</button>
          <button className="cfp-btn">SUBMIT ABSTRACT</button>
        </div>
      </div>

      <DetailedFooter />
    </div>
  );
}

export default CallForPapersPage;