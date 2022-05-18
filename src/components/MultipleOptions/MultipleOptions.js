import React, { useCallback, useEffect, useState } from "react";
import { OptionsWrapper } from "../../styles/OptionsWrapper.style";
import { RelativePositionWrapper } from "../../styles/RelativePositionWrapper.style";
// Importing components from project directory
import Option from "../Option/Option";

function MultipleOptions({ list }) {
  useEffect(() => {
    console.log("MultipleOptions");
  }, []);

  //Destructuring prop to improve code readability
  const [selectedOptions, setSelectedOptions] = useState([]); // Maintaining state of Selected Options
  //Using callback hook
  const handleOptionSelection = useCallback(
    (option) => {
      if (selectedOptions.includes(option?.value)) {
        const deselectOptions = selectedOptions.filter(
          (item) => item !== option?.value
        );
        // For deselection of options, updating state
        setSelectedOptions(deselectOptions);
        return;
      } else if (selectedOptions.length < 2) {
        const updated = [...selectedOptions, option?.value];
        // setting state to detect change
        setSelectedOptions(updated);
      }
    },
    [selectedOptions] //dependency of useCallback hook
  );

  return (
    <OptionsWrapper>
      {/* Rendering all options through data list */}
      {list.map((option, index) => (
        <RelativePositionWrapper
          key={`${option.value}_${index}`} // Generating unique key for each child
          onClick={() => handleOptionSelection(option)}
        >
          {/*Using Generic "Option" component with props being passed: 
        "data" to display value and "selected" to apply style */}
          <Option
            data={option}
            selected={selectedOptions.includes(option.value)}
          />
        </RelativePositionWrapper>
      ))}
    </OptionsWrapper>
  );
}

export default MultipleOptions;
