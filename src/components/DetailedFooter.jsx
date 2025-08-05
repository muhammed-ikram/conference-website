// src/components/DetailedFooter.js
import React from 'react';
import logo from '../assets/logo-sm.jpg';

function DetailedFooter() {
  return (
    <footer className="detailed-footer-section">
      <div className="footer-container">
        {/* Contact Section - Left Side */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><strong>Name:</strong> Dr. U Raghu Babu</p>
          <p><strong>Phone:</strong> +91 91779 64984</p>
          <p><strong>Email: </strong>ncsrsc2025@srit.ac.in</p>
        </div>

        {/* Institute Info - Right Side */}
        <div className="footer-srit">
          <div className="logo-footer-srit">
            <div className="footer-logo">
              <img src={logo} alt="SRIT Logo" />
            </div>
            <div className="footer-logo-text-section">
              <strong>Srinivasa Ramanujan</strong>
              <strong>Institute of Technology <br />(AUTONOMOUS)</strong>
              <address>
                Rotarypuram Village, BK Samudram Mandal,<br />
                Anantapur District – 515701, AP
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default DetailedFooter;
