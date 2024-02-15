const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const restartButton = document.querySelector("#restart");
const divPlayerSelection = document.querySelector("#player-selection");
const divComputerSelection = document.querySelector("#computer-selection");
const divResult = document.querySelector("#result");
const divFinalResult = document.querySelector("#final-result");

rockButton.addEventListener('click', (e) => playGame(e.target.id));
paperButton.addEventListener('click', (e) => playGame(e.target.id));
scissorsButton.addEventListener('click', (e) => playGame(e.target.id));
restartButton.addEventListener('click', () => {
    [playerPoints, computerPoints] = [0,0]
    divComputerSelection.textContent = "";
    divFinalResult.textContent = "";
    divPlayerSelection.textContent = "";
    divResult.textContent = "";
});

const selections = ["rock", "paper", "scissors"];
const results = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]];

const getComputerChoice = () => {
    const number = Math.floor(Math.random() * 3);
    const selection = selections[number];
    return selection;
}

const playRound = (playerChoice, computerChoice) => {
    const playerChoiceConverted = playerChoice.toLowerCase();
    try {
        const result = results[selections.indexOf(playerChoiceConverted)][selections.indexOf(computerChoice)];
        let gameResult = '';
        switch (result) {
            case 1:
                gameResult = `You won! ${ playerChoice } beats ${ computerChoice }`;
                break;
            case 0:
                gameResult = `It's a draw, both chose ${ playerChoice }`;
                break;
            case -1:
                gameResult = `You lost! ${ computerChoice } beats ${ playerChoice }`;
                break;
        }
        divResult.textContent = gameResult;
        return result;
    }
    catch (error) {
        console.error("Sorry your choice was not found.");
        console.error("You have another chance.");
        return 2;
    }
}

let playerPoints = 0;
let computerPoints = 0;

const playGame = (playerChoice) => {
    if (playerPoints < 5 && computerPoints < 5)
    {
        let winner = 0;
        // for (let i = 0; i < 5; i++){
        //     let result = 0;
        //     console.log(`Round: ${ i + 1 }`);
        //     do {
        //         const playerChoice = prompt("Rock, Paper, Scissors, Shoot!");
        //         console.log(`Your choice: ${ playerChoice }`);
        //         const computerChoice = getComputerChoice();
        //         console.log(`Computer choice: ${ computerChoice }`);
        //         result = playRound(playerChoice, computerChoice);
        //     } while (result == 2);
        //     winner += result;
        // }
        divPlayerSelection.textContent = `Your choice: ${ playerChoice }`;
        const computerChoice = getComputerChoice();
        divComputerSelection.textContent = `Computer choice: ${ playerChoice }`;
        winner = playRound(playerChoice, computerChoice);
        if (winner > 0) {
            playerPoints++;
        } else if (winner < 0) {
            computerPoints++;
        }
        if(playerPoints >= 5) divFinalResult.textContent = "You won! You reached 5 points";
        if(computerPoints >= 5) divFinalResult.textContent = "You loose! Computer reached 5 points";

    }
}

// console.log(playGame());