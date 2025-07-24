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
          Next generation construction  <br />
          with sustainable, resilient and <br />
          smart civil engineering
        </h1>

        <p className="hero-slogan">
          "Synergy of Materials and Structures"
        </p>

        <p className="hero-date">03-05 July 2025</p>
        <address className="hero-location">
          Department of Civil & Environmental Engineering, <br />
         Srinivasa Ramanujan Institute of Technology (Autonomous) <br />
          Rotarypuram Village, BKS Mandal, Ananthapuramu. 
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