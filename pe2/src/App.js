import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createApiKey } from './api/apiKey'; // Import the function
import Header from './components/header/header';
import RegisterForm from './components/form/RegisterForm';
import LoginForm from './components/form/LoginForm';
import Home from './pages/Home';
import VenuPageSpecific from './pages/Venupage-specific';
import VenuPage from './pages/Venupage';
import Contact from './pages/Contact';
import ProfilePage from './pages/ProfilePage'; // Ensure ProfilePage is imported

function App() {
  useEffect(() => {
    const initializeApiKey = () => {
      const apiKey = '64bacf3c-53b7-43bf-9260-ccec3e99b027'; // Your static API key
      localStorage.setItem('apiKey', apiKey);
      console.log('Static API Key stored:', apiKey);
    };
  
    initializeApiKey();
  }, []);
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/venue" element={<VenuPage />} />
        <Route path="/venue/:id" element={<VenuPageSpecific />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;



