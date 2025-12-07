// Computer Choice
let arr = ["rock", "paper", "scissor"];
function getComputerChoice() {
    let val = Math.floor(Math.random() * 3);
    return arr[val];
}

function playGame() {
    let human = getHumanChoice();
    let computer = getComputerChoice();

    document.getElementById("comHand").textContent = computer;

    playRound(human, computer);
}

// Get Human Input
function getHumanChoice() {
    let value = document.querySelector("input").value.toLowerCase();
    return value;
}

let humanWins = 0;
let computerWins = 0;


const rules = {
    "rock-scissor": "You Win! Rock beats Scissor",
    "rock-paper":   "You Lose! Paper beats Rock",
    "paper-rock":   "You Win! Paper beats Rock",
    "paper-scissor":"You Lose! Scissor beats Paper",
    "scissor-paper":"You Win! Scissor beats Paper",
    "scissor-rock": "You Lose! Rock beats Scissor",
};

function playRound(human, computer) {
    const resultBox = document.querySelector(".result");

    if (!["rock", "paper", "scissor"].includes(human)) {
        resultBox.textContent = "❌ Invalid Input. Type Rock, Paper or Scissor.";
        return;
    }

    if (human === computer) {
        resultBox.textContent = "Match Drawn!";
        return;
    }

    const key = `${human}-${computer}`;
    const message = rules[key];

    resultBox.textContent = message;

    // update scores
    if (message.startsWith("You Win")) {
        humanWins++;
    } else if (message.startsWith("You Lose")) {
        computerWins++;
    }

    updateScoreUI();
}

function updateScoreUI() {
    document.getElementById("humanScore").textContent = humanWins;
    document.getElementById("computerScore").textContent = computerWins;
}
