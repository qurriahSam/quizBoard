let questionOneChoices = document.getElementsByName("htmlShortForm");
let questionTwoChoices = document.getElementsByName("jsName");
let questionThreeChoices = document.getElementsByName("cppLevel");
let btn = document.querySelector(".submit");

//clear checked choices
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

  // get checked choices
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
    resetChecked(questionOneChoices);
    resetChecked(questionTwoChoices);
    resetChecked(questionThreeChoices);
  }
});

// check correct answers
const getResults = (userAnswers) => {
  let resultDisplay = document.querySelector("#showResult");
  let percentDisplay = document.querySelector("#percentage");
  let answers = ["html", "ecma", "no"];
  let result = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === userAnswers[i]) {
      result += 30;
    }
  }
  resultDisplay.innerText = `${result}/90`;

  if (result > 80) {
    percentDisplay.innerText = "You have excellently passed.";
  } else if (result >= 50 && result <= 80) {
    percentDisplay.innerText = "You have fairly passed.";
  } else {
    percentDisplay.innerText = "You have scored poorly.";
  }
};
