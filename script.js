/* Rock paper scissors command line version */
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
    (playerSelection === "scissor" && computerSelection === "paper") ||
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

function getPlayerChoice() {
  let validImput = false;

  while (validImput == false) {
    const choice = prompt("Enter Rock Paper Scissors");
    if (choice == null) {
      continue;
    }
    const choiceLower = choice.toLowerCase();
    if (options.includes(choiceLower)) {
      validImput = true;
      return choiceLower;
    }
  }
}

function game() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  console.log("Welcome");
  // for (let i = 0; i < 5; i++) {
  //   const playerSelection = getPlayerChoice();
  //   const computerSelection = getComputerChoice();
  //   console.log(playRound(playerSelection, computerSelection));
  //   console.log("/*/*/*/*/*/*/*/*/*/*/*/*");
  //   if (checkWinner(playerSelection, computerSelection) == "Player") {
  //     scorePlayer++;
  //   } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
  //     scoreComputer++;
  //   }
  // }
  console.log("Game Over");
  if (scorePlayer > scoreComputer) {
    console.log(`Player was the winner:${scorePlayer} wins`);
  } else if (scorePlayer < scoreComputer) {
    console.log(`Computer was the winner:${scoreComputer} wins`);
  } else {
    console.log("We have a Tie");
  }
}

game();
