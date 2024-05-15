"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const plusMinusButtons = document.querySelectorAll(".plus-minus-button");
  const theAnswers = document.querySelectorAll(".question-answer");
  const plusMinusImages = document.querySelectorAll(".plus-minus-img");
  const allQuestions = document.querySelectorAll(".question");

  function toggleAnswer(index) {
    theAnswers[index].classList.toggle("display-none");
    const currentImageSrc = plusMinusImages[index].getAttribute("src");
    const newImageSrc =
      currentImageSrc === "assets/images/icon-plus.svg"
        ? "assets/images/icon-minus.svg"
        : "assets/images/icon-plus.svg";
    plusMinusImages[index].setAttribute("src", newImageSrc);
  }

  function handleKeyPress(event, index) {
    if (event.key === "Enter" || event.key === " ") {
      toggleAnswer(index);
    }
  }

  plusMinusButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      toggleAnswer(index);
    });
  });

  allQuestions.forEach((question, index) => {
    question.addEventListener("click", () => {
      toggleAnswer(index);
    });

    question.addEventListener("keypress", (event) => {
      handleKeyPress(event, index);
    });
  });
});

// Keyboard navigation
