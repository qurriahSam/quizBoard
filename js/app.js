let btn = document.querySelector(".submit");

btn.addEventListener("click", () => {
  let questionOneChoices = document.getElementsByName("htmlShortForm");
  let questionTwoChoices = document.getElementsByName("jsName");
  let questionThreeChoices = document.getElementsByName("cppLevel");
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
  getResults(userAnswers);
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
  resultDisplay.innerText = result;
};
