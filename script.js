function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let result = "";

  if (playerSelection === computerSelection) {
    result = `It's a tie! You both chose ${playerSelection}.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = `You win! ${playerSelection} beats ${computerSelection}.`;
    playerScore++;
  } else {
    result = `You lose! ${computerSelection} beats ${playerSelection}.`;
    computerScore++;
  }

  // Update DOM
  document.getElementById("round-result").textContent = result;
  document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  // Check for winner
  if (playerScore === 5) {
    document.getElementById("winner").textContent = "🎉 You won the game! 🎉";
    resetGame();
  } else if (computerScore === 5) {
    document.getElementById("winner").textContent = "💻 Computer won the game! 💻";
    resetGame();
  }
}
function resetGame() {
  playerScore = 0;
  computerScore = 0;
}
const buttons = document.querySelectorAll("#buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerSelection = button.getAttribute("data-choice");
    playRound(playerSelection);
  });
});