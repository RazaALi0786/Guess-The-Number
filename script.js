"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const scoreSetter = function (score) {
  document.querySelector(".score").textContent = score;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const bodyColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const numberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};
const guessingNumber = function (guess) {
  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess === secretNumber) {
    displayMessage("🎊 Correct Number!");
    displayNumber(secretNumber);
    bodyColor("#60b347");
    numberWidth("30rem");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📉 Try lower Numbers" : "📈 Try Higher Numbers"
      );
      score--;
      scoreSetter(score);
    } else {
      displayMessage("💥 You have lost!");
      scoreSetter(0);
    }
  }
};
const convertIntoNumber = function (guess) {
  const guessing = Number(document.querySelector(".guess").value);
  return guessing;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = convertIntoNumber();
  guessingNumber(guess);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const guess = convertIntoNumber();
    guessingNumber(guess);
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  scoreSetter(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  bodyColor("#222");
  numberWidth("15rem");
});
