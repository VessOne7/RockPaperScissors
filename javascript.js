document.addEventListener("DOMContentLoaded", function() {

// Write a function that randomly returns rock, paper or scissors
function getComputerChoice(){
  const computerPrompt = Math.floor(Math.random() * 3);
  if (computerPrompt === 0) {
    return "rock";
  } else if (computerPrompt === 1) {
    return "paper";
  } else if (computerPrompt === 2) {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
      
function playRound(humanChoice, computerChoice){
  if (humanChoice === computerChoice) {
    return result.textContent = `Player: ${humanScore} + Computer: ${computerScore}`;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore = computerScore + 1;
    if (humanScore == 5) {
      humanScore = 0; computerScore = 0;
      return result.textContent = `You Won!`} else if (computerScore == 5) {
        humanScore = 0; computerScore = 0;
        return result.textContent = `You lost`
      } else {
    return result.textContent = `Player: ${humanScore} + Computer: ${computerScore}`;}
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore = humanScore + 1;
    if (humanScore == 5) {
      humanScore = 0; computerScore = 0;
      return result.textContent = `You Won!`} else if (computerScore == 5) {
        humanScore = 0; computerScore = 0;
        return result.textContent = `You lost`
      } else {
    return result.textContent = `Player: ${humanScore} + Computer: ${computerScore}`;}
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore = humanScore + 1;
    if (humanScore == 5) {
      humanScore = 0; computerScore = 0;
      return result.textContent = `You Won!`} else if (computerScore == 5) {
        humanScore = 0; computerScore = 0;
        return result.textContent = `You lost`
      } else {
    return result.textContent = `Player: ${humanScore} + Computer: ${computerScore}`;}
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore = computerScore + 1;
    if (humanScore == 5) {
      humanScore = 0; computerScore = 0;
      return result.textContent = `You Won!`} else if (computerScore == 5) {
        humanScore = 0; computerScore = 0;
        return result.textContent = `You lost`
      } else {
    return result.textContent = `Player: ${humanScore} + Computer: ${computerScore}`;}
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore = computerScore + 1;
    if (humanScore == 5) {
      humanScore = 0; computerScore = 0;
      return result.textContent = `You Won!`} else if (computerScore == 5) {
        humanScore = 0; computerScore = 0;
        return result.textContent = `You lost`
      } else {
    return result.textContent = `Player: ${humanScore} + Computer: ${computerScore}`;}
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore = humanScore + 1;
    if (humanScore == 5) {
      humanScore = 0; computerScore = 0;
      return result.textContent = `You Won!`} else if (computerScore == 5) {
        humanScore = 0; computerScore = 0;
        return result.textContent = `You lost`
      } else {
    return result.textContent = `Player: ${humanScore} + Computer: ${computerScore}`;}
  }
}


const body = document.querySelector("body");

const buttonOne = document.createElement("button");
const buttonTwo = document.createElement("button");
const buttonThree = document.createElement("button");
buttonOne.textContent = "Rock";
buttonTwo.textContent = "Paper";
buttonThree.textContent = "Scissors";
body.appendChild(buttonOne);
body.appendChild(buttonTwo);
body.appendChild(buttonThree);

buttonOne.addEventListener("click", () => {playRound("rock", getComputerChoice())});
buttonTwo.addEventListener("click", () => {playRound("paper", getComputerChoice())});
buttonThree.addEventListener("click", () => {playRound("scissors", getComputerChoice())});

const result = document.createElement("div");
body.appendChild(result);
});