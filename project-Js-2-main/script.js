"use strict";
//! рандомное число от 0 до 29
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

//! счетчик
let scoreAll = 20;
let higScAll = 0;

//! звук по клику на кнопки
const win = new Audio("win.mp3");
const lose = new Audio("lose.mp3");
const click = new Audio("click.mp3");

//! функция сообщений
const messageGame = function (mess) {
  document.querySelector(".message").textContent = mess;
  document.querySelector("h1").textContent = mess;
};

//! вопросительный знак -- секретное число
const secNum = document.querySelector(".number");

//! логика по клику на кнопку проверка
document.querySelector(".check").addEventListener("click", function (e) {
  e.preventDefault();
  click.play();
  //! создаем переменную для инпута
  const inputNumber = +document.querySelector(".guess").value;
  console.log(inputNumber);
  //! если ничего не ввели в инпут
  if (!inputNumber) {
    messageGame("Вы ничего не ввели !!!");
  } else if (inputNumber === secretNumber) {
    messageGame("Вы выйграли");
    document.querySelector("body").style.background = `rgb(0 133 138)`;
    secNum.textContent = inputNumber;
    if (scoreAll > higScAll) {
      higScAll = scoreAll;
      document.querySelector(".highscore").textContent = scoreAll;
    }
    win.play();
  } else if (inputNumber !== secretNumber) {
    if (scoreAll > 1) {
      if (inputNumber > secretNumber) {
        messageGame("число больше !!!");
        scoreAll--;
        document.querySelector(".score").textContent = scoreAll;
      } else if (inputNumber < secretNumber) {
        messageGame("число меньше !!!");
        scoreAll--;
        document.querySelector(".score").textContent = scoreAll;
      }
    } else {
      messageGame("Вы проиграли");
      document.querySelector("body").style.background = "red";
      document.querySelector(".score").textContent = 0;
      lose.play();
    }
  }
});

//! логика по клику на кнопку снова
document.querySelector(".again").addEventListener("click", function (e) {
  e.preventDefault();
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageGame("Начните угадывать...");
  scoreAll = 20;
  document.querySelector(".score").textContent = scoreAll;
  secNum.textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(
    "body"
  ).style.background = `radial-gradient( circle, rgba(35, 34, 41, 1) 51%, rgba(56, 59, 60, 1) 100% )`;
});
