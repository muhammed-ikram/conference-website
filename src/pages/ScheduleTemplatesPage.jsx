// src/pages/ScheduleTemplatesPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter'; // Using the simple footer as per the image
import DetailedFooter from '../components/DetailedFooter';


// 1. Import the PDF file you saved
import posterTemplatePdf from '../assets/pdf/NCSRSC_2025_Paper_Template.pdf';

function ScheduleTemplatesPage() {
  return (
    <div className="schedule-templates-page">
      <div className="schedule-templates-container">

        {/* Conference Photos Section */}
        <section className="section-box conference-photos-section">
          <h2>Conference photos</h2>
          <button className="schedule-btn">Conference photos</button>
        </section>

        {/* Conference Schedule Section */}
        <section className="section-box conference-schedule-section">
          <h2>Conference schedule</h2>

          <div className="schedule-grid">

            <h3>Will be Updated soon..... <br />Stay Tuned</h3>

            
            {/* Pre- & Post-Conference */}
            {/* <button className="schedule-btn full-width">Pre-Conference workshop (2nd July 2025)</button>
            <button className="schedule-btn full-width">Post-Conference workshop (6th July 2025)</button> */}

            {/* Oral vs. Poster for 3rd July */}
            {/* <button className="schedule-btn">3rd July 2025 oral presentation</button>
            <button className="schedule-btn">3rd July 2025 poster presentation</button> */}

            {/* Oral vs. Poster for 4th July */}
            {/* <button className="schedule-btn">4th July 2025 oral presentation</button>
            <button className="schedule-btn">4th July 2025 poster presentation</button> */}

            {/* Oral vs. Poster for 5th July */}
            {/* <button className="schedule-btn">5th July 2025 oral presentation</button>
            <button className="schedule-btn">5th July 2025 poster presentation</button> */}

            {/* Online Presentations */}
            {/* <div className="schedule-online-buttons">
              <button className="schedule-btn">3rd July 2025 online presentations</button>
              <button className="schedule-btn">4th July 2025 online presentations</button>
              <button className="schedule-btn">5th July 2025 online presentations</button>
            </div> */}
          </div>
        </section>

        {/* Templates Section */}
        <section className="section-box templates-section">
          <h2>Templates</h2>
          <div className="templates-list">
            {/* 2. Change the button to an anchor (<a>) tag pointing to the imported PDF */}
            {/* <a 
              href={posterTemplatePdf} 
              className="template-btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Poster Template
            </a> */}
            <a 
              href="https://drive.google.com/file/d/1BnznTgxw0mvm_rNfTk7wd4i9TtBocTHV/view?usp=sharing"
              className="template-btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Poster Template
            </a>
            
            {/* <button className="template-btn">Extended Abstract Template Word File</button> */}
          </div>
        </section>

      </div>
      <DetailedFooter/>
    </div>
  );
}

export default ScheduleTemplatesPage;