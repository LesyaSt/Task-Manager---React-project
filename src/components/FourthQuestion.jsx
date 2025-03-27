import React, { useState} from "react";

import '../styles/fourth-question.scss';

import Alert from "./Alert";
import backgroundImage from "../image/four-page-bg.jpeg";

function FourthQuestion({onBack, onContinue}) {
// Масив варіантів для вибору
const optionsFourth = [
  { id: "youTube-option", label: "You Tube", value: "You Tube" },
  { id: "advertising", label: "Ads", value: "Ads" },
  { id: "face-inst", label: "Facebook / Instagram", value: "Facebook / Instagram" },
  { id: "tv-streaming", label: "TV / Streaming", value: "TV / Streaming" },
  { id: "linkedin", label: "LinkdIn", value: "LinkdIn" },
  { id: "friends-family", label: "Friend / Family", value: "Friend / Family" },
  { id: "other-item", label: "Other", value: "Other" },
];
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
    return (
        <div className="container-fourth">
      {showAlert && (
        <Alert 
          message="Please select an option before continuing." 
          onClose={handleCloseAlert} 
        />
      )}
      <section className="fourth-main">
        <div className="logo-fourth">
          <i className="fa-solid fa-lemon"></i>
          <h2 className="hello">Lemon Work Management</h2>
        </div>
        <div className="options-fourth">
          <legend className="legend-fourth">
            One last question: how did you hear about us?
          </legend>
          <p className="paragraph-fourth">Let's get everything set up so that you're comfortable using the platform</p>
          <fieldset className="checkbox-option-fourth">
            {optionsFourth.map((option) => (
              <div className="custom-option-fourth" key={option.id}>
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
          
          
          <div className="btn-container-fourth">
          
            <button className="btn-back-fourth" onClick={onBack}>
            <i className="fa-solid fa-chevron-left"></i>
                Back
                </button>

          <button className="btn-continue-fourth" onClick={handleContinue} >
            Continue
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          </div>
        </div>
      </section>

      <section className="bg-photo-fourth">
      <img className="fourth-bg" src={backgroundImage} alt="background" />
      </section>
    </div>
  );
    
}

export default FourthQuestion;