function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    let choice = Math.floor(Math.random() * 3);

    return choices[choice]
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `Tie! You both picked ${playerSelection}!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return 'You lose! Paper beats rock!';
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 'You win! Rock beats scissors!';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 'You win! Paper beats rock!';
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return 'You lose! Scissors beats paper!';
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 'You win! Scissors beats paper!';
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return 'You lose! Rock beats scissors!';
    } else {
        return 'Unexpected error occurred.';
    }
}

function game() {

    const buttonsDiv = document.querySelector("#buttons");
    const playerC = document.querySelector("#playerC");
    const computerC = document.querySelector("#computerC");

    const playerChoice = document.querySelector("#player");
    const computerChoice = document.querySelector("#computer");

    const rockButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const scissorsButton = document.createElement("button");

    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";

    rockButton.addEventListener("click", () => {
        let result = playRound("rock");
        const resultArr = result.split(" ");

        playerChoice.textContent = "Rock";

        if (resultArr[1] === "win!") {

            computerChoice.textContent = resultArr[4];

            let playerCount = Number.parseInt(playerC.textContent);
            playerCount++;
            playerC.textContent = playerCount;
        } else if (resultArr[1] === "lose!") {

            computerChoice.textContent = resultArr[2];

            let computerCount = Number.parseInt(computerC.textContent);
            computerCount++;
            computerC.textContent = computerCount;
        }
    });

    paperButton.addEventListener("click", () => {
        let result = playRound("paper");
        const resultArr = result.split(" ");

        playerChoice.textContent = "Paper";

        if (resultArr[1] === "win!") {

            computerChoice.textContent = resultArr[4];

            let playerCount = Number.parseInt(playerC.textContent);
            playerCount++;
            playerC.textContent = playerCount;
        } else if (resultArr[1] === "lose!") {

            computerChoice.textContent = resultArr[2];

            let computerCount = Number.parseInt(computerC.textContent);
            computerCount++;
            computerC.textContent = computerCount;
        }
    });

    scissorsButton.addEventListener("click", () => {
        let result = playRound("scissors");
        const resultArr = result.split(" ");

        playerChoice.textContent = "Scissors";

        if (resultArr[1] === "win!") {

            computerChoice.textContent = resultArr[4];

            let playerCount = Number.parseInt(playerC.textContent);
            playerCount++;
            playerC.textContent = playerCount;
        } else if (resultArr[1] === "lose!") {

            computerChoice.textContent = resultArr[2];

            let computerCount = Number.parseInt(computerC.textContent);
            computerCount++;
            computerC.textContent = computerCount;
        }
    });

    buttonsDiv.appendChild(rockButton);
    buttonsDiv.appendChild(paperButton);
    buttonsDiv.appendChild(scissorsButton);
}

game();