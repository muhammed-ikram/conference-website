// src/components/DetailedFooter.js
import React from 'react';
import logo from '../assets/logo-sm.jpg';

function DetailedFooter() {
  // This component's structure is correct for the horizontal layout.
  // The display is controlled by the CSS.

  return (
    <footer className="detailed-footer-section">
      <div className="footer-srit">
          <div className="logo-footer-srit">
              <div className="footer-logo">
                  <a href='https://www.srit.ac.in/'>
                    <img src={logo} alt="SRIT Logo" />
                  </a>
              </div>
              <div className="footer-logo-text-section">
                <strong>Srinivasa Ramanujan </strong> 
                <strong>Institute of Technology <br />
                (AUTONOMOUS)</strong>
                <address>Rotarypuram Village, BK Samudram Mandal,Anantapur District – 515701, AP</address>
              </div>
          </div>
      </div>
    </footer>
  );
}

export default DetailedFooter;