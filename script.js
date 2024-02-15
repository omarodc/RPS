/* Rock paper scissors UI version */
let scorePlayer = 1;
let scoreComputer = 1;
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result === "Tie") {
    return "It's a Tie!";
  } else if (result === "Player") {
    return `Player Wins ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Computer Wins ${computerSelection} beats ${playerSelection}`;
  }
}

// Elemenos DOM
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissors");
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

// add eventsListener

// rock button
rock.addEventListener("click", () => {
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  if (options.includes(playerSelection)) {
    result.textContent = playRound(playerSelection, computerSelection);
  }
  if (checkWinner(playerSelection, computerSelection) == "Player") {
    playerScore.textContent = `Player: ${scorePlayer++}`;
  } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
    computerScore.textContent = `Computer: ${scoreComputer++}`;
  }
});
// paper button
paper.addEventListener("click", () => {
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  if (options.includes(playerSelection)) {
    result.textContent = playRound(playerSelection, computerSelection);
  }
  if (checkWinner(playerSelection, computerSelection) == "Player") {
    playerScore.textContent = `Player: ${scorePlayer++}`;
  } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
    computerScore.textContent = `Computer: ${scoreComputer++}`;
  }
});
// scissor button
scissor.addEventListener("click", () => {
  const playerSelection = "scissors";
  const computerSelection = getComputerChoice();
  if (options.includes(playerSelection)) {
    result.textContent = playRound(playerSelection, computerSelection);
  }
  if (checkWinner(playerSelection, computerSelection) == "Player") {
    playerScore.textContent = `Player: ${scorePlayer++}`;
  } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
    computerScore.textContent = `Computer: ${scoreComputer++}`;
  }
});
