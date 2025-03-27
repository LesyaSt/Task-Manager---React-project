import React, { useState } from "react";
import "../styles/first-question.scss";
import Alert from "./Alert";
import backgroundImage from "../image/first-page-bg.jpeg";
function FirstQuestion({ onContinue }) {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { id: "work", label: "Work" },
    { id: "personal", label: "Personal" },
    { id: "study", label: "Study" },
    { id: "nonprofit", label: "Non-profit organization" },
  ];

  const handleContinue = () => {
    if (!selectedOption) {
      setShowAlert(true);
      return;
    }
    onContinue();
  };

  return (
    
    <div className="container">
      {showAlert && (
        <Alert 
          message="Please select an option before continuing." 
          onClose={() => setShowAlert(false)} 
        />
      )}
      <section className="why">
        <div className="options">
        <div className="logo">
          <i className="fa-solid fa-lemon"></i>
          <h1 className="hello">Lemon Work Management</h1>
        </div>
          <legend className="legend">Hello, why are you here?</legend>
          <fieldset className="checkbox-option">
            {options.map((option) => (
              <div key={option.id} className="option">
                <input
                  type="radio"
                  id={option.id}
                  name="purpose"
                  value={option.label}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                <label htmlFor={option.id}>{option.label}</label>
              </div>
            ))}
          </fieldset>
          <button className="btn-continue" onClick={handleContinue}>
            Continue
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
       
      </section>
     
      <section className="bg-photo">
      <img className="first-bg" src={backgroundImage} alt="background" />
      </section>
    
    </div>
  );
}

export default FirstQuestion;
