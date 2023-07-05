"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", gameLogic);
document.querySelector(".again").addEventListener("click", resetGame);

function gameLogic() {
  const guess = Number(document.querySelector(".guess").value);
  //Si no hay input
  if (!guess) {
    document.querySelector(".message").textContent = "🛑 No Number!";

    //Cuando el jugador adivina el numero
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //Cuando el numero es el equivocado
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈Too High!" : "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      document.querySelector(".message").textContent = "🥴 Yoy lost the game!";
      document.querySelector(".score").textContent = score;
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#FF0000";
      document.querySelector(".number").style.width = "30rem";
    }
  }
}

function resetGame() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}
