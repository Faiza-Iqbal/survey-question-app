import React from "react";
// Importing components from project directory
import HeaderComponent from "./components/common/Header/Header";
import MultipleOptions from "./components/common/Body/MultipleOptions/MultipleOptions";
import QuestionTitle from "./components/common/Body/QuestionTitle/QuestionTitle";
import Action from "./components/common/Body/Action/Action";
//Importing style
import "../App.css";
import "../LandingPage/LandingPage.css";

//Data List
const options = [
  {
    label: "Option 1",
    value: "A",
    inputBox: false,
    title: "A",
  },
  {
    label: "Option 2",
    value: "B",
    inputBox: false,
    title: "B",
  },
  {
    label: "Option 3",
    value: "C",
    inputBox: false,
    title: "C",
  },
  {
    label: "Option 4",
    value: "D",
    inputBox: false,
    title: "D",
  },
  {
    label: "",
    value: "",
    inputBox: true,
    title: "OTHER",
  },
];
function Body() {
  return (
    <div className="mainWrapper">
      <HeaderComponent />
      <QuestionTitle />
      {
        <div className="contentBody">
          <MultipleOptions list={options} />
          <Action />
        </div>
      }
    </div>
  );
}

export default Body;
