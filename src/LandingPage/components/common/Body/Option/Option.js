import React from "react";
// Adding Style
import "./Option.css";
const getInput = (inputValue) =>
  console.log("inputValue", inputValue.target.value);
const Option = (
  { data, selected } //Accepting props, Destructed option to improve code readability when accessing its properties
) => (
  <>
    {/* Adding active style on option selection */}
    <div className={selected ? "activeOption" : "defaultOption"}>
      <span> {data.title} </span>
      {data.label}
    </div>
    {/* Conditional rendering of input field in last option */}
    {data.inputBox && (
      <input
        onChange={(value) => getInput(value)}
        className="otherInput"
        type="text"
        name="name"
      />
    )}
  </>
);

export default Option;
