// src/pages/PublicationsPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter'; // Using the simple footer as per the page design
import DetailedFooter from '../components/DetailedFooter';

const journalsData = [
  {
    image: "https://via.placeholder.com/100x140/999999/FFFFFF?text=Next+Sustain", // Placeholder for "Next Sustainability"
    title: "Next Sustainability, Elsevier",
    details: ""
  },
  {
    image: null,
    title: "Engineering Proceedings, MDPI - Open access",
    details: "Indexed in Scopus"
  },
  {
    image: null,
    title: "Material Proceedings, MDPI - Open access",
    details: "Indexed in Google Scholar"
  },
  {
    image: null,
    title: "Facta Universitatis, Series: Architecture and Civil Engineering",
    details: "To be indexed in Scopus and Google Scholar (soon)"
  },
  {
    image: null,
    title: "Materials Circular Economy, Springer",
    details: ""
  },
  {
    image: null,
    title: "International Journal of Structural Engineering, Inter science Publishers",
    details: "Indexed in Scopus"
  },
  {
    image: null,
    title: "Journal of Intelligent Construction",
    details: ""
  },
  {
    image: "https://via.placeholder.com/100x140/228B22/FFFFFF?text=Des+%26+Cons", // Placeholder for "Journal of Structural Design"
    title: "Journal of Structural Design and Construction Practice, ASCE",
    details: ""
  },
  {
    image: null,
    title: "Buildings, MDPI",
    details: ""
  },
  {
    image: "https://via.placeholder.com/100x140/B0E0E6/666666?text=Env+Science", // Placeholder for "Environmental Science"
    title: "Environmental Science and Pollution Research, Springer",
    details: ""
  },
  {
    image: null,
    title: "Structural Durability & Health Monitoring",
    details: "Indexed in Scopus & EI-Compendex"
  },
  {
    image: null,
    title: "Journal of Building Design and Environment, Science Exploration",
    details: ""
  },
  {
    image: null,
    title: "Low-carbon Materials and Green Construction, Springer",
    details: ""
  },
  {
    image: null,
    title: "Progress in Engineering Science, Elsevier",
    details: ""
  },
  {
    image: null,
    title: "Research on Engineering Structures and Materials, Indexed in Scopus",
    details: ""
  },
];

function PublicationsPage() {
  return (
    <div className="publications-page">
      <div className="publications-content-container">
        <h1 className="page-title">Publications</h1>
        <h3 className="page-title">UPDATES WILL BE EXCOMMUNICATED SOON....</h3>

        {/* <p className="publications-intro-text">Selected best papers from the conference will be recommended for peer review and possible publication in the following journals.</p>
        <p className="publications-intro-text">Acceptance of an abstract and its presentation at the conference does not guarantee journal publication. Only high-quality papers will be recommended for peer review in the associated journals.</p>

        <div className="journal-grid">
          {journalsData.map((journal, index) => (
            <div key={index} className={`journal-item ${!journal.image ? 'text-only' : ''}`}>
              {journal.image && <img src={journal.image} alt={journal.title} className="journal-image" />}
              <h4 className="journal-title">{journal.title}</h4>
              {journal.details && <p className="journal-details">{journal.details}</p>}
            </div>
          ))}
        </div>

        <p className="publications-footer-text">More journals will be updated soon</p> */}
      </div>
      <DetailedFooter />
    </div>
  );
}

export default PublicationsPage;