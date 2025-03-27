import React, { useState } from "react";
import "../styles/second-question.scss";
import Alert from "./Alert";
import backgroundImage from "../image/second-page-bg.jpeg";
function SecondQuestion({ onBack, onContinue }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleContinue = () => {
    if (!selectedOption) {
      setShowAlert(true);
      return;
    }
    onContinue();
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  // Масив варіантів для вибору
  const options = [
    { id: "work", label: "Sale and CRM", value: "Work" },
    { id: "study", label: "Education", value: "Study" },
    { id: "product-management", label: "Product management", value: "Product management" },
    { id: "market", label: "Marketing", value: "Marketing" },
    { id: "tech", label: "IT", value: "IT" },
    { id: "finance-item", label: "Finance", value: "Finance" },
    { id: "other-item", label: "Other", value: "Other" },
  ];

  return (
    <div className="container-second">
      {showAlert && (
        <Alert
          message="Please select an option before continuing."
          onClose={handleCloseAlert}
        />
      )}
      <section className="choose-what">
        <div className="logo-second">
          <i className="fa-solid fa-lemon"></i>
          <h2 className="hello">Lemon Work Management</h2>
        </div>
        <div className="options-second">
          <legend className="legend-choose">
            Choose, what you would like to manage in the first place
          </legend>
          <p className="paragraph-choose">You can add other elements later</p>
          <fieldset className="checkbox-option-second">
            {options.map((option) => (
              <div className="custom-option" key={option.id}>
                <input
                  type="radio"
                  id={option.id}
                  name="manage"
                  value={option.value}
                  onChange={handleOptionChange}
                />
                <label htmlFor={option.id}>{option.label}</label>
              </div>
            ))}
          </fieldset>
          <div className="btn-container">
            <button className="btn-back" onClick={onBack}>
              <i className="fa-solid fa-chevron-left"></i>
              Back
            </button>
            <button className="btn-continue-second" onClick={handleContinue}>
              Continue
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-photo-second">
      <img className="second-bg" src={backgroundImage} alt="background" />
      </section>
    </div>
  );
}

export default SecondQuestion;
