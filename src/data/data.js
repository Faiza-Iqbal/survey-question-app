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
//For dynamic Question Numbering
const questionNumberDetails = {
  totalQuestions: 4,
  currentQuestion: 1,
};

export { options, questionNumberDetails };
