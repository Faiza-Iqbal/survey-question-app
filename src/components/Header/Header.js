import { StyledHeader } from "./Header.style";

const HeaderComponent = ({ currentQuestion, totalQuestions }) => {
  console.log("HeaderComponent");
  return (
    <StyledHeader>
      <p>
        Survey-Question {currentQuestion}/{totalQuestions}
      </p>
    </StyledHeader>
  );
};

export default HeaderComponent;
