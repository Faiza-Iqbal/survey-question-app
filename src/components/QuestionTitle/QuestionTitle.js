// Importing styled components
import { Paragraph } from "./QuestionTitle.style";

const QuestionTitle = ({ currentQuestion }) => {
  console.log("QuestionTitle");
  return <Paragraph>Question {currentQuestion}</Paragraph>;
};

export default QuestionTitle;
