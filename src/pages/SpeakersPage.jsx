// src/pages/SpeakersPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter'; // Use the simple footer for this page

// Sample speaker data (replace img URLs with actual speaker images if available)
const speakersData = [
  { name: "Dr. Alexander S. Brand", affiliation: "VIRGINIA TECH, US", img: "https://via.placeholder.com/150/d8d8d8/666666?text=ASB" },
  { name: "Ms. Alpa Sheth", affiliation: "MD, VMS CONSULTANTS PVT. LTD, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=AS" },
  { name: "Dr. Balthasar Novák", affiliation: "UNIVERSITY OF STUTTGART, GERMANY", img: "https://via.placeholder.com/150/d8d8d8/666666?text=BN" },
  { name: "Dr. P. Dinakar", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY BHUBANESWAR, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=PD" },
  { name: "Ms. Garima Bansal", affiliation: "DGM, TATA CONSULTING ENGINEERS LTD, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=GB" },
  { name: "Dr. Gianluca Ranzi", affiliation: "THE UNIVERSITY OF SYDNEY, AUSTRALIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=GR" },
  { name: "Dr. Jittin Varghese", affiliation: "RESEARCH ENGINEER, SAINT-GOBAIN RESEARCH INDIA, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=JV" },
  { name: "Dr. Manish Kumar", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY GANDHINAGAR, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=MK" },
  { name: "Dr. Manu Santhanam", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY MADRAS, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=MSa" },
  { name: "Dr. Martin Mensinger", affiliation: "TECHNICAL UNIVERSITY OF MUNICH, GERMANY", img: "https://via.placeholder.com/150/d8d8d8/666666?text=MM" },
  { name: "Dr. Mike Schlaich", affiliation: "TU BERLIN, GERMANY", img: "https://via.placeholder.com/150/d8d8d8/666666?text=MiS" },
  { name: "Dr. G. V. R. Murty", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY MADRAS, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=GVR" },
  { name: "Dr. Narayanan Neithalath", affiliation: "ARIZONA STATE UNIVERSITY, USA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=NN" },
  { name: "Dr. Radhakrishna G. Pillai", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY MADRAS, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=RP" },
  { name: "Mr. Rajeev Goel", affiliation: "SENIOR VICE PRESIDENT, ASIAN PAINTS LTD, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=RG" },
  { name: "Dr. Ravi Sinha", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY BOMBAY, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=RS" },
  { name: "Dr. Ravindra Gettu", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY MADRAS, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=RGe" },
  { name: "Dr. Satish Jain", affiliation: "MD, UHPC INDIA PVT. LTD. INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=SJ" },
  { name: "Mr. K. Senthilinathan", affiliation: "EXECUTIVE VICE PRESIDENT, L&T CONSTRUCTION, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=KS" },
  { name: "Ms. Sneha Redla", affiliation: "DIRECTOR, AARVEE ASSOCIATES, INDIA.", img: "https://via.placeholder.com/150/d8d8d8/666666?text=SR" },
  { name: "Dr. Sree Nanukuttan", affiliation: "QUEEN'S UNIVERSITY BELFAST,", img: "https://via.placeholder.com/150/d8d8d8/666666?text=SN" },
  { name: "Dr. K. V. L. Subramaniam", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY HYDERABAD, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=KVLS" },
  { name: "Dr. Sudharshan N. Raman", affiliation: "MONASH UNIVERSITY, MALAYSIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=SNR" },
  { name: "Dr. S. Suriya Prakash", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY HYDERABAD, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=SSP" },
  { name: "Dr. T. Tafsiojjaman", affiliation: "THE UNIVERSITY OF ADELAIDE, AUSTRALIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=TT" },
  { name: "Dr. Vaibhav Singhal", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY PATNA, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=VSi" },
  { name: "Dr. Vasant matsagar", affiliation: "INDIAN INSTITUTE OF TECHNOLOGY DELHI, INDIA", img: "https://via.placeholder.com/150/d8d8d8/666666?text=VM" },
  { name: "Dr. Venkatesh Kodur", affiliation: "MICHIGAN STATE UNIVERSITY, US", img: "https://via.placeholder.com/150/d8d8d8/666666?text=VK" },
];

function SpeakersPage() {
  return (
    <div className="speakers-page">
      <h2 className="speakers-page-header-text">Plenary & Keynote Speakers</h2>
      <div className="speakers-grid-container">
        {speakersData.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <img src={speaker.img} alt={speaker.name} className="speaker-card-img" />
            <h4 className="speaker-card-name">{speaker.name}</h4>
            <p className="speaker-card-affiliation">{speaker.affiliation}</p>
          </div>
        ))}
      </div>
      <SimpleFooter />
    </div>
  );
}

export default SpeakersPage;