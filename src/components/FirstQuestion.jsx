import React, { useState } from "react";

// import "./Survey";
import "../styles/first-question.scss";

import Alert from "./Alert"; 

function FirstQuestion({onContinue}) {
  const [showAlert, setShowAlert] = useState(false);
  const handleContinue = () => {
    if (!selectedOption) {
      setShowAlert(true); // Сповіщення, якщо варіант не вибрано
      return;
    }
    onContinue(); // Виклик функції переходу, якщо варіант вибрано
  };

  const [selectedOption, setSelectedOption] = useState("");
//   const [isFirstQuestionVisible, setIsFirstQuestionVisible] = useState(true);


//   const handleContinue = () => {
//     if (!selectedOption) {
//       alert("Please select an option before continuing.");
//       return;
//     }
//     // The logic of continuation
//     // При натисканні кнопки "Продовжити" приховати перше питання
//     setIsFirstQuestionVisible(false);
//   };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // Update the state with the selected option
  };

//   if (!isFirstQuestionVisible) {
//     return <SecondQuestion />; // Показати друге питання, якщо перше не видиме
// }
const handleCloseAlert = () => {
  setShowAlert(false); // Закрити сповіщення
};
  return (
    
    <div className="container">
      {showAlert && (
        <Alert 
          message="Please select an option before continuing." 
          onClose={handleCloseAlert} 
        />
      )}
      <section className="survey">
      <div className="logo">
    <i className="fa-solid fa-lemon"></i>
    <h2 className="hello">Lemon Work Management</h2>
  </div>
        <div className="options">
          <legend className="legend">Hello, why are you here?</legend>
          <fieldset className="checkbox-option">
            <div className="option1">
              <div className="custom-work">
                <input
                  type="radio"
                  id="work"
                  name="purpose"
                  value="Work"
                  className="work"
                  onChange={handleOptionChange}
                />
                <label htmlFor="work">Work</label>
              </div>
            </div>

            <div className="option2">
              <div className="custom-personal">
                <input
                  type="radio"
                  id="personal"
                  name="purpose"
                  value="Personal"
                  className="personal"
                  onChange={handleOptionChange}
                />
                <label htmlFor="personal">Personal</label>
              </div>
            </div>

            <div className="option3">
              <div className="custom-study">
                <input
                  type="radio"
                  id="study"
                  name="purpose"
                  value="Study"
                  className="study"
                  onChange={handleOptionChange}
                />
                <label htmlFor="study">Study</label>
              </div>
            </div>
<br />
            <div className="option4">
              <div className="custom-nonprofit">
                <input
                  type="radio"
                  id="nonprofit-organization"
                  name="purpose"
                  value="Non-profit organization"
                  className="nonprofit"
                  onChange={handleOptionChange}
                />
                <label htmlFor="nonprofit-organization">
                  Non-profit organization
                </label>
              </div>
            </div>
          </fieldset>
          <button className="btn-continue" onClick={handleContinue}>
            Continue
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </section>

      <section>
        <div className="friend">
          
        </div>
      </section>
    </div>
  );
}

export default FirstQuestion;
