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
});
