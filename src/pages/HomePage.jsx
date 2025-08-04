// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import CountdownSection from "../components/CountdownSection";
import DetailedFooter from "../components/DetailedFooter";
import Sponsors from "../components/Sponsors";

function HomePage({ activePage, onNavigate }) {
  const handleNavLinkClick = (page) => {
    onNavigate(page);
  };

  return (
    <>
      <main className="hero-section">
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', alignItems: 'center' }}>
          <button className="hero-youtube-btn">
            <a href="https://easychair.org/my/login_author?conference=294488&sum=a18fcbbb4280b4cf7be7c3ec4aab6138" target="_blank" rel="noopener noreferrer">
              Register with EasyChair
            </a>
          </button>
          <button className="hero-youtube-btn">
            <a href="https://forms.gle/fn3JipZCwLrWn5Wp9" target="_blank" rel="noopener noreferrer">
              Register with GoogleForm
            </a>
          </button>
        </div>

        <div className="aicte_head">
          <h4>AICTE - Vibrant Advocacy...</h4>
          <h4 style={{ paddingLeft: '12rem', fontSize: '2rem' }}>on</h4>
          <h4>ఎఐసీటీఈ - VAANI...</h4>
        </div>

        <div className="title-telugu">
          <h1 className="hero-title">Next generation construction...</h1>
          <h1 className="hero-title" style={{ fontSize: '3.8rem' }}>
            స్థిరమైన...తదుపరి తరం నిర్మాణం
          </h1>
        </div>

        <p className="hero-slogan">
          "<b className="srit">S</b>ustainable, ..."
        </p>
        <p className="hero-date">18 SEP 2025 - 19 SEP 2025</p>
        <address className="hero-location">Department of Civil & Environmental Engineering...</address>
      </main>

      <CountdownSection />
      <Sponsors />
      <DetailedFooter />
    </>
  );
}


export default HomePage;