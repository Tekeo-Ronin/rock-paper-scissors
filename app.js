const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoise() {
  const choices = ['r', 'p', 's'];
  const rand = Math.floor(Math.random() * 3);
  return choices[rand];
}

function game(userChoise) {
}

rock.addEventListener("click", () => {
  game("r");
});

paper.addEventListener("click", () => {
  game("p");
});

scissors.addEventListener("click", () => {
  game("s");
});
