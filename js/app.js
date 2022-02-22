let questionOneChoices = document.getElementsByName("htmlShortForm");
let questionTwoChoices = document.getElementsByName("jsName");
let questionThreeChoices = document.getElementsByName("cppLevel");
let btn = document.querySelector(".submit");
let retakeBtn = document.querySelector(".retake");
let a = 0;

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

  elementsHide();
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

// hide elements on button Click
const elementsHide = () => {
  let firstQuestion = document.querySelector(".question1");
  let secondQuestion = document.querySelector(".question2");
  let thirdQuestion = document.querySelector(".question3");
  let score = document.querySelector(".results");

  if (a == 0) {
    firstQuestion.classList.add("hide");
    secondQuestion.classList.add("hide");
    thirdQuestion.classList.add("hide");
    score.classList.add("show");
    retakeBtn.classList.add("show");
    btn.classList.add("hide");
    a++;
  } else {
    firstQuestion.classList.remove("hide");
    secondQuestion.classList.remove("hide");
    thirdQuestion.classList.remove("hide");
    score.classList.remove("show");
    retakeBtn.classList.remove("show");
    btn.classList.remove("hide");
    a--;
  }
};

retakeBtn.addEventListener("click", () => {
  elementsHide();
});
