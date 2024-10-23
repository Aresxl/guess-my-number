"use strict";

let randomNumber = Math.floor(Math.random() * 20 + 1);
console.log(randomNumber);

const messageText = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const checkBtn = document.querySelector(`.check`);
const scoreText = document.querySelector(`.score`);
const highscoreText = document.querySelector(`.highscore`);
let score = 20;
let highscore = 0;

checkBtn.addEventListener("click", function () {
  const guessInput = Number(document.querySelector(".guess").value);

  if (!guessInput) {
    messageText(`No Number!`);
  } else if (guessInput === randomNumber) {
    messageText(`🎉 Correct Number!`);
    document.querySelector(`body`).style.backgroundColor = `green`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = randomNumber;

    if (score > highscore) {
      highscoreText.textContent = score;
    }
  } else if (guessInput !== randomNumber) {
    messageText(guessInput > randomNumber ? `📉 Too high!` : `📈 Too low!;`);
    score--;
    scoreText.textContent = score;
  }

  if (score === 1) {
    messageText(`Final Guess!`);
  }
  if (score === 0) {
    messageText(`Game Over!`);
    document.querySelector(`body`).style.backgroundColor = `rgb(170, 20, 20)`;
  }
});

const againButton = document.querySelector(`.again`);
againButton.addEventListener(`click`, function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20 + 1);
  console.log(randomNumber);
  scoreText.textContent = `20`;
  messageText(`Start guessing...`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(".guess").value = "";
});
