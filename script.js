"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMsg = (message) => {
  return (document.querySelector(".message").textContent = message);
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMsg("No value inputted, kindly input a value");
  } else if (guess >= 21) {
    displayMsg("Number should be between 1 & 20");
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMsg(
        guess > randomNumber
          ? " 📈 Number is too high "
          : " 📉 Number is too low  "
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMsg(" ✋ 🛑  You failed to guess the Number ");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (randomNumber === guess) {
    document.querySelector(".number").textContent = guess;
    displayMsg("Correct Number 🤝");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";

  displayMsg("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
