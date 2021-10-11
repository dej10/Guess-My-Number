"use strict";

// DOM
// Selecting and setting

// console.log(document.querySelector(".message").textContent); // selecting the text property
// document.querySelector(".message").textContent = "Correct Number 🚀"; // setting the property

// document.querySelector(".number").textContent = 20; // you cant set the text content with (.textContent) for a text property
// document.querySelector(".score").textContent = 4;

// document.querySelector(".guess").value = 10; // the value method is used to change the VALUE of an input field data

// Event Listeners
// const randomNumber = () => Math.trunc(Math.random() * 20) + 1;
let randomNumber = Math.trunc(Math.random() * 20) + 1; // app state

let score = 20; // app state
let highscore = 0; // app state

const displayMsg = (message) => {
  // code refactoring
  return (document.querySelector(".message").textContent = message);
};

document.querySelector(".check").addEventListener("click", () => {
  // the add event listener methods accepts two arguments and one of the them is a function, and the other is a type of event. You add the method to an element you want to use. NB the function isn't called it is just passed into the event handler. The JS engine will call this function as soon as the event happens
  //   document.querySelector(".message").textContent = "Correct Number 🚀"; // all code in the function will get run if the click happens.

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
      displayMsg(" ✋ 🛑  You failed to guess the Number "); // document.querySelector(".message").textContent =
      //       " ✋ 🛑   You failed to guess the Number ";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (randomNumber === guess) {
    document.querySelector(".number").textContent = guess;
    displayMsg("Correct Number 🤝");
    document.querySelector("body").style.backgroundColor = "#60b347"; // setting the CSS background colour using dom, this styles are set as inline styles
    document.querySelector(".number").style.width = "30rem"; // setting the width using dom
    if (score > highscore) {
      // implementing high score
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

/// coding challenge

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

// else if (guess > randomNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent =
//       " 📈 Number is too high ";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent =
//       " ✋ 🛑   You failed to guess the Number ";
//     document.querySelector(".score").textContent = 0;
//     document.querySelector("body").style.backgroundColor = "red";
//   }
// } else if (guess < randomNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = " 📉 Number is too low ";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent =
//       " ✋ 🛑 You failed to guess the Number ";
//     document.querySelector(".score").textContent = 0;
//     document.querySelector("body").style.backgroundColor = "red";
//   }
// }
