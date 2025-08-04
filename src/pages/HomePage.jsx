// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import CountdownSection from "../components/CountdownSection";
import DetailedFooter from "../components/DetailedFooter";
import Sponsors from "../components/Sponsors";

function HomePage({ activePage, onNavigate }) {
  const handleNavLinkClick = (page) => {
    onNavigate(page);
    // setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <>
      {/* Hero Section */}
      <main className="hero-section">
        <button className="hero-youtube-btn">
          <a href="https://easychair.org/my/login_author?conference=294488&sum=a18fcbbb4280b4cf7be7c3ec4aab6138">
            Register with EasyChair
          </a>
        </button>
        <button className="hero-youtube-btn">
          <a href=" https://forms.gle/fn3JipZCwLrWn5Wp9">
            Register with GoogleForm
          </a>
        </button>


        <div className="aicte_head">
          <div>
            <h4>AICTE - Vibrant Advocacy for Advancement <br />
          and Nurturing of Indian Languages (VAANI)</h4><br />
          <h4 style={{ paddingLeft: '12rem', fontSize: '2rem' }}>on</h4><br />
          </div>
          

          <div>
            <h4>ఎఐసీటీఈ - VAANI (భారతీయ భాషల అభివృద్ధి మరియు <br />
              పోషణ కోసం ఉత్సాహభరితమైన వాదన)</h4><br />
          </div> 

        </div>
        


        
        <div className="title-telugu">
          <h1 className="hero-title">
            Next generation construction <br />
            with sustainable, resilient and <br />
            smart civil engineering
          </h1>
          
          
          {/* This div groups the two Telugu sections so they can be aligned properly */}
          {/* <div> <h4>
              ఎఐసీటీఈ - VAANI (భారతీయ భాషల అభివృద్ధి మరియు <br />
              పోషణ కోసం ఉత్సాహభరితమైన వాదన)
            </h4>
            <br />
                  <br /></div> */}
         
          <div>  
                 
            <h1 className="hero-title" style={{ fontSize: '3.8rem' }}>
              స్థిరమైన, స్థితిస్థాపకత కలిగిన <br />
              మరియు స్మార్ట్ సివిల్ ఇంజనీరింగ్‌తో <br />
              తదుపరి తరం నిర్మాణం
            </h1>
          </div>


        </div>
        <p className="hero-slogan">
          "<b className="srit">S</b>ustainable, <b className="srit">R</b>
          esilient <b className="srit">I</b>nnovation for{" "}
          <b className="srit">T</b>omorrow"
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

      <Sponsors />

      {/* Detailed Footer */}
      <DetailedFooter />
    </>
  );
}

export default HomePage;