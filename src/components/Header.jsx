// src/components/Header.js
import React from 'react';

function Header({ activePage, onNavigate }) {
  const isHomePage = activePage === 'home';

  return (
    <header className="header">
      <div className="header-logo-section" onClick={() => onNavigate('home')} style={{cursor: 'pointer'}}>
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
          <li><a href="#call-for-papers" className={activePage === 'call-for-papers' ? 'active' : ''} onClick={() => onNavigate('call-for-papers')}>Call for Papers</a></li>
          <li><a href="#speakers" className={activePage === 'speakers' ? 'active has-dropdown' : 'has-dropdown'} onClick={() => onNavigate('speakers')}>Speakers</a></li>
          <li><a href="#schedule" className={activePage === 'schedule' ? 'active' : ''} onClick={() => onNavigate('schedule')}>Schedule</a></li>
          <li><a href="#registration" className={activePage === 'registration' ? 'active' : ''} onClick={() => onNavigate('registration')}>Registration</a></li>
          <li><a href="#accommodation" className={activePage === 'accommodation' ? 'active' : ''} onClick={() => onNavigate('accommodation')}>Accommodation</a></li>
          {/* New Publication Link */}
          <li><a href="#publication" className={activePage === 'publication' ? 'active' : ''} onClick={() => onNavigate('publication')}>Publication</a></li>
         
        </ul>
      </nav>

    
    </header>
  );
}

export default Header;