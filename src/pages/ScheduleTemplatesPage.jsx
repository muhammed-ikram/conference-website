// src/pages/ScheduleTemplatesPage.js
import React from 'react';
import SimpleFooter from '../components/SimpleFooter'; // Using the simple footer as per the image

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
          <p className="subtitle">Final updated Schedule</p>

          <div className="schedule-grid">
            {/* Pre- & Post-Conference */}
            <button className="schedule-btn full-width">Pre-Conference workshop (2nd July 2025)</button>
            <button className="schedule-btn full-width">Post-Conference workshop (6th July 2025)</button>

            {/* Oral vs. Poster for 3rd July */}
            <button className="schedule-btn">3rd July 2025 oral presentation</button>
            <button className="schedule-btn">3rd July 2025 poster presentation</button>

            {/* Oral vs. Poster for 4th July */}
            <button className="schedule-btn">4th July 2025 oral presentation</button>
            <button className="schedule-btn">4th July 2025 poster presentation</button>

            {/* Oral vs. Poster for 5th July */}
            <button className="schedule-btn">5th July 2025 oral presentation</button>
            <button className="schedule-btn">5th July 2025 poster presentation</button>

            {/* Online Presentations */}
            <div className="schedule-online-buttons">
              <button className="schedule-btn">3rd July 2025 online presentations</button>
              <button className="schedule-btn">4th July 2025 online presentations</button>
              <button className="schedule-btn">5th July 2025 online presentations</button>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="section-box templates-section">
          <h2>Templates</h2>
          <div className="templates-list">
            <button className="template-btn">Poster Template</button>
            <button className="template-btn">Presentation Template</button>
            <button className="template-btn">Abstract Template Word File</button>
            <button className="template-btn">Extended Abstract Template Word File</button>
          </div>
        </section>

      </div>
      <SimpleFooter />
    </div>
  );
}

export default ScheduleTemplatesPage;