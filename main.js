function RollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

const player1 = RollDice();
const player2 = RollDice();

console.log(`Player1 Rolled: ${player1}`);
console.log(`Player2 Rolled: ${player2}`);

if (player1 > player2) {
    console.log("Player1 won!");
} else if (player1 < player2) {
    console.log("Player2 won!");
} else {
    console.log("It's a tie!");
}
