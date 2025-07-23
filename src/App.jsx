// src/App.js

import React, { useState } from 'react';
import './index.css'; // Global styles

// Components and Pages
import Header from './components/Header';
import VerticalDownloadsButton from './components/VerticalDownloadsButton';
import HomePage from './pages/HomePage';
import CallForPapersPage from './pages/CallForPapersPage';
import SpeakersPage from './pages/SpeakersPage';
import ScheduleTemplatesPage from './pages/ScheduleTemplatesPage';
import RegistrationPage from './pages/RegistrationPage';
import AccommodationPage from './pages/AccommodationPage';
import PublicationsPage from './pages/PublicationsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'call-for-papers', 'speakers', 'schedule', 'registration', 'accommodation', 'publication'

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="app">
      <Header activePage={currentPage} onNavigate={navigateTo} />
       

      {/* Conditionally render the current page component */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'call-for-papers' && <CallForPapersPage />}
      {currentPage === 'speakers' && <SpeakersPage />}
      {currentPage === 'schedule' && <ScheduleTemplatesPage />}
      {currentPage === 'registration' && <RegistrationPage />}
      {currentPage === 'accommodation' && <AccommodationPage />}
      {currentPage === 'publication' && <PublicationsPage />}
    </div>
  );
}

export default App;