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
    let round = 1;
    const roundDisplay = document.getElementById("round-number");
    const resultsDisplay = document.getElementById("results");
    const playerScoreDisplay = document.getElementById("player-score");
    const computerScoreDisplay = document.getElementById("computer-score");
    const playerChoiceDisplay = document.getElementById("player-choice");
    const computerChoiceDisplay = document.getElementById("computer-choice");
    updateScoreDisplay();

    function updateScoreDisplay () {
        roundDisplay.innerHTML = round;
        playerScoreDisplay.innerHTML = playerPoints;
        computerScoreDisplay.innerHTML = computerPoints;
    }

    function udpateChoiceDisplay (playerChoice, computerChoice) {
        playerChoiceDisplay.innerHTML = playerChoice;
        computerChoiceDisplay.innerHTML = computerChoice;
    }

    function checkScore() {
        if(playerPoints >= 5 || computerPoints >= 5) {
            //TODO: end game
        }
    }

    function playRound (playerSelection, computerSelection) {
        switch(playerSelection) {
            case "rock":
                switch(computerSelection) {
                    case "rock": break;
                    case "paper": computerPoints++; break;
                    case "scissors": playerPoints++; break;
                }
                break;
            case "paper":
                switch(computerSelection) {
                    case "rock": playerPoints++; break;
                    case "paper": break;
                    case "scissors": computerPoints++; break;
                }
                break;
            case "scissors":
                switch(computerSelection) {
                    case "rock": computerPoints++; break;
                    case "paper": playerPoints++; break;
                    case "scissors": break;
                }
                break;
        }
        round++;
        updateScoreDisplay();
        udpateChoiceDisplay(playerSelection, computerSelection);
        checkScore();   
    }
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            playRound(button.id , computerPlay());
        });
    });

}

game();