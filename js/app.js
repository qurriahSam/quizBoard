let questionOneChoices = document.getElementsByName("htmlShortForm");
let questionTwoChoices = document.getElementsByName("jsName");
let questionThreeChoices = document.getElementsByName("cppLevel");
let btn = document.querySelector(".submit");

const resetChecked = (choices) => {
  choices.forEach((choice) => {
    if (choice.checked == true) {
      choice.checked = false;
    }
  });
  return;
};

btn.addEventListener("click", () => {
  let userAnswers = [];

  const getUserAnswer = (choices) => {
    choices.forEach((choice) => {
      if (choice.checked == true) {
        userAnswers.push(choice.value);
      }
    });
  };

  getUserAnswer(questionOneChoices);
  getUserAnswer(questionTwoChoices);
  getUserAnswer(questionThreeChoices);

  if (userAnswers.length < 3) {
    alert("Kindly attempt all questions");
    resetChecked(questionOneChoices);
    resetChecked(questionTwoChoices);
    resetChecked(questionThreeChoices);
    return;
  } else {
    getResults(userAnswers);
  }
});

const getResults = (userAnswers) => {
  let resultDisplay = document.querySelector("#showResult");
  let answers = ["html", "ecma", "no"];
  let result = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === userAnswers[i]) {
      result++;
    }
  }
  resultDisplay.innerText = `${result}/3`;
};
