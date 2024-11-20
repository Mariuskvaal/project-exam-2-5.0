import React, { useState } from 'react';
import { registerUser } from '../../pages/register';
import Modal from '../modal/Modal'; // Import the Modal component
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
    avatarUrl: '',
    avatarAlt: '',
    bannerUrl: '',
    bannerAlt: '',
    venueManager: false,
  });
  const [successModal, setSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        bio: formData.bio,
        avatar: formData.avatarUrl
          ? { url: formData.avatarUrl, alt: formData.avatarAlt }
          : undefined,
        banner: formData.bannerUrl
          ? { url: formData.bannerUrl, alt: formData.bannerAlt }
          : undefined,
        venueManager: formData.venueManager,
      };

      await registerUser(userData);
      setSuccessModal(true); // Show the modal on successful registration
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessModal(false);
    }
  };

  const handleCloseModal = () => {
    setSuccessModal(false);
    setFormData({
      name: '',
      email: '',
      password: '',
      bio: '',
      avatarUrl: '',
      avatarAlt: '',
      bannerUrl: '',
      bannerAlt: '',
      venueManager: false,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Bio:</label>
          <textarea name="bio" value={formData.bio} onChange={handleChange} maxLength="160" />
        </div>
        <div>
          <label>Avatar URL:</label>
          <input type="url" name="avatarUrl" value={formData.avatarUrl} onChange={handleChange} />
        </div>
        <div>
          <label>Avatar Alt Text:</label>
          <input type="text" name="avatarAlt" value={formData.avatarAlt} onChange={handleChange} maxLength="120" />
        </div>
        <div>
          <label>Banner URL:</label>
          <input type="url" name="bannerUrl" value={formData.bannerUrl} onChange={handleChange} />
        </div>
        <div>
          <label>Banner Alt Text:</label>
          <input type="text" name="bannerAlt" value={formData.bannerAlt} onChange={handleChange} maxLength="120" />
        </div>
        <div>
          <label>Venue Manager:</label>
          <input type="checkbox" name="venueManager" checked={formData.venueManager} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>

      {/* Display the Modal if successModal is true */}
      {successModal && (
        <Modal
          title="Registration Successful"
          message="You have successfully registered!"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default RegisterForm;

