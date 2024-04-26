
const msgDisplay = document.getElementById("msg-display");
const resultDisplay = document.getElementById("result-display");
const resetBtn = document.getElementById("reset");
const player = document.getElementById("player");
const computer = document.getElementById("computer");

let playerScore = 0;
let computerScore = 0;

function reset(){
    playerScore = 0;
    computerScore = 0;
    resultDisplay.textContent = "0 - 0";
}

function playGame(playerPick){
    
    const option = ["rock", "paper", "scissors"];

    let computerPick = option[Math.floor(Math.random() * option.length)];

    if(playerPick === computerPick){
        msgDisplay.textContent = `Its draw ${playerPick} - ${computerPick}`;
        resultDisplay.textContent = `${playerScore} - ${computerScore}`;
    }
    else if(playerPick === "rock" && computerPick === "paper" ||
            playerPick === "paper" && computerPick === "scissors" ||
            playerPick === "scissors" && computerPick === "rock"){
                msgDisplay.textContent = `You lost ${playerPick} lose to ${computerPick}`;
                computerScore++;
                resultDisplay.textContent = `${playerScore} - ${computerScore}`;
            }
    else{
        msgDisplay.textContent = `You won ${playerPick} beats ${computerPick}`;
        playerScore++;
        resultDisplay.textContent = `${playerScore} - ${computerScore}`;
    }
    player.textContent = playerPick
    computer.textContent = computerPick

}