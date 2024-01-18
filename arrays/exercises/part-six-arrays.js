//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

element1 = ['hydrogen', 'H', 1.008];
element2 = ['helium', 'He', 4.003];
element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

table = [];

table.push(element1, element2, element26);

console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log(table[1]);

console.log(table[1][1]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log(`The mass of element1 is ${table[0][2]}.`);

console.log(`The name for element 2 is ${table[1][0]}.`);

console.log(`The symbol for element26 is ${table[2][1]}.`);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
player1 = ["Mike", 20];
player2 = ["Julia", 18];
player3 = ["Mark", 22];
player4 = ["Anna", 23];
player5 = ["Will", 23];
player6 = ["Liz", 21];

team1 = [];
team2 = [];
team3 = [];

team1.push(player1, player2);
console.log(team1);

team2.push(player3, player4);
console.log(team2);

team3.push(player5, player6);
console.log(team3);

triGame = [];

triGame.push(team1, team2, team3);
console.log(triGame);

console.log(`The player 1 is ${triGame[0][0][0]} and he/she is ${triGame[0][0][1]} years old.`);

console.log(`The player 6 is ${triGame[2][1][0]} and he/she is ${triGame[2][1][1]} years old.`);

console.log(`The player 4 is ${triGame[1][1][0]} and he/she is ${triGame[1][1][1]} years old.`);

console.log(`The player 5 is ${triGame[2][0][0]} and he/she is ${triGame[2][0][1]} years old.`);
