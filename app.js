let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBorder = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoise() {
  const choices = ["r", "p", "s"];
  const rand = Math.floor(Math.random() * 3);
  return choices[rand];
}

function convertToWord(letter) {
  if (letter === "r") return "rock";
  if (letter === "p") return "paper";
  if (letter === "s") return "scissors";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(
    computer
  )}. You WIN!`;
  document.getElementById(user).classList.add("green_glow");
  setTimeout(() => {document.getElementById(user).classList.remove('green_glow')}, 500)
}

function lose(user, computer) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `God damn - ${convertToWord(
    user
  )} loses to ${convertToWord(computer)}. You LOST!`;
  document.getElementById(user).classList.add("red_glow");
  setTimeout(() => {document.getElementById(user).classList.remove('red_glow')}, 500)
}

function draw(user, computer) {
  result_div.innerHTML = `${convertToWord(user)} equals ${convertToWord(
    computer
  )}. It's a DRAW!`;
  document.getElementById(user).classList.add("gray_glow");
  setTimeout(() => {document.getElementById(user).classList.remove('gray_glow')}, 500)
}

function game(userHand) {
  const computerHand = getComputerChoise();
  switch (userHand + computerHand) {
    case "rp":
    case "pr":
    case "sp":
      win(userHand, computerHand);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userHand, computerHand);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userHand, computerHand);
      break;
  }
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
