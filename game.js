function getHumanChoice(event) {
    return event.target.id
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);    // gen a random num from 0 to 2 uniformly

    switch (choice) {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "paper"    && computerChoice === "rock")     ||
        (humanChoice === "rock"     && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        ++humanWins;
        winMsg.textContent = "Player has won!";
    }
    else if (humanChoice === computerChoice) {
        winMsg.textContent = "It's a tie!";
    }
    else {
        ++computerWins;
        winMsg.textContent = "Computer has won!";
    }
}

function playGame(event) {
    let humanChoice = getHumanChoice(event)
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    // update game stats
    playerStats.textContent = `Player: ${humanWins}`;
    computerStats.textContent = `Computer: ${computerWins}`;
}

// global variables
let humanWins    = 0;
let computerWins = 0;

const playerStats = document.querySelector("#player-stats");
const computerStats = document.querySelector("#computer-stats");
const winMsg = document.querySelector("#win-msg");

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", playGame);
btnPaper.addEventListener("click", playGame);
btnScissors.addEventListener("click", playGame);

playGame();  // start game