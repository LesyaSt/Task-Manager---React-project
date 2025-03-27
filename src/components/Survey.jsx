import React, { useState } from "react";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";

import Team from './Team';
import MainPage from './MainPage';

function Survey() {
  const [currentPage, setCurrentQuestion] = useState(5);

  const goToFirstQuestion = () => setCurrentQuestion(1);
  const goToSecondQuestion = () => setCurrentQuestion(2);
  const goToThirdQuestion = () => setCurrentQuestion(3);
  const goToFourthQuestion = () => setCurrentQuestion(4);
  const goToTeam = () => setCurrentQuestion(5);
  const goToMainPage = () => setCurrentQuestion(6);

  return (
    <div>
      {currentPage === 1 && <FirstQuestion onContinue={goToSecondQuestion} />}
      {currentPage === 2 && (
        <SecondQuestion
          onBack={goToFirstQuestion}
          onContinue={goToThirdQuestion}
        />
      )}
      {currentPage === 3 && (
      <ThirdQuestion 
       onBack={goToSecondQuestion}
       onContinue={goToFourthQuestion}
      />
      )}
      {currentPage === 4 && (
      <FourthQuestion 
      onBack={goToThirdQuestion}
       onContinue={goToTeam}
      />
      )}

      {currentPage === 5 && (
      <Team 
        onContinue={goToMainPage}
      /> )}

      {currentPage === 6 && <MainPage/>}

    </div>
  );
}

export default Survey;