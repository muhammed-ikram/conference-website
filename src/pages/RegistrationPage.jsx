// src/pages/RegistrationPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter'; // Using the simple footer for consistency

function RegistrationPage() {

  return (
    <div className="registration-page">
      <div className="registration-content-container">
        <h1 className="page-title">NO REGISTRATION FEE</h1>
        
        <h2 className="section-title note-title">
          NOTE: Limited to the first 50 registered participants only
        </h2>

        <h2 className="section-title">Important Dates:</h2>
        <ul>
              <li>Call for Papers Announcement: 30-07-2025</li>
              <li>Full Paper Submission Deadline: 25-08-2025</li>
              <li>Acceptance Notification: 30-08-2025</li>
              <li>Final Camera-Ready Paper Submission: 07-09-2025</li>
              <li>Last Date for Registration: 10-09-2025</li>
            </ul>

        <h2 className="section-title">How to Register:</h2>
        
        <p>Please follow the steps below to complete your registration through the AICTE ATAL Portal:</p>

        <ol className="registration-steps">
            <li>
                Visit: <a href="https://atalacademy.aicte-india.org/login" target="_blank" rel="noopener noreferrer">https://atalacademy.aicte-india.org/login</a>
            </li>
            <li>
                Sign up as a participant (if not already registered) and fill in your profile details.
            </li>
            <li>
                Log in and navigate through the following details:
                <ul className="step-details">
                    <li>Select FDP Type: <strong>VAANI</strong></li>
                    <li>Select Month: <strong>September</strong></li>
                    <li>Select Thrust Area: <strong>Disaster Management & Resilient Infrastructure</strong></li>
                    <li>Select Mode: <strong>Face to Face</strong></li>
                </ul>
            </li>
            <li>
                Register for the program with Application No: <strong>2884843614</strong>, titled “Next Generation Construction with Sustainable and Smart Civil Engineering”.
            </li>
        </ol>
      </div>
      <SimpleFooter />
    </div>
  );
}

export default RegistrationPage;