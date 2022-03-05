const userScore = 0;
const compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoise() {
  const rand = 1 - 0.5 + Math.random() * (3 - 1 + 1);
  if (Math.round(rand) == 1) {
    return "r";
  } else if (Math.round(rand) == 2) {
    return "p";
  } else {
    return "s";
  }
}

function game(userChoise) {
  console.log(userChoise);
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
