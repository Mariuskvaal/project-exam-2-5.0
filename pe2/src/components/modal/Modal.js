// components/Modal.js
import React from 'react';
import './Modal.css'; // Add some styles for the modal

const Modal = ({ title, message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;
