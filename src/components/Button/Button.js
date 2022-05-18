// Importing styled components
import { Button } from "./Button.style";

const ButtonComponent = ({ updateCurrentQuestion }) => {
  console.log("ButtonComponent");
  return <Button onClick={updateCurrentQuestion}>Next</Button>;
};

export default ButtonComponent;
