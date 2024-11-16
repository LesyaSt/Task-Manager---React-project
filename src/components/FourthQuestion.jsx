import React, { useState} from "react";

import '../styles/fourth-question.scss';

import Alert from "./Alert";


function FourthQuestion({onBack, onContinue}) {

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
            One last question: how did you hear about us?
          </legend>
          <p className="paragraph">Let's get everything set up so that you're comfortable using the platform</p>
          <fieldset className="checkbox-option">
            <div className="option1">
              <div className="custom-youTube">
                <input
                  type="radio"
                  id="youTube-option"
                  name="focus"
                  value="You Tube"
                  className="youTube"
                  onChange={handleOptionChange}
                />
                <label htmlFor="youTube-option">You Tube</label>
              </div>
            </div>

            <div className="option2">
              <div className="custom-ad">
                <input
                  type="radio"
                  id="advertising"
                  name="focus"
                  value="Operating activities"
                  className="ad"
                  onChange={handleOptionChange}
                />
                <label htmlFor="advertising">Ad</label>
              </div>
            </div>

            <div className="option3">
              <div className="custom-social-media">
                <input
                  type="radio"
                  id="face-inst"
                  name="manage"
                  value="Project management"
                  className="social-media"
                  onChange={handleOptionChange}
                />
                <label htmlFor="face-inst">Facebook / Instagram</label>
              </div>
            </div>
            
            <div className="option4">
              <div className="custom-streaming">
                <input
                  type="radio"
                  id="tv-streaming"
                  name="manage"
                  value="TV / Streaming"
                  className="streaming"
                  onChange={handleOptionChange}
                />
                <label htmlFor="tv-streaming">TV / Streaming</label>
              </div>
            </div>

            <div className="option5">
              <div className="custom-linkedIn">
                <input
                  type="radio"
                  id="linkedin"
                  name="manage"
                  value="Product management"
                  className="linkedIn"
                  onChange={handleOptionChange}
                />
                <label htmlFor="linkedin">LinkedIn</label>
              </div>
            </div>
            
            <div className="option6">
              <div className="custom-audioAd">
                <input
                  type="radio"
                  id="audio-advertising"
                  name="manage"
                  value="Audio advertising"
                  className="audioAd"
                  onChange={handleOptionChange}
                />
                <label htmlFor="audio-advertising">Audio advertising</label>
              </div>
            </div>

            <div className="option7">
              <div className="custom-friends">
                <input
                  type="radio"
                  id="friends-family"
                  name="manage"
                  value="Friend / Family"
                  className="friends"
                  onChange={handleOptionChange}
                />
                <label htmlFor="friends-family">Friend / Family</label>
              </div>
            </div>

            

            <div className="option8">
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
        <div className="fourth-photo">
          
        </div>
      </section>
    </div>
  );
    
}

export default FourthQuestion;