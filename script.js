
const options = ["rock", "paper", "scissors"];

//const playerOption = prompt("Type rock, paper or scissors").toLowerCase();
// const computerOption = options[Math.floor(Math.random() * options.length)];
const computerOption = getComputerChoice();

function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}



function playRound(playerOption, computerOption) {  

    if(playerOption === computerOption) {
        // console.log("ITS A TIE");
        return "TTS A TIE";
    }
    else if(playerOption === "rock" && computerOption === "paper" ||
            playerOption === "paper" && computerOption == "scissors" ||
            playerOption === "scissors" & computerOption == "rock"){
        // console.log("YOU LOSE");
        return "YOU LOSE";
    }
    else {
        // console.log("YOU WIN");
        return "YOU WIN";
    }
}


function playGame(playerOption){

    let playerScore = 0;
    let computerScore = 0;

    
    for(i = 0; i < 5; i++){        
        const playerOption = prompt("Type rock, paper or scissors").toLowerCase();
        const computerOption = getComputerChoice();
        if(playRound(playerOption, computerOption) === "YOU WIN"){
            playerScore++;
            console.log(`you won ${playerOption} beats ${computerOption}`);
        }
        else if(playRound(playerOption, computerOption) === "YOU LOSE"){
           computerScore++;
           console.log(`you lost ${playerOption} lose to ${computerOption}`);
        }
        else {
            console.log(`its a tie ${playerOption} ties with ${computerOption}`);
        }

        console.log(playerScore, computerScore);
    }
    
    if(playerScore > computerScore){
        console.log(`You won ${playerScore} - ${computerScore}`);
    }
    else if(playerScore < computerScore){
        console.log(`You lost ${playerScore} - ${computerScore}`);
    }
    else{
        console.log(`Game is tie ${playerScore} - ${computerScore}`);
    }
}

// playGame();





