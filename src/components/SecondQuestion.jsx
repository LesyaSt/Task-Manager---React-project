import React, { useState } from "react";

// import "./Survey";
import "../styles/second-question.scss";

import Alert from "./Alert"; 

function SecondQuestion({ onBack, onContinue }) {
 
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
          <legend className="legend">
            Choose, what you would like to manage <br></br> in the first plaсe
          </legend>
          <p className="paragraph">You can add other elements later</p>
          <fieldset className="checkbox-option">
            <div className="option1">
              <div className="custom-work">
                <input
                  type="radio"
                  id="work"
                  name="manage"
                  value="Work"
                  className="work"
                  onChange={handleOptionChange}
                />
                <label htmlFor="work">Sale and CRM</label>
              </div>
            </div>

            <div className="option2">
              <div className="custom-operating">
                <input
                  type="radio"
                  id="personal"
                  name="manage"
                  value="Operating activities"
                  className="operating"
                  onChange={handleOptionChange}
                />
                <label htmlFor="operating">Operating activities</label>
              </div>
            </div>

            <div className="option3">
              <div className="custom-study">
                <input
                  type="radio"
                  id="study"
                  name="manage"
                  value="Study"
                  className="study"
                  onChange={handleOptionChange}
                />
                <label htmlFor="study">Education</label>
              </div>
            </div>
            <br />
            <div className="option4">
              <div className="custom-nonprofit">
                <input
                  type="radio"
                  id="nonprofit-organization"
                  name="manage"
                  value="Non-profit organization"
                  className="nonprofit"
                  onChange={handleOptionChange}
                />
                <label htmlFor="nonprofit-organization">Project office</label>
              </div>
            </div>

            <div className="option5">
              <div className="custom-product">
                <input
                  type="radio"
                  id="product-management"
                  name="manage"
                  value="Product management"
                  className="product"
                  onChange={handleOptionChange}
                />
                <label htmlFor="product-management">Product management</label>
              </div>
            </div>
            <br />
            <div className="option6">
              <div className="custom-recruitment">
                <input
                  type="radio"
                  id="recruitment-hr"
                  name="manage"
                  value="HR and Recruitment"
                  className="recruitment"
                  onChange={handleOptionChange}
                />
                <label htmlFor="recruitment-hr">HR and Recruitment</label>
              </div>
            </div>

            <div className="option7">
              <div className="custom-building">
                <input
                  type="radio"
                  id="build"
                  name="manage"
                  value="Building"
                  className="building"
                  onChange={handleOptionChange}
                />
                <label htmlFor="build">Building</label>
              </div>
            </div>

            <div className="option8">
              <div className="custom-marketing">
                <input
                  type="radio"
                  id="market"
                  name="manage"
                  value="Marketing"
                  className="marketing"
                  onChange={handleOptionChange}
                />
                <label htmlFor="market">Marketing</label>
              </div>
            </div>
            <br />
            <div className="option9">
              <div className="custom-technology">
                <input
                  type="radio"
                  id="tech"
                  name="manage"
                  value="IT"
                  className="technology"
                  onChange={handleOptionChange}
                />
                <label htmlFor="tech">IT</label>
              </div>
            </div>

            <div className="option10">
              <div className="custom-design">
                <input
                  type="radio"
                  id="design"
                  name="manage"
                  value="Design and creativ"
                  className="design-creative"
                  onChange={handleOptionChange}
                />
                <label htmlFor="design">Design and creativity</label>
              </div>
            </div>

            <div className="option11">
              <div className="custom-finance">
                <input
                  type="radio"
                  id="finance-item"
                  name="manage"
                  value="Finance"
                  className="finance"
                  onChange={handleOptionChange}
                />
                <label htmlFor="finance-item">Finance</label>
              </div>
            </div>

            <div className="option12">
              <div className="custom-other">
                <input
                  type="radio"
                  id="other-item"
                  name="manage"
                  value="Other"
                  className="other"
                  onChange={handleOptionChange}
                />
                <label htmlFor="other-item">Other</label>
              </div>
            </div>
          </fieldset>
          <div className="btn-container">
          
            <button className="btn-back" onClick={onBack}>
            <i className="fa-solid fa-chevron-left"></i>
                Back
                </button>

          <button className="btn-continue" onClick={handleContinue}>
            Continue
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          </div>
        </div>
      </section>

      <section>
        <div className="second-photo">
          
        </div>
      </section>
    </div>
  );
}

export default SecondQuestion;
