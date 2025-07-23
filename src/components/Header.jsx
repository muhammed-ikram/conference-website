// src/components/Header.js
import React, { useState, useEffect } from 'react';

function Header({ activePage, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = activePage === 'home';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  // Add/remove no-scroll class on body when mobile menu state changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup function to ensure class is removed on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);


  return (
    <header className="header">
      <div className="header-logo-section">
        {/* ICCMS Logo (Text representation, as image cannot be embedded directly) */}
        <div style={{ marginRight: '10px' }} onClick={() => handleNavLinkClick('home')}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="10" cy="10" r="5" fill="#5AA63C" />
            <circle cx="20" cy="10" r="5" fill="#FFB200" />
            <circle cx="30" cy="10" r="5" fill="#DA5C55" />
            <circle cx="15" cy="20" r="5" fill="#884FC3" />
            <circle cx="25" cy="20" r="5" fill="#3D8EDC" />
            <circle cx="20" cy="30" r="5" fill="#CC5200" />
          </svg>
        </div>
        <div onClick={() => handleNavLinkClick('home')}>
          <span className="header-logo-text">ICCMS</span>
          <div className="header-logo-subtitle">
            3rd, 3rd-5th July 2025, IIT Tirupati, India
            <br/>Third International Conference on
            <br/>Construction Materials and Structures
          </div>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          ☰ {/* Unicode for hamburger icon */}
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="header-nav-links">
        <ul>
          <li><a href="#call-for-papers" className={activePage === 'call-for-papers' ? 'active' : ''} onClick={() => handleNavLinkClick('call-for-papers')}>Call for Papers</a></li>
          <li><a href="#speakers" className={activePage === 'speakers' ? 'active has-dropdown' : 'has-dropdown'} onClick={() => handleNavLinkClick('speakers')}>Speakers</a></li>
          <li><a href="#schedule" className={activePage === 'schedule' ? 'active' : ''} onClick={() => handleNavLinkClick('schedule')}>Schedule</a></li>
          <li><a href="#registration" className={activePage === 'registration' ? 'active' : ''} onClick={() => handleNavLinkClick('registration')}>Registration</a></li>
          <li><a href="#accommodation" className={activePage === 'accommodation' ? 'active' : ''} onClick={() => handleNavLinkClick('accommodation')}>Accommodation</a></li>
          <li><a href="#publication" className={activePage === 'publication' ? 'active' : ''} onClick={() => handleNavLinkClick('publication')}>Publication</a></li>
        </ul>
      </nav>


      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>

      {/* Mobile Navigation Menu */}
      <nav className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleMobileMenu}>×</div> {/* Close button */}
        <ul>
          <li><a href="#call-for-papers" className={activePage === 'call-for-papers' ? 'active' : ''} onClick={() => handleNavLinkClick('call-for-papers')}>Call for Papers</a></li>
          <li><a href="#speakers" className={activePage === 'speakers' ? 'active' : ''} onClick={() => handleNavLinkClick('speakers')}>Speakers</a></li>
          <li><a href="#schedule" className={activePage === 'schedule' ? 'active' : ''} onClick={() => handleNavLinkClick('schedule')}>Schedule</a></li>
          <li><a href="#registration" className={activePage === 'registration' ? 'active' : ''} onClick={() => handleNavLinkClick('registration')}>Registration</a></li>
          <li><a href="#accommodation" className={activePage === 'accommodation' ? 'active' : ''} onClick={() => handleNavLinkClick('accommodation')}>Accommodation</a></li>
          <li><a href="#publication" className={activePage === 'publication' ? 'active' : ''} onClick={() => handleNavLinkClick('publication')}>Publication</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;