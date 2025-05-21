import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MaintenancePage from './pages/MaintenancePage';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MaintenancePage" element={<MaintenancePage />} />
      </Routes>
    </Router>
  );
}

export default App; 