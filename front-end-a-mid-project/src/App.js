// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import AddExperienceRealtime from './components/AddExperienceRealtime';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <AddExperienceRealtime />
    </div>
  );
}

export default App;
