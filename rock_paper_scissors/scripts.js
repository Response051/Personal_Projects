// create a function getComputer, that will return either rock,scissors or paper;
// the proposed returned value will be stored in a variable.

const options = ["Rock","Paper","Scissors",]

function getComputerChoice() {
   const choice = options[Math.floor(Math.random() * options.length)];
   return choice; 
};
console.log(getComputerChoice())

// 1. Write a function that plays a single round of Rock Paper Scissors
// 2. The function should take two parameters - the playerSelection and computerSelection
// 3. And then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

// let round1 = "You Lose! Paper beats Rock"
// let round2 = "You Lose! Scissors beats Paper"
// let round3 = "You Lose! Rock beats Scissors"

    function checkWinner(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "Tie";
                    } else if (
                      (playerSelection === "Rock" && computerSelection === "Scissors") ||
                        (playerSelection === "Paper" && computerSelection === "Rock")||
                            (playerSelection === "Scissors" && computerSelection === "Paper"))
         {
                         return "player";
                     }else{
                        return "computer";
                     }   
};
   function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "viola!, its a Tie";
    } else if (result == "player"){
        return `you win, ${playerSelection} wins ${computerSelection}`
    }else{
        return `you lose, ${computerSelection} beats ${playerSelection}`;
    }
};

const playerSelection = prompt("enter option, "); /**the aim of this comment is to test run*/
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))


