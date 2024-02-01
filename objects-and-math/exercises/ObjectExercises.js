let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.floor(Math.random()*11)}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.

// console.log(superChimpOne);
// console.log(salamander);
// console.log(superChimpTwo);
// console.log(dog);
// console.log(tardigrade);

// Create an array to hold the animal objects.

let crew = [superChimpOne, salamander, superChimpTwo, dog, tardigrade];

// Print out the relevant information about each animal.

function crewReports (animal){
   return animal.name + " is a " + animal.species + ". They are " + animal.age + " years old and " + animal.mass + " kilograms. Their ID is " + animal.astronautID + "."
}

// console.log (crew.map(crewReports))

// Start an animal race!

function fitnessTest (array){
   let race = [], steps, turns;
   for (let i = 0; i < array.length; i++){
      steps = 0;
      turns = 0;
      while (steps < 20) {
         steps += array[i].move();
         turns ++;
         
      }
      race.push(`${array[i].name} took ${turns} turns to take 20 steps`)
   }
   
   return race;
}

console.log (fitnessTest(crew));