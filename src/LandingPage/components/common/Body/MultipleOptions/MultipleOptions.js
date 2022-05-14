import React, { useState } from "react";
// Importing components from project directory
import Title from "../../Title/Title";
import Option from "../Option/Option";
// Adding style
import "./MultipleOptions.css";

function MultipleOptions({ list }) {
  //Destructuring prop to improve code readability
  const [selectedOptions, setSelectedOptions] = useState([]); // Maintaining state of Selected Options
  console.log("selectedOptions", selectedOptions);
  // if list contains new item, filter and update state
  // if list length == 2 return
  // else updated state [...list, new item]

  //  Approach 1
  const handleOptionSelection = (option) => {
    if (selectedOptions.includes(option.value)) {
      setSelectedOptions(
        // For deselection of options, updating state
        selectedOptions.filter((item) => item !== option.value)
      );
      return;
    }

    if (selectedOptions.length >= 2) return;
    else {
      const updated = [...selectedOptions, option.value];
      // setting state to detect change
      setSelectedOptions(updated);
    }
  };
  // Approach 2
  // const handleOptionSelection = (option) => {
  //   if (selectedOptions.length >= 2 && !option.selected) return; //Case: Setting max limit of option selection
  //   option.selected = !option.selected; //Case: Toggling selected option state on re-click
  //   if (option.selected)
  //     setSelectedOptions([
  //       // setting state to detect change
  //       ...selectedOptions,
  //       option.value,
  //     ]);
  //   //Case: For option being selected, appending it in the state array
  //   else {
  //     setSelectedOptions(
  //       // For deselection of options, updating state
  //       selectedOptions.filter((item) => item !== option.value)
  //     );
  //   }
  // };

  return (
    <div className="bodyWrapper">
      <Title />
      {
        <div className="optionsWrapper">
          {/* Rendering all options through data list */}
          {list.map((option, index) => (
            <div
              key={`${option.value}_${index}`} // Generating unique key for each child
              onClick={() => handleOptionSelection(option)}
              className="inputOptionWrapper"
            >
              {/*Using Generic "Option" component with props being passed: 
              "data" to display value and "selected" to apply style */}
              <Option
                data={option}
                selected={selectedOptions.includes(option.value)}
              />
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default MultipleOptions;
