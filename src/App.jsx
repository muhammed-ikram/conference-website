// src/App.js

import React from 'react';
import './index.css'; // Import the global styles


// Icon placeholders (using text for now, in a real app you'd use Font Awesome or similar)
const MailIcon = () => <span>✉</span>; // Envelope icon
const FbIcon = () => <span></span>; // Example Unicode or real icon library class
const TwitterIcon = () => <span></span>;
const LinkedInIcon = () => <span></span>;
const InstagramIcon = () => <span></span>;
const YoutubeIcon = () => <span></span>;

function CountdownSection() {
  // As per image, display static "00" values after conference started.
  const timeUnits = [
    { value: '00', label: 'Days' },
    { value: '00', label: 'Hours' },
    { value: '00', label: 'Minutes' },
    { value: '00', label: 'Seconds' },
  ];

  return (
    <section className="countdown-section">
      <h2>The conference started</h2>
      <div className="countdown-grid">
        {timeUnits.map((unit, index) => (
          <div key={index} className="countdown-item">
            <div className="countdown-number">{unit.value}</div>
            <div className="countdown-label">{unit.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FooterSection() {
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
    { name: "Facebook", icon: <FbIcon />, url: "#" },
    { name: "Twitter", icon: <TwitterIcon />, url: "#" },
    { name: "LinkedIn", icon: <LinkedInIcon />, url: "#" },
    { name: "Instagram", icon: <InstagramIcon />, url: "#" },
    { name: "YouTube", icon: <YoutubeIcon />, url: "#" },
  ];

  const bottomLinks = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms Of Use", url: "#" }
  ];

  return (
    <footer className="footer-section">
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
              {/* In a real project, replace with actual logo image */}
              <img src="./assets/logo-2.png" alt="SRIT Logo" />
              {/* <div className="footer-logo-text-section">
                <strong>Srinivasa Ramanujan <br/> Institute of Technology</strong> <br/> (AUTONOMOUS)
              </div> */}
            </div>
            <div className="footer-social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label={social.name}>
                  {social.icon}
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
            <p>☎ 91-951 561 1111</p> {/* Phone icon (text for now) */}
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


function App() {
  return (
    <div className="app">
      {/* Header / Navigation Bar */}
      <header className="header">
        <div className="header-logo-section">
          {/* ICCMS Logo (Text representation, as image cannot be embedded directly) */}
          <div style={{ marginRight: '10px' }}>
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="10" cy="10" r="5" fill="#5AA63C" />
              <circle cx="20" cy="10" r="5" fill="#FFB200" />
              <circle cx="30" cy="10" r="5" fill="#DA5C55" />
              <circle cx="15" cy="20" r="5" fill="#884FC3" />
              <circle cx="25" cy="20" r="5" fill="#3D8EDC" />
              <circle cx="20" cy="30" r="5" fill="#CC5200" />
            </svg>
          </div>
          <div>
            <span className="header-logo-text">ICCMS</span>
            <div className="header-logo-subtitle">
              3rd, 3rd-5th July 2025, IIT Tirupati, India
              <br/>Third International Conference on
              <br/>Construction Materials and Structures
            </div>
          </div>
        </div>

        <nav className="header-nav-links">
          <ul>
            <li><a href="#call-for-papers">Call for Papers</a></li>
            <li><a href="#speakers" className="has-dropdown">Speakers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="#registration">Registration</a></li>
            <li><a href="#accommodation">Accommodation</a></li>
            <li><a href="#workshop">Workshop</a></li>
            <li><a href="#publication">Publication</a></li>
            <li><a href="#plan-your-visit" className="has-dropdown">Plan your visit</a></li>
          </ul>
        </nav>

        <a href="#downloads" className="header-download-btn">DOWNLOADS</a>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <button className="hero-youtube-btn">YouTube Live</button>

        <h1 className="hero-title">
          Third International Conference on <br />
          Construction Materials and <br />
          Structures
        </h1>

        <p className="hero-slogan">
          "Synergy of Materials and Structures"
        </p>

        <p className="hero-date">03-05 July 2025</p>
        <address className="hero-location">
          Department of Civil & Environmental Engineering, <br />
          Indian Institute of Technology (IIT) Tirupati, Andhra Pradesh, <br />
          India
        </address>
      </main>

      {/* New Countdown Section */}
      <CountdownSection />

      {/* New Footer Section */}
      <FooterSection />
    </div>
  );
}

export default App;