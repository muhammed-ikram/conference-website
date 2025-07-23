// src/components/CountdownSection.js
import React from 'react';

function CountdownSection() {
  // As per image, display static "00" values after conference started.
  const timeUnits = [
    { value: '00', label: 'Days' },
    { value: '00', label: 'Hours' },
    { value: '00', label: 'Minutes' },
    { value: '00', label: 'Seconds' },
  ];

  return (
    <section className="countdown-section">
      <h2>The conference started</h2>
      <div className="countdown-grid">
        {timeUnits.map((unit, index) => (
          <div key={index} className="countdown-item">
            <div className="countdown-number">{unit.value}</div>
            <div className="countdown-label">{unit.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CountdownSection;