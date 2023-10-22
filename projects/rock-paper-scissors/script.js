function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    let choice = Math.floor(Math.random() * 3);

    return choices[choice]
}

function playRound(playerSelection, computerSelection = getComputerChoice().toLowerCase()) {
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

    let computerCount = 0;
    let playerCount = 0;

    let result;

    for(let i = 0; i < 5; i++) {
        result = playRound(prompt("Rock, paper or scissors?"));
        console.log(result);

        const resultArr = result.split(" ");
        if (resultArr[1] === "win!") {
            playerCount++;
        } else if (resultArr[1] === "lose!") {
            computerCount++;
        }
    }

    if (computerCount > playerCount) {
        console.log("The computer wins!");
    } else if (playerCount > computerCount) {
        console.log("The player wins!");
    } else {
        console.log("It's a tie!");
    }
}

game();