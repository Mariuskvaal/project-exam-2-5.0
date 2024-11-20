import React, { useState, useEffect } from 'react';
import { makeApiCall } from '../api/apiUtils';
import './styles/ProfilePage.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const username = localStorage.getItem('username'); // Retrieve the username from localStorage

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!username) {
          throw new Error('Username not found. Please log in.');
        }

        // Ensure GET request is made
        const response = await makeApiCall(`https://v2.api.noroff.dev/holidaze/profiles/${username}`);
        setUserData(response); // Assuming the response contains user data
      } catch (error) {
        console.error('Error fetching user data:', error);
        setErrorMessage('Failed to load profile information.');
      }
    };

    fetchUserData();
  }, [username]);

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
        {userData.avatar && (
          <div>
            <strong>Avatar:</strong>
            <img src={userData.avatar.url} alt={userData.avatar.alt || 'User Avatar'} className="profile-avatar" />
          </div>
        )}
        {userData.banner && (
          <div>
            <strong>Banner:</strong>
            <img src={userData.banner.url} alt={userData.banner.alt || 'User Banner'} className="profile-banner" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

