import React, { useState } from "react";

import '../styles/third-question.scss';
import backgroundImage from "../image/third-page-bg.jpeg";
import Alert from "./Alert"; 

function ThirdQuestion({ onBack, onContinue }) {

  const [selectedOption, setSelectedOption] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleContinue = () => {
    if (!selectedOption) {
      setShowAlert(true);// Сповіщення, якщо варіант не вибрано
      return;
    }
    onContinue(); // Виклик функції переходу, якщо варіант вибрано
  };


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Оновлення стану з вибраною опцією
  };
  

 const handleCloseAlert = () => {
    setShowAlert(false); // Закрити сповіщення
  };

  // Масив варіантів для вибору
  const optionsThird = [
    { id: "project-management", label: "Project management", value: "Project management" },
    { id: "product-management", label: "Portfolio managemen", value: "Portfolio managemen" },
    { id: "goals-strategy", label: "Goals and Strategy", value: "Goals and Strategy" },
    { id: "task-management", label: "Task management", value: "Task management" },
    { id: "knowledge-base", label: "Knowledge base", value: "Knowledge base" },
    { id: "other-item", label: "Other", value: "Other" },
  ];

    return (
        <div className="container-third">
      {showAlert && (
        <Alert 
          message="Please select an option before continuing." 
          onClose={handleCloseAlert} 
        />
      )}
      <section className="main-third">
        <div className="logo-third">
          <i className="fa-solid fa-lemon"></i>
          <h1 className="hello">Lemon Work Management</h1>
        </div>
        <div className="options-third">
          <legend className="legend-third">
            Choose, what you would like to focus on first
          </legend>
          <p className="paragraph-third">Let's get everything set up so that you're comfortable using the platform</p>
      
          <fieldset className="checkbox-option-third">
            {optionsThird.map((option) => (
              <div className="custom-option-third" key={option.id}>
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
          <div className="btn-container-third">
          
            <button className="btn-back" onClick={onBack}>
            <i className="fa-solid fa-chevron-left"></i>
                Back
                </button>

          <button className="btn-continue-third" onClick={handleContinue} >
            Continue
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          </div>
        </div>
      </section>

      <section className="bg-photo-third">
      <img className="third-bg" src={backgroundImage} alt="background" />
      </section>
    </div>
  );
    
}

export default ThirdQuestion;