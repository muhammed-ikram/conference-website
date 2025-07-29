// src/pages/HomePage.js
import React , {useState,useEffect} from 'react';
import CountdownSection from '../components/CountdownSection';
import DetailedFooter from '../components/DetailedFooter';
import Sponsors from '../components/Sponsors';



function HomePage({ activePage, onNavigate }) {

    const handleNavLinkClick = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };


  return (
    <>
      {/* Hero Section */}
      <main className="hero-section">
        <button className="hero-youtube-btn"><a href="https://www.google.com/">Registration</a></button>
        {/* <a href="#registration" className={activePage === 'registration' ? 'active' : ''} onClick={() => handleNavLinkClick('registration')}>Registration</a> */}
        <div className="title-telugu">

        
        <h1 className="hero-title">
          Next generation construction  <br />
          with sustainable, resilient and <br />
          smart civil engineering
        </h1>

        {/* <h1 className="hero-title">
          స్థిరమైన, స్థితిస్థాపకత కలిగిన <br />
          మరియు స్మార్ట్ సివిల్ ఇంజనీరింగ్‌తో <br />
          తదుపరి తరం నిర్మాణం
        </h1> */}
        </div>
        <p className="hero-slogan">
          "<b className='srit'>S</b>ustainable, <b className='srit'>R</b>esilient <b className='srit'>I</b>nnovation for <b className='srit'>T</b>omorrow"
        </p>

        <p className="hero-date">18 SEP 2025 - 19 SEP 2025</p>
        <address className="hero-location">
          Department of Civil & Environmental Engineering, <br />
         Srinivasa Ramanujan Institute of Technology (Autonomous) <br />
          Rotarypuram Village, BKS Mandal, Ananthapuramu. 
        </address>
      </main>

      {/* Countdown Section */}
      <CountdownSection />

     <Sponsors/>

      {/* Detailed Footer */}
      <DetailedFooter />
    </>
  );
}

export default HomePage;