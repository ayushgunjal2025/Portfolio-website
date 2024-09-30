// src/components/Loader.js
import React from 'react';
import './Loader.css'; // Ensure this path is correct
import profileimg from '../assets/profile-pic__2_-removebg-preview.png'; // Ensure this path is correct

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="image-container">
        <img src={profileimg} alt="Loading" className="loader-image" />
      </div>
      <div className="brackets-loader">
        <div className="bracket before">{'{'}</div>
        <div className="bracket after">{'}'}</div>
      </div>
    </div>
  );
};

export default Loader;
