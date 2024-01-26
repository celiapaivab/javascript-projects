function sayHello() {
   console.log("Hello, World!");
}

sayHello();

//Exemple "return" Terminates Function Execution

function countToN(n) {
   let count = 1;
   while (true) {
       if (count > n) {
           return;
       }
       console.log(count);
       count++;
   }
}

countToN (5);

// Question 2

function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);

// Question 3

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');


function repeater(str) {
   let repeated = str + str;
   // console.log(repeated);
}

console.log(repeater('Bob'))
