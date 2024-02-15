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
        console.log(gameResult);
        return result;
    }
    catch (error) {
        console.error("Sorry your choice was not found.");
        console.error("You have another chance.");
        return 2;
    }
}

const playGame = () => {
    let winner = 0;
    for (let i = 0; i < 5; i++){
        let result = 0;
        console.log(`Round: ${ i + 1 }`);
        do {
            const playerChoice = prompt("Rock, Paper, Scissors, Shoot!");
            console.log(`Your choice: ${ playerChoice }`);
            const computerChoice = getComputerChoice();
            console.log(`Computer choice: ${ computerChoice }`);
            result = playRound(playerChoice, computerChoice);
        } while (result == 2);
        winner += result;
    }
    if (winner > 0) {
        return "You won!";
    } else if (winner < 0) {
        return "You loose!";
    } else {
        return "It's a draw";
    }
}

console.log(playGame());