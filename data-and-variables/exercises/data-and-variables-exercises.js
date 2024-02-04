// Declare and assign the variables below
let nameShuttle = "Determination";

let shuttleSpede = 17500;

let distanceMarsKm = 225000000;

let distanceMoonKm = 384400;

let milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof nameShuttle);

console.log(typeof shuttleSpede);

console.log(typeof distanceMars);

console.log(typeof distanceMoon);

console.log(typeof milesPerKm);

// Calculate a space mission below

let milesToMars = distanceMarsKm * milesPerKm;

let hoursToMars = milesToMars / shuttleSpede;

let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(nameShuttle + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below

let milesToMoon = distanceMoonKm * milesPerKm;

let hoursToMoon = milesToMoon / shuttleSpede;

let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

console.log(nameShuttle + " will take " + daysToMoon + " days to reach the Moon.");