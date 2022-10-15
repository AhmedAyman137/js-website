
let computerWins = 0;
let playerWins = 0;
function computerPlay() {
    let playArray = ['Rock', 'Paper', 'Scissors'];
    let cplay = Math.floor(Math.random() * playArray.length);
    let computerTurn = playArray[cplay];
    return computerTurn;
}

function playRound(playerSelection, computerSelection) {
    player1 = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();
    let winner;
    let loser;
    let result;
    if (player1 == computer) {
        return `Draw! Both of you Played ${player1}`;
    }
    switch (player1) {
        case 'rock':
            if (computer == 'scissors') {
                winner = player1;
                loser = computer;
                playerWins++;
                result = 'You Won!';
            }
            else if (computer == 'paper') {
                winner = computer;
                loser = player1;
                computerWins++;
                result = 'You Lost!';
            }

            break;

        case 'paper':
            if (computer == 'rock') {
                winner = player1;
                loser = computer;
                playerWins++;
                result = 'You Won!';
            }
            else if (computer == 'scissors') {
                winner = computer;
                loser = player1;
                computerWins++;
                result = 'You Lost!';
            }
            break;

        case 'scissors':
            if (computer == 'paper') {
                winner = player1;
                loser = computer;
                playerWins++;
                result = 'You Won!';
            }
            else if (computer == 'rock') {
                winner = computer;
                loser = player1;
                computerWins++;
                result = 'You Lost!';
            }
            break;
    }
    result = `${result + ' ' + winner} beats ${loser}`;
    return result;
}

function game() {
    let playerInput;
    for (let i = 0; i < 5; i++) {
        let computerInput = computerPlay();
        playerInput = prompt("Enter Rock, Paper, or Scissors");
        while (playerInput.toLowerCase() != 'rock' && playerInput.toLowerCase() != 'paper' && playerInput.toLowerCase() != 'scissors') {
            playerInput = prompt("Wrong input, Enter Rock, Paper, or Scissors");
        }
        console.log(`Computer played ${computerInput}`);
        console.log(`You played ${playerInput}`);
        console.log(playRound(playerInput, computerInput));
    }
    console.log(`Computer score: ${computerWins}`);
    console.log(`Player score: ${playerWins}`);
    if (computerWins > playerWins) {
        console.log('The game has finished, Computer Won!')
    }
    else if (computerWins < playerWins) {
        console.log('The game has finished, You Won!')
    }
    else {
        console.log('The game has finished, Draw!')
    }
}

game();

