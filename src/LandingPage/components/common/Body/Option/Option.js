import React from "react";
// Adding Style
import "./Option.css";
const Option = (
  { data, selected } //Accepting props, Destructed option to improve code readability when accessing its properties
) => (
  <>
    {/* Adding active style on option selection */}
    <div className={selected ? "activeOption" : "defaultOption"}>
      <span> {data.value} </span>
      {data.label}
    </div>
    {/* Conditional rendering of input field in last option */}
    {data.inputBox && <input className="otherInput" type="text" name="name" />}
  </>
);

export default Option;
