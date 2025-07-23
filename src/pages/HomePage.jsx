// src/pages/HomePage.js
import React from 'react';
import CountdownSection from '../components/CountdownSection';
import DetailedFooter from '../components/DetailedFooter';

function HomePage() {
  return (
    <>
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

      {/* Countdown Section */}
      <CountdownSection />

      {/* Detailed Footer */}
      <DetailedFooter />
    </>
  );
}

export default HomePage;