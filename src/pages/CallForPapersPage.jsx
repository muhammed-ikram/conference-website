// src/pages/CallForPapersPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter';
import DetailedFooter from '../components/DetailedFooter';

function CallForPapersPage() {
  const theme1 = [
    
    "Climate-resilient and disaster-resistant infrastructure design",
    "Reliability-based approaches in pavements and structural systems",
    "Retrofitting and rehabilitation of aging civil infrastructure",
    "Resilient transportation systems for extreme environmental conditions",
  ];

  const theme2 = [
    "High-performance, fiber-reinforced, and eco-friendly concretes",
    "Utilization of recycled, waste, and industrial by-product materials",
    "Low-carbon cement alternatives and sustainable binders",
    "Lifecycle performance and durability studies of construction materials"
    
  ];

  const theme3 = [
    "AI and Machine Learning in structural health monitoring",
    "Digital twins, BIM, and predictive modeling in infrastructure",
    "GIS, UAVs, and sensor technologies in planning and monitoring",
    "Automation and robotics in smart construction systems",
  ];

  const theme4 = [
    "Intelligent Transportation Systems (ITS) and traffic management",
    "Sustainable pavement design, materials, and performance modeling",
    "Integration of public transport and multimodal planning",
    "Smart mobility and low-emission transportation infrastructure",
  ];

  const theme5 = [
    "Frameworks and policies for sustainable urban and transport development",
    "Promoting SDGs and sustainability in civil engineering education",
    "Community participation and disaster risk reduction strategies",
    "Governance models for smart and green infrastructure implementation",
  ];

  return (
    <div className="call-for-papers-page">
      <div className="cfp-content">
        <p className="cfp-intro-text">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            About the Conference: (ICCMS-2025) <br />
          </span>{' '}
          The Department of Civil Engineering at Srinivasa Ramanujan Institute of Technology (Autonomous), Ananthapuramu, is proud to host a National Conference under the AICTE – VAANI (Vibrant Advocacy for Advancement and Nurturing of Indian Languages) Scheme, titled:
        </p>
        <h4 class ="dialog">Next Generation Construction with Sustainable, Resilient, and Smart Civil Engineering" (NCSRSC–2025)</h4> <br />
        <p className="cfp-themes-heading">Papers should be submitted only on the following themes:</p>

        <div className="cfp-themes-grid">
          <div className="cfp-theme-column">
            <h4>Theme 1<br />Sustainable and Resilient Infrastructure</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme1.map((item, index) => (
                <li key={index}> 	&#xf105; {item}</li>
              ))}
            </ul>
          </div>

          <div className="cfp-theme-column">
            <h4>Theme 2<br />Green and Advanced Construction Materials</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme2.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div>

          <div className="cfp-theme-column">
            <h4>Theme 3<br />Smart Technologies and Digitalization in Civil Engineering</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme3.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div>

          <div className="cfp-theme-column">
            <h4>Theme 4<br />Sustainable Transportation and Mobility Solutions</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme4.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div>

          <div className="cfp-theme-column">
            <h4>Theme 5<br />Policy, Governance, and Education for Sustainable Development</h4>
            <ul style={{ counterReset: 'list-item' }}>
              {theme5.map((item, index) => (
                <li key={index}>&#xf105; {item}</li>
              ))}
            </ul>
          </div>
        </div>

        

        

        

        {/* <div className="cfp-buttons-container">
          <button className="cfp-btn">GET THE TEMPLATES</button>
          <button className="cfp-btn">SUBMIT ABSTRACT</button>
        </div> */}
      </div>

      <DetailedFooter />
    </div>
  );
}

export default CallForPapersPage;