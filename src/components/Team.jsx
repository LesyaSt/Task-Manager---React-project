import React, { useState } from "react";
import "../styles/team.scss";
import backgroundImage from "../image/five-bg.jpeg";
function Team({ onContinue }) {
  // Масив для зберігання електронних адрес та ролей
  const [emails, setEmails] = useState([{ email: "", role: "Admin" }]);
  const [isVisible, setIsVisible] = useState([]); // Масив для відстеження видимості кожного спливаючого вікна

  // Функція для оновлення адреси електронної пошти
  const handleEmailChange = (index, value) => {
    const updatedEmails = [...emails];
    updatedEmails[index].email = value;
    setEmails(updatedEmails);
  };

  // Функція для вибору ролі
  const handleOptionSelect = (index, role) => {
    const updatedEmails = [...emails];
    updatedEmails[index].role = role;
    setEmails(updatedEmails);

    // Закриваємо спливаюче вікно після вибору
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = false;
    setIsVisible(updatedVisibility);
  };

  // Функція для додавання нового інпуту
  const addEmailField = () => {
    // Перевіряємо, чи кількість адрес менша за 4
    if (emails.length < 3) {
      setEmails([...emails, { email: "", role: "Admin" }]);
      setIsVisible([...isVisible, false]); // Додаємо новий стан видимості
    } else {
      alert("Maximum of 3 addresses allowed."); // Повідомлення про ліміт
    }
  };

  // Функція для видалення інпуту
  const removeEmailField = (index) => {
    setEmails(emails.filter((_, i) => i !== index));
    setIsVisible(isVisible.filter((_, i) => i !== index));
  };

  // Функція для відображення/приховування спливаючого вікна
  const togglePopup = (index) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsVisible(updatedVisibility);
  };

  // Відправка форми
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Emails:", emails);
  };

  // Кнопка "Remind me later"
  const handleContinue = () => {
    onContinue();
  };

  return (
    <div className="container-team">
      <section className="team-main">
        <div className="logo-team">
          <i className="fa-solid fa-lemon"></i>
          <h2 className="hello">Lemon Work Management</h2>
        </div>
        <fieldset className="variant">
          <h2 className="legend-team">Who else is on your team?</h2>
          <form className="checkbox-option-team" onSubmit={handleSubmit}>

            {emails.map((entry, index) => (
              <div key={index} className="team">
                <label htmlFor={`email-${index}`} className="sr-only">
                  Add E-mail address
                </label>
                <input
                  type="email"
                  id={`email-${index}`}
                  onChange={(e) => handleEmailChange(index, e.target.value)}
                  name="choice"
                  value={entry.email}
                  required
                  className="email-adress"
                  placeholder="Add E-mail"
                />

                {/* Вибір ролі */}
                <div className="role-container">
                  <span
                    className="input-option"
                    role="button"
                    aria-expanded={isVisible[index]}
                    onClick={() => togglePopup(index)}
                  >
                    {entry.role}
                    <i
                      className={`fa-solid ${
                        isVisible[index] ? "fa-chevron-up" : "fa-chevron-down"
                      }`}
                      aria-haspopup="true"
                    />
                  </span>

                  {isVisible[index] && (
                    <div className="popup-window" role="dialog" aria-modal="true">
                      <button onClick={() => handleOptionSelect(index, "Admin")}>
                        <h1>Admin</h1>
                        <p>Can invite other participants</p>
                      </button>
                      <button onClick={() => handleOptionSelect(index, "Participant")}>
                        <h1>Participant</h1>
                        <p>Can add and edit content</p>
                      </button>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => removeEmailField(index)}
                  aria-label="Remove email"
                  className="remove-button"
                >
                 <i className="fa-solid fa-close"></i>
                </button>
              </div>
              
            ))}

            <button type="button" className="btn-add" onClick={addEmailField}>
              <i className="fa-solid fa-plus"></i> 
              <h3>Add another address</h3>
            </button>
          </form>

          <div className="button-container">
            <button type="button" className="btn-later" onClick={handleContinue}>
              Remind me later
            </button>

            <button type="submit" className="btn-invite" onClick={handleSubmit}>
              Invite team
            </button>
          </div>
        </fieldset>
      </section>

      <section className="bg-photo-team">
      <img className="team-bg" src={backgroundImage} alt="background" />
      </section>
    </div>
  );
}

export default Team;