const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isWordA = function(word) {

  if (word.slice(0, 1) == "a") {
  return true;
  }

  return false;
};

console.log(getValidInput('Enter a word with initial "a": ', isWordA));

// TODO 2: write a validator 
// that ensures input is a vowel
let isVowel = function(letter) {

  if (letter != "a" && letter != "e" && letter != "i" && letter != "o" && letter != "u") {
  return false;
  }

  return true;
};

console.log(getValidInput('Enter a vowel: ', isVowel));

// Be sure to test your code!
