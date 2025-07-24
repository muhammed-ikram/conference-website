// src/pages/AccommodationPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter'; // Use the simple footer
import DetailedFooter from '../components/DetailedFooter';

// Link icon placeholder (using unicode character for now)
const LinkIcon = () => <span></span>;

const hotelData = [
  {
    name: "Marasa Sarovar",
    travelTime: "45 Minutes",
    imgSrc: "https://via.placeholder.com/300x180/ADD8E6/666666?text=Hotel+Marasa" // Example placeholder image
  },
  {
    name: "Ekante Bliss",
    travelTime: "40 Minutes",
    imgSrc: "https://via.placeholder.com/300x180/D8BFD8/666666?text=Hotel+Ekante"
  },
  {
    name: "Golden Tulip",
    travelTime: "45 Minutes",
    imgSrc: "https://via.placeholder.com/300x180/F0E68C/666666?text=Golden+Tulip"
  },
  {
    name: "Starlit Suites",
    travelTime: "40 Minutes",
    imgSrc: "https://via.placeholder.com/300x180/C0C0C0/666666?text=Starlit+Suites"
  },
  {
    name: "Kences Tirupati",
    travelTime: "40 Minutes",
    imgSrc: "https://via.placeholder.com/300x180/9ACD32/666666?text=Kences+Tirupati"
  },
  {
    name: "Fortune Select Grand Ridge",
    travelTime: "35 Minutes",
    imgSrc: "https://via.placeholder.com/300x180/A9A9A9/666666?text=Fortune+Ridge"
  },
  {
    name: "Republic Inn",
    travelTime: "40 Minutes",
    imgSrc: "https://via.placeholder.com/300x180/FFB6C1/666666?text=Republic+Inn"
  },
  {
    name: "MGM Grand, Srikalahasti",
    travelTime: "25 Minutes",
    imgSrc: "https://via.placeholder.com/300x180/87CEEB/666666?text=MGM+Grand"
  },
];

function AccommodationPage() {
  return (
    <div className="accommodation-page">
      <div className="accommodation-content-container">
        <h1 className="section-heading">Accommodation in campus</h1>
        <p>Registered participants can avail the facility of hostel accommodation within the <strong>campus (from 1st July 2025 - 7th July 2025) at a nominal charge of Rs. 300 per day</strong>. The hostel accommodation includes a cot, a bed sheet, a mattress and a pillow.</p>
        <p>Regarding dining options, <strong>lunch will be provided to all registered participants</strong> on the conference days. Breakfast and dinner can be availed by paying directly at the campus mess.</p>
        <p><strong>We look forward to welcoming you to ICCMS 2025!</strong></p>
        <p>Please note that <strong>online presentation slots are limited</strong> and will be allotted only to participants with <strong>valid reasons</strong>, primarily based on their <strong>distance from IIT Tirupati</strong>.</p>
        <p>Please note that the deadline for accommodation registration is June 5, 2025.</p>

        {/* This "Registration" section title and text seems duplicated or slightly misplaced from the registration page
            in the original image. I'll include it exactly as it appears. */}
        <h1 className="section-heading">Registration</h1>
        <p>All <strong>Offline participants</strong>, regardless of their preferred accommodation choice, are <strong>required to fill out this form.</strong></p>

        <h2 className="section-heading">Accommodation within Tirupati</h2>
        <p>Accommodation registration closed</p>

        <div className="hotel-card-grid">
          {hotelData.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <img src={hotel.imgSrc} alt={hotel.name} className="hotel-card-img" />
              <div className="hotel-card-content">
                <h3 className="hotel-card-name">{hotel.name}</h3>
                <p className="hotel-card-travel">TRAVEL TIME TO CONFERENCE VENUE : {hotel.travelTime}</p>
                <a href="#link-to-hotel" aria-label={`Link to ${hotel.name} website`} className="hotel-card-link-icon">
                  <LinkIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DetailedFooter/>
    </div>
  );
}

export default AccommodationPage;