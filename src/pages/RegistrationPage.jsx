// src/pages/RegistrationPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter'; // Using the simple footer as per the page design

function RegistrationPage() {
  const indianRegistration = [
    { category: "Students (Bachelors, Masters, Ph.D)", regular: "₹6,000/- *" },
    { category: "Attendees/co-authors (Student)", regular: "₹3,540/- *" },
    { category: "Faculty/Scientists/PSU/R&D", regular: "₹10,620/- *" },
    { category: "Industry", regular: "₹12,980/- *" },
    { category: "Additional papers", regular: "₹3,540/- *" },
  ];

  const foreignerRegistration = [
    { category: "Students (Bachelors, Masters, Ph.D)", regular: "US$150/- or ₹13,500/- *" },
    { category: "Attendees/co-authors (Student)", regular: "US$71/- or ₹6,372/- *" },
    { category: "Faculty/Scientists/Researchers", regular: "US$212/- or ₹19,116/- *" },
    { category: "Industry", regular: "US$295/- or ₹26,550/- *" },
    { category: "Additional papers", regular: "US$71/- or ₹6,372/- *" },
  ];

  return (
    <div className="registration-page">
      <div className="registration-content-container">
        <h1 className="page-title">Registration Fee</h1>

        <p>The registration fee for various categories:</p>

        <div className="registration-table-wrapper">
          <table className="registration-table">
            <thead>
              <tr>
                <th>Category (Indian)</th>
                <th>Regular (May 15 2025)</th>
              </tr>
            </thead>
            <tbody>
              {indianRegistration.map((row, index) => (
                <tr key={`indian-${index}`}>
                  <td>{row.category}</td>
                  <td>{row.regular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="registration-table-wrapper">
          <table className="registration-table">
            <thead>
              <tr>
                <th>Category (Foreigner)</th>
                <th>Regular (May 15 2025)</th>
              </tr>
            </thead>
            <tbody>
              {foreignerRegistration.map((row, index) => (
                <tr key={`foreigner-${index}`}>
                  <td>{row.category}</td>
                  <td>{row.regular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>Conference registration fee includes a conference kit, access to all sessions, working lunches, tea and snacks, and a buffet dinner.</p>
        <p>Please note that the registration fee for the workshop is separate from the main conference fee.</p>
        <p>Also, journal publication charges are not included in the conference registration fee. If a paper is recommended and subsequently accepted by an open access journal, the Article Processing Charges (APC) must be borne by the authors.</p>
        <p>*All prices mentioned are Including GST (18%)</p>

        <h2 className="section-title">Registration</h2> {/* This seems to be a redundant heading from the image, placed at the very bottom before the footer. */}
      </div>
      <SimpleFooter />
    </div>
  );
}

export default RegistrationPage;