// src/components/CountdownSection.js
import React, { useState, useEffect } from 'react';

// --- Helper function for countdown logic (can be moved to utils/countdown.js) ---
function calculateTimeRemaining(targetDateString) {
  const now = new Date();
  const target = new Date(targetDateString);

  if (isNaN(target.getTime())) { // Check for invalid date
    console.error("Invalid targetDateString provided to calculateTimeRemaining:", targetDateString);
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isFinished: true,
      hasError: true
    };
  }

  const difference = target.getTime() - now.getTime(); // Difference in milliseconds

  // If the target date has passed
  if (difference <= 0) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isFinished: true,
      hasError: false
    };
  }

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return {
    total: difference,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    isFinished: false,
    hasError: false
  };
}
// --------------------------------------------------------------------------------

function CountdownSection() {
  // Set the target date for September 18, 2025 at midnight (00:00:00) local time
  const targetDate = "2025-09-18T00:00:00"; // ISO format for consistent parsing

  // State to store the time remaining
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    // Exit if the target date has an error or is already finished on mount
    if (timeLeft.isFinished || timeLeft.hasError) {
      return;
    }

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeRemaining(targetDate);
      setTimeLeft(newTimeLeft);

      // Clear interval if countdown finishes
      if (newTimeLeft.isFinished) {
        clearInterval(timer);
      }
    }, 1000); // Update every second

    // Cleanup function: Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [targetDate, timeLeft.isFinished, timeLeft.hasError]); // Re-run effect if targetDate or finished status changes

  // Function to add leading zero if number is single digit
  const formatNumber = (num) => String(num).padStart(2, '0');

  const timeUnits = [
    { value: formatNumber(timeLeft.days), label: 'Days' },
    { value: formatNumber(timeLeft.hours), label: 'Hours' },
    { value: formatNumber(timeLeft.minutes), label: 'Minutes' },
    { value: formatNumber(timeLeft.seconds), label: 'Seconds' },
  ];

  return (
    <section className="countdown-section">
      {/* Dynamic header based on countdown status */}
      <h2>
        {timeLeft.isFinished && !timeLeft.hasError
          ? "The conference started"
          : timeLeft.hasError
          ? "Countdown Error"
          : "Conference starts in"}
      </h2>
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