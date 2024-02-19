const whoWon = require("../RPS.js");

describe("whoWon", function () {

    test("check if whoWon behaves correctly when the players tie", function () {
        let result = whoWon("paper", "paper");
        expect(result).toEqual("TIE!");
    });

    test("check if player 2 wins with scissors", function () {
        let result = whoWon("paper", "scissors");
        expect(result).toEqual("Player 2 wins!");
    });

    test("check if player 2 wins with paper", function () {
        let result = whoWon("rock", "paper");
        expect(result).toEqual("Player 2 wins!");
    });

    test("check if player 2 wins with rock", function () {
        let result = whoWon("scissors", "rock");
        expect(result).toEqual("Player 2 wins!");
    });
});