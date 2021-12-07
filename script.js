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
        default: return "";
    }
}

function getPlayerInput () {
    let playerInput = prompt("What do you choose?");
    return playerInput.toLowerCase();
}

function validatePlayerInput (playerInput) {
    if (playerInput === "rock" || playerInput === "scissors" || playerInput === "paper") return true;
    else return false;
}

function game () {

    let playerPoints = 0;
    let computerPoints = 0;
    function playRound (playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == "rock") {
            if (computerSelection == "rock") {
                return "It's a tie! Rock versus Rock!";
            }
            else if (computerSelection == "paper") {
                computerPoints++;
                return "You lose! Paper beats Rock!";
            }
            else if (computerSelection == "scissors") {
                playerPoints++;
                return "You win! Rock beats scissors!";
            }
            else {
                return "Computer made an invalid choice."
            }
        }
        else if (playerSelection == "paper") {
            if (computerSelection == "paper") {
                return "It's a tie! Paper versus Paper!";
            }
            else if (computerSelection == "scissors") {
                computerPoints++;
                return "You lose! Scissors beats paper!";
            }
            else if (computerSelection == "rock") {
                playerPoints++;
                return "You win! Paper beats rock!";
            }
            else {
                return "Computer made an invalid choice."
            }
        }
        else if (playerSelection == "scissors") {
            if (computerSelection == "scissors") {
                return "It's a tie! Scissors versus Scissors";
            }
            else if (computerSelection == "rock") {
                computerPoints++;
                return "You lose! Rock beats scissors!";
            }
            else if (computerSelection == "paper") {
                playerPoints++;
                return "You win! Scissors beats paper!";
            }
            else {
                return "Computer made an invalid choice."
            }
        }
    }

    for (let i = 1; i <= 5; i++) {
        let playerInput = "";
        const computerInput = computerPlay();
        do {
            playerInput = getPlayerInput();
        }
        while (!validatePlayerInput(playerInput));

        console.log("Round " + i + ": " + playRound(playerInput, computerInput) + " " + playerPoints + " to " + computerPoints);
    }

    if (playerPoints > computerPoints) console.log("You win!");
    else if (playerPoints < computerPoints) console.log("You lose!");
    else console.log("It's a tie!");
}

game();