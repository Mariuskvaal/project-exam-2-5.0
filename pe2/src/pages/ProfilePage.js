import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeApiCall } from '../api/apiUtils';
import './styles/ProfilePage.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const username = localStorage.getItem('username'); // Retrieve the username from localStorage
  const navigate = useNavigate(); // Use navigate for redirection

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!username) {
          throw new Error('Username not found. Please log in.');
        }

        // Fetch user data using username
        const response = await makeApiCall(`https://v2.api.noroff.dev/holidaze/profiles/${username}`);
        setUserData(response.data); // Access the data property of the response
      } catch (error) {
        console.error('Error fetching user data:', error);
        setErrorMessage('Failed to load profile information.');
      }
    };

    fetchUserData();
  }, [username]);

  const handleLogout = () => {
    // Clear localStorage and redirect to login page
    localStorage.clear();
    navigate('/login');
  };

  if (errorMessage) {
    return <p className="error-message">{errorMessage}</p>;
  }

  if (!userData) {
    return <p className="loading-message">Loading profile...</p>;
  }

  return (
    <div className="profile-page">
      <h2>Welcome, {userData.name}!</h2>
      <div className="profile-details">
        <p><strong>Email:</strong> {userData.email}</p>
        {userData.bio && <p><strong>Bio:</strong> {userData.bio}</p>}
        {userData.avatar && (
          <div className="profile-avatar-section">
            <strong>Avatar:</strong>
            <img src={userData.avatar.url} alt={userData.avatar.alt || 'User Avatar'} className="profile-avatar" />
            <p><strong>Alt Text:</strong> {userData.avatar.alt || 'No alt text available'}</p>
          </div>
        )}
        {userData.banner && (
          <div className="profile-banner-section">
            <strong>Banner:</strong>
            <img src={userData.banner.url} alt={userData.banner.alt || 'User Banner'} className="profile-banner" />
            <p><strong>Alt Text:</strong> {userData.banner.alt || 'No alt text available'}</p>
          </div>
        )}
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;

