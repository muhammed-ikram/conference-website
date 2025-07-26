// utils/countdown.js (if you create a separate file)
// or just put this function at the top of CountdownSection.js
export function calculateTimeRemaining(targetDate) {
  const now = new Date();
  const target = new Date(targetDate); // Accepts various date string formats

  // If the target date has passed, set all to 0
  if (now > target) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      hasStarted: true, // Indicate that the event has started/passed
    };
  }

  const difference = target.getTime() - now.getTime(); // Difference in milliseconds

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
    hasStarted: false,
  };
}