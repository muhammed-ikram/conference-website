// src/pages/AccommodationPage.js
import React from "react";
import SimpleFooter from "../components/SimpleFooter"; // Use the simple footer
import DetailedFooter from "../components/DetailedFooter";

// Link icon placeholder (using unicode character for now)
const LinkIcon = () => <span></span>;

const hotelData = [
  {
    name: "Marasa Sarovar",
    travelTime: "45 Minutes",
    imgSrc:
      "https://via.placeholder.com/300x180/ADD8E6/666666?text=Hotel+Marasa", // Example placeholder image
  },
  {
    name: "Ekante Bliss",
    travelTime: "40 Minutes",
    imgSrc:
      "https://via.placeholder.com/300x180/D8BFD8/666666?text=Hotel+Ekante",
  },
  {
    name: "Golden Tulip",
    travelTime: "45 Minutes",
    imgSrc:
      "https://via.placeholder.com/300x180/F0E68C/666666?text=Golden+Tulip",
  },
  {
    name: "Starlit Suites",
    travelTime: "40 Minutes",
    imgSrc:
      "https://via.placeholder.com/300x180/C0C0C0/666666?text=Starlit+Suites",
  },
  {
    name: "Kences Tirupati",
    travelTime: "40 Minutes",
    imgSrc:
      "https://via.placeholder.com/300x180/9ACD32/666666?text=Kences+Tirupati",
  },
  {
    name: "Fortune Select Grand Ridge",
    travelTime: "35 Minutes",
    imgSrc:
      "https://via.placeholder.com/300x180/A9A9A9/666666?text=Fortune+Ridge",
  },
  {
    name: "Republic Inn",
    travelTime: "40 Minutes",
    imgSrc:
      "https://via.placeholder.com/300x180/FFB6C1/666666?text=Republic+Inn",
  },
  {
    name: "MGM Grand, Srikalahasti",
    travelTime: "25 Minutes",
    imgSrc: "https://via.placeholder.com/300x180/87CEEB/666666?text=MGM+Grand",
  },
];

function AccommodationPage() {
  return (
    <div className="accommodation-page">
      <div className="accommodation-content-container">
        <h1 className="section-heading">Committee Members</h1>

        <ul>
          <h4>Chief Patron</h4>
          <li>Smt. J. Padmavathy, Chairperson, SRIT.</li>
          <li>Sri. A. Sambasiva Reddy, Correspondent, SRIT.</li>
          <li>Dr. M. Ranjit Reddy, Vice-President, SRIT.</li>
          <br />

          <h4>Patron</h4>
          <li>Dr. G. Balakrishna, Principal, SRIT</li>
          <br />

          <h4>Convener & Coordinator:</h4>
          <li>Dr. U. Raghu Babu, Professor, Department of CE, SRIT.</li>

          <br />

          <h4>Co-Coordinator:</h4>
          <li>Prof. T. Chinna Venkata Reddy, HOD, Department of CE, SRIT.</li>
          <br />

          <h4>Advisor Committee</h4>
          <li>Prof. N.Venkata Ramana, CE, VTU, Karnataka.</li>
          <li>Er. G. Suresh Kumar, Region Head, Technical, UltraTech Cement Ltd.</li>
          <li>Mr. Sandeep Gupta, General Manager (Sales), Jai Raj Ispat, India.</li>
          <li>Er. V. Prudhvi Raju, Territory Manager, Customer Solutions, UltraTech Cement Ltd.</li>
          <li>Mr. Vaibhav Thadeshwar, Distributor for Jai Raj Attot, Andhra Pradesh.</li>
          <li>Dr.P Chitralingappa, CSD, SRIT</li>
          <li>Dr.G. Hemanth Kumar Yadav, CSD,SRIT</li>

          <br />

          <h4>Steering Committee:</h4>
          <li>Mrs. D. Lakshmi Shireesha. Assistant Professor</li>
          <li>Dr. K. Mahaboob Peera, Associate Professor</li>
          <li>Dr. S. Hariprasad Reddy, Associate Professor</li>
          <li>Mrs. T. A. Swathi, Assistant Professor</li>
          <li>Mr. P. Venkata Suneel, Assistant Professor</li>
          <li>Ms. M. Rachel, Assistant Professor</li>
          <li>Mr. A Surendra, Assistant Professor</li>
          <li>Mrs P Naga Lakshmi, Assistant Professor</li>

        </ul>
        {/* <p>Registered participants can avail the facility of hostel accommodation within the <strong>campus (from 1st July 2025 - 7th July 2025) at a nominal charge of Rs. 300 per day</strong>. The hostel accommodation includes a cot, a bed sheet, a mattress and a pillow.</p>
        <p>Regarding dining options, <strong>lunch will be provided to all registered participants</strong> on the conference days. Breakfast and dinner can be availed by paying directly at the campus mess.</p>
        <p><strong>We look forward to welcoming you to ICCMS 2025!</strong></p>
        <p>Please note that <strong>online presentation slots are limited</strong> and will be allotted only to participants with <strong>valid reasons</strong>, primarily based on their <strong>distance from IIT Tirupati</strong>.</p>
        <p>Please note that the deadline for accommodation registration is June 5, 2025.</p>

        {/* This "Registration" section title and text seems duplicated or slightly misplaced from the registration page
            in the original image. I'll include it exactly as it appears. */}
        {/* <h1 className="section-heading">Registration</h1>
        <p>All <strong>Offline participants</strong>, regardless of their preferred accommodation choice, are <strong>required to fill out this form.</strong></p>

        <h2 className="section-heading">Accommodation within Tirupati</h2>
        <p>Accommodation registration closed</p> */}

        {/* <div className="hotel-card-grid">
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
        </div> */}
      </div>
      <DetailedFooter />
    </div>
  );
}

export default AccommodationPage;
