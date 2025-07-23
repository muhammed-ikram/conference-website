// src/components/DetailedFooter.js
import React from 'react';
import logo from '../assets/logo-2.png';

// Icon placeholders (using text for now, in a real app you'd use Font Awesome or similar)
const MailIcon = () => <span>✉</span>; // Envelope icon
const PhoneIcon = () => <span>☎</span>; // Phone icon

// Dummy Social Icons (You'd replace these with actual icon library components or SVGs)
const SocialIcon = ({ type }) => {
    switch (type) {
        case 'facebook': return <span>f</span>; // Replace with actual Facebook icon
        case 'twitter': return <span>t</span>;  // Replace with actual Twitter icon
        case 'linkedin': return <span>in</span>; // Replace with actual LinkedIn icon
        case 'instagram': return <span></span>; // Photo camera as Instagram placeholder
        case 'youtube': return <span>▶</span>; // Play button as YouTube placeholder
        default: return null;
    }
}


function DetailedFooter() {
  const departmentLinks = [
    "Computer Science Engineering (CSE)",
    "Electronics and Communications Engineering (ECE)",
    "Mechanical Engineering (MEC)",
    "Civil Engineering (CIV)",
    "Computer Science Engineering- AI & ML (CSM)",
    "Electrical and Electronics Engineering (EEE)",
    "Computer Science and Engineering - Artificial Intelligence & Data Science (CAD)"
  ];

  const socialLinks = [
    { name: "Facebook", iconType: 'facebook', url: "#" },
    { name: "Twitter", iconType: 'twitter', url: "#" },
    { name: "LinkedIn", iconType: 'linkedin', url: "#" },
    { name: "Instagram", iconType: 'instagram', url: "#" },
    { name: "YouTube", iconType: 'youtube', url: "#" },
  ];

  const bottomLinks = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms Of Use", url: "#" }
  ];

  return (
    <footer className="detailed-footer-section">
      <div className="footer-top">
        <div className="footer-departments-section">
          <h3>Departments</h3>
          <div className="footer-departments-grid">
            {departmentLinks.map((link, index) => (
              <a key={index} href={`#department-${index}`}>{link}</a>
            ))}
          </div>
        </div>

        <div className="footer-logo-contact">
          <div className="footer-logo-socials">
            <div className="footer-logo">
              {/* SRIT Logo (Placeholder image/text) */}
              {/* In a real project, replace with actual logo image path */}
              <img src={logo} alt="SRIT Logo" />
              <div className="footer-logo-text-section">
                <strong>Srinivasa Ramanujan <br/> Institute of Technology</strong> <br/> (AUTONOMOUS)
              </div>
            </div>
            <div className="footer-social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label={social.name}>
                  <SocialIcon type={social.iconType} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-contact-and-email">
          <div className="footer-contact-info">
            <address>
              Rotarypuram Village, BK Samudram Mandal, <br/>
              Anantapur District - 515701, AP
            </address>
            <p><PhoneIcon /> 91-951 561 1111</p>
          </div>
          <div className="footer-email-section">
            <p>Please write your Comments, Feedback, Suggestions, Complaints to</p>
            <a href="mailto:hr@srit.ac.in" className="footer-email-address">
              <MailIcon /> hr@srit.ac.in
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <ul>
            {bottomLinks.map((link, index) => (
              <li key={index}><a href={link.url}>{link.name}</a></li>
            ))}
          </ul>
        </div>
        <p className="footer-copyright">
          Copyright © 2007 SRIT. All Rights Reserved. Build with <span style={{color: 'var(--color-digital-gyb-red)'}}>❤</span> by <span className="digital-gyb">Digital GYB.</span>
        </p>
      </div>
    </footer>
  );
}

export default DetailedFooter;