
let message = "Hello, World!";

function printMessage() {
    console.log(message);
}

printMessage();
message = "Goodbye";
printMessage();

// Question 5 

let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));