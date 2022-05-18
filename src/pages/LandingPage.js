import React, { useState, useCallback, useEffect } from "react";
// Importing components from project directory
import HeaderComponent from "../components/Header/Header";
import MultipleOptions from "../components/MultipleOptions/MultipleOptions";
import QuestionTitle from "../components/QuestionTitle/QuestionTitle";
import ButtonComponent from "../components/Button/Button";
import Title from "../components/Title/Title";
// Importing Data
import { options, questionNumberDetails } from "../data/data";
//Importing global style
import "../App.css";
// Importing styled components
import { NoScrollHeight } from "../styles/noScrollHeight";
import { GreyRoundedBackground } from "../styles/greyRoundedBackground";

function Body() {
  useEffect(() => {
    console.log("LandingPage");
  }, []);

  // Maintaining current question number state
  const [currentQuestion, setCurrentQuestion] = useState(
    questionNumberDetails.currentQuestion
  );
  // using callBack hook
  const updateCurrentQuestion = useCallback(() => {
    if (currentQuestion < questionNumberDetails.totalQuestions)
      setCurrentQuestion(currentQuestion + 1);
  }, [currentQuestion]);
  // without callback hook
  // const updateCurrentQuestion = () => {
  //   console.log("called");
  //   if (currentQuestion < questionNumberDetails.totalQuestions)
  //     setCurrentQuestion(currentQuestion + 1);
  // };

  return (
    <NoScrollHeight>
      <HeaderComponent
        currentQuestion={currentQuestion}
        totalQuestions={questionNumberDetails.totalQuestions}
      />
      <QuestionTitle currentQuestion={currentQuestion} />

      <GreyRoundedBackground>
        <Title />
        <MultipleOptions list={options} />
        <ButtonComponent updateCurrentQuestion={updateCurrentQuestion} />
      </GreyRoundedBackground>
    </NoScrollHeight>
  );
}

export default Body;
