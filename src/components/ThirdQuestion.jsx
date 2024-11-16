import React, { useState } from "react";

import '../styles/third-question.scss';

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
            Choose, what you would like to focus on first
          </legend>
          <p className="paragraph">Let's get everything set up so that you're comfortable using the platform</p>
          <fieldset className="checkbox-option">
            <div className="option1">
              <div className="custom-tickets">
                <input
                  type="radio"
                  id="tickets-and-request"
                  name="focus"
                  value="Tickets and request"
                  className="tickets"
                  onChange={handleOptionChange}
                />
                <label htmlFor="tickets-and-request">Tickets and request </label>
              </div>
            </div>

            <div className="option2">
              <div className="custom-development">
                <input
                  type="radio"
                  id="personal"
                  name="focus"
                  value="Operating activities"
                  className="development"
                  onChange={handleOptionChange}
                />
                <label htmlFor="operating">Software development</label>
              </div>
            </div>

            <div className="option3">
              <div className="custom-project">
                <input
                  type="radio"
                  id="project-management"
                  name="manage"
                  value="Project management"
                  className="project"
                  onChange={handleOptionChange}
                />
                <label htmlFor="project-management">Project management</label>
              </div>
            </div>
            
            <div className="option4">
              <div className="custom-portfolio">
                <input
                  type="radio"
                  id="portfolio-management"
                  name="manage"
                  value="Portfolio management"
                  className="portfolio"
                  onChange={handleOptionChange}
                />
                <label htmlFor="portfolio-management">Portfolio management</label>
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
            
            <div className="option6">
              <div className="custom-goals">
                <input
                  type="radio"
                  id="goals-strategy"
                  name="manage"
                  value="Goals and Strategy"
                  className="goals"
                  onChange={handleOptionChange}
                />
                <label htmlFor="goals-strategy">Goals and Strategy</label>
              </div>
            </div>

            <div className="option7">
              <div className="custom-task">
                <input
                  type="radio"
                  id="task-management"
                  name="manage"
                  value="Task management"
                  className="task"
                  onChange={handleOptionChange}
                />
                <label htmlFor="task-management">Task management</label>
              </div>
            </div>

            <div className="option8">
              <div className="custom-support">
                <input
                  type="radio"
                  id="support-service"
                  name="manage"
                  value="IT support service"
                  className="support"
                  onChange={handleOptionChange}
                />
                <label htmlFor="support-service">IT support service</label>
              </div>
            </div>
            <br />
            <div className="option9">
              <div className="custom-knowledge">
                <input
                  type="radio"
                  id="knowledge-base"
                  name="manage"
                  value="Knowledge base"
                  className="knowledge"
                  onChange={handleOptionChange}
                />
                <label htmlFor="knowledge-base">Knowledge base</label>
              </div>
            </div>

            <div className="option10">
              <div className="custom-crm">
                <input
                  type="radio"
                  id="crm-option"
                  name="manage"
                  value="CRM"
                  className="crm"
                  onChange={handleOptionChange}
                />
                <label htmlFor="crm-option">CRM</label>
              </div>
            </div>

            <div className="option11">
              <div className="custom-resource">
                <input
                  type="radio"
                  id="resource-management"
                  name="manage"
                  value="Resource management"
                  className="resource"
                  onChange={handleOptionChange}
                />
                <label htmlFor="resource-management">Resource management</label>
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

          <button className="btn-continue" onClick={handleContinue} >
            Continue
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          </div>
        </div>
      </section>

      <section>
        <div className="third-photo">
          
        </div>
      </section>
    </div>
  );
    
}

export default ThirdQuestion;