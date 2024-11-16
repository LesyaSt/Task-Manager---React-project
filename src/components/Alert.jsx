// Alert.js
import React from "react";
import '../styles/alert.scss'; // Імпортуємо стилі для сповіщення

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-container">
        <div className="container">
        <div className="paragraph" >
        <p>{message}</p>
        </div>
      <div className="alert">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
      </div>
      </div>
    
  );
};

export default Alert;