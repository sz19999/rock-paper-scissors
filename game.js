function getHumanChoice() {
    return prompt("Paper, Rock or Scissors?:")
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)    // gen a random num from 0 to 2 uniformly

    switch (choice) {
        case 0:
            return "paper"
        case 1:
            return "rock"
        case 2:
            return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "paper"    && computerChoice === "rock")     ||
        (humanChoice === "rock"     && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        ++humanWins
        alert("You have won this round!")
    }
    else {
        ++computerWins
        alert("You have lost this round! The computer wins!")
    }
}

function playGame() {
    // play paper-rock-scissors game 5 rounds
    for (i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }

    // show game stats
    alert(`player wins: ${humanWins}\ncomputer wins: ${computerWins}`)
}

// global variables
let humanWins    = 0
let computerWins = 0

playGame()  // start game