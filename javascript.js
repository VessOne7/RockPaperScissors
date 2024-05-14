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

//function that returns user choice
function getHumanChoice(){
    let humanPrompt = prompt("Choose rock, paper or scissors");
    return humanPrompt = humanPrompt.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playGame(){

    for (let i = 0; i < 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      
      function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice) {
          return console.log("Stalemate. Try again!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
          computerScore = computerScore + 1;
          return console.log("You lose! Paper beats rock");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
          humanScore = humanScore + 1;
          return console.log("You win! Rock beats Scissors");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
          humanScore = humanScore + 1;
          return console.log("You win! Paper beats rock");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
          computerScore = computerScore + 1;
          return console.log("You lose! Scissors beats paper");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
          computerScore = computerScore + 1;
          return console.log("You lose! Rock beats scissors");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
          humanScore = humanScore + 1;
          return console.log("You win! Scissors beats paper");
        }
      }
      playRound(humanSelection, computerSelection);
      console.log(humanScore, computerScore);
    }
}

playGame();