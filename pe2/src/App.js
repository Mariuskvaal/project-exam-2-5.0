import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';

// Importing each page component
import Home from './pages/Home';
import Login from './pages/login';
import VenuPageSpecific from './pages/Venupage-specific';
import VenuPage from './pages/Venupage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/venue-specific" element={<VenuPageSpecific />} />
        <Route path="/venue" element={<VenuPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


