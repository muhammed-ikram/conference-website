// src/pages/SpeakersPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter'; // Use the simple footer for this page
import DetailedFooter from '../components/DetailedFooter';

// Sample speaker data (replace img URLs with actual speaker images if available)
const speakersData = [
  { name: "Dr. Siva kumar Babu",session:"Session I",affiliation:"Professor Indian Institute of Science Bengaluru, Karnataka ", topic: "Reliability based design of pavements ", img: "https://via.placeholder.com/150/d8d8d8/666666?text=ASB" },
  { name: "Mr. Pothuri Sreenivasulu",session:"Session II",affiliation:"Senior Manager-Subsea Engineering McDermott Asia Pacific Sdn Bhd., Kuala Lumput, Malaysia-50200", topic: "Analysis and Design of Resilient Structures", img: "https://via.placeholder.com/150/d8d8d8/666666?text=AS" },
  { name: "Dr. U Raghu Babu",session:"Session III",affiliation:"Professor, Civil Engineering Department ", topic: "Presentations on  Advanced Concrete Materials ", img: "https://via.placeholder.com/150/d8d8d8/666666?text=BN" },
  //{ name: "Mr. Pothuri Sreenivasulu",session:"Session IV",affiliation:"Senior Manager-Subsea Engineering McDermott Asia Pacific Sdn Bhd., Kuala Lumput, Malaysia-50200", topic: "Presentations on  Resilient Infrastructure", img: "https://via.placeholder.com/150/d8d8d8/666666?text=PD" },
  { name: "Dr. C. Sashidhar",session:"Session V",affiliation:"Professor of Civil Engineering Department, Jawaharlal Technological University Anantapur College of Engineering,  Aantapuram, Andhra Pradesh, India.", topic: "Sustainability of cementitious materials ", img: "https://via.placeholder.com/150/d8d8d8/666666?text=GB" },
  { name: "Dr. N Venkata Ramana",session:"Session VI",affiliation:"Associate Professor, Civil Engineering Department, University BDT College of Engineering, Davanagere, Karnataka. ", topic: "Development of sustainable and durable construction materials ", img: "https://via.placeholder.com/150/d8d8d8/666666?text=GR" },
  // { name: "Dr. U Raghu Babu",session:"Session VII",affiliation:"Professor, Civil Engineering Department ", topic: "Presentations on  Machine Learning Techniques for structural health monitoring ", img: "https://via.placeholder.com/150/d8d8d8/666666?text=JV" },
  { name: "Mr. Prudhvi Raju Viswasa",session:"Session VIII",affiliation:"Territory Manager, UltraTech Cement Pvt Ltd. ", topic: "Interaction with experts from the cement, steel, and construction industries.\nCertificate Presentation and Valedictory ", img: "https://via.placeholder.com/150/d8d8d8/666666?text=MK" },
];

function SpeakersPage() {
  return (
    <div className="speakers-page">
      <h2 className="speakers-page-header-text">Plenary & Keynote Speakers</h2>
      <div className="speakers-grid-container">
        {speakersData.map((speaker, index) => (
          <div key={index} className="speaker-card">
            {/* <h3 className="speaker-card-session">{speaker.session}</h3> */}
            <img src={speaker.img} alt={speaker.name} className="speaker-card-img" />
            <h4 className="speaker-card-name">{speaker.name}</h4>
            <p className="speaker-card-affiliation">{speaker.affiliation}</p>
            {/* <p className="speaker-card-topic">{speaker.topic}</p> */}
          </div>
        ))}
      </div>
      <DetailedFooter />
    </div>
  );
}

export default SpeakersPage;