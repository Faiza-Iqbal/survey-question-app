import React, { useEffect } from "react";
import { InputFieldStyled } from "../../styles/InputField.style";
import { OptionLabel } from "../../styles/OptionLabel.style";
// Adding Style
import { OptionStyled } from "./Option.style";

const getInput = (inputValue) =>
  console.log("inputValue", inputValue.target.value);

const Option = ({ data, selected }) => {
  //Accepting props, Destructed option to improve code readability when accessing its properties
  useEffect(() => {
    console.log("Option");
  }, []);

  return (
    <>
      {/* Adding active style on option selection */}
      <OptionStyled selected={selected}>
        <OptionLabel selected={selected}> {data.title} </OptionLabel>
        {data.label}
      </OptionStyled>
      {/* Conditional rendering of input field in last option */}
      {data.inputBox && (
        <InputFieldStyled
          onChange={(value) => getInput(value)}
          type="text"
          name="name"
        />
      )}
    </>
  );
};

export default Option;
