function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

function computerPlay () {
    switch (getRandomInt(1, 3)) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "It's a tie! Rock versus Rock!";
        }
        else if (computerSelection == "paper") {
            return "You lose! Paper beats Rock!";
        }
        else if (computerSelection == "scissors") {
            return "You win! Rock beats scissors!";
        }
        else {
            return "Computer made an invalid choice."
        }
    }
}

function game () {
    let playerPoints = 0;
    let computerPoints = 0;
    const playerSelection = "rock";
    const computerSelection = computerPlay();
    
    console.log(playRound(playerSelection, computerSelection));
}

