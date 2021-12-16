// For keeping score
const maxScore = 5; // End the game when a player reaches this score.
let playerScore = 0;
let computerScore = 0;
let compareString = "";

// DOM elements
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const compareDisplay = document.getElementById("compare");
const buttons = document.querySelectorAll("button");
const messageDisplay = document.getElementById("message");

// Add event listener to player selection buttons
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        playRound(button.id , computerPlay());
    });
});

// Update score display of 0 to 0
updateScoreDisplay();

// Display initial message
updateMessage("Make a selection below to begin the game!");

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

function playRound (playerSelection, computerSelection) {
    //compare selections
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock": neitherWinsRound(); break;
                case "paper": computerWinsRound(); break;
                case "scissors": playerWinsRound(); break;
            }
            break;
        case "paper":
            switch(computerSelection) {
                case "rock": playerWinsRound(); break;
                case "paper": neitherWinsRound(); break;
                case "scissors": computerWinsRound(); break;
            }
            break;
        case "scissors":
            switch(computerSelection) {
                case "rock": computerWinsRound(); break;
                case "paper": playerWinsRound(); break;
                case "scissors": neitherWinsRound(); break;
            }
            break;
    }

    //update displays
    updateScoreDisplay();
    udpateChoiceDisplay(playerSelection, computerSelection);

    checkScore();
}

function playerWinsRound () {
    playerScore++;
    compareString = ">";
}

function computerWinsRound () {
    computerScore++;
    compareString = "<";
}

function neitherWinsRound () {
    compareString = "=";
}

function checkScore() {
    if(playerScore >= maxScore || computerScore >= maxScore) {
        endGame();
    }
    else {
        updateMessage("Keep playing!");
    }
}

function endGame() {
    buttons.forEach(function(button){
        button.disabled = true;
    });
    if (playerScore > computerScore) updateMessage("You Win!");
    else updateMessage("Game Over!");
}

function updateScoreDisplay () {
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
}

function udpateChoiceDisplay (playerChoice, computerChoice) {
    playerChoiceDisplay.innerHTML = playerChoice;
    computerChoiceDisplay.innerHTML = computerChoice;
    compareDisplay.innerHTML = compareString;
}

function updateMessage (message) {
    messageDisplay.innerHTML = message;
}