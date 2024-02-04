//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel = 0;

let numberAstr = 0;

let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

// const input = require('readline-sync');

fuelLevel = input.question("Please enter the starting fuel level: ");
fuelLevel = Number(fuelLevel);

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
  fuelLevel = input.question("Invalid input. Please enter a positive number: ");
  fuelLevel = Number(fuelLevel);
}
console.log (fuelLevel);

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

numberAstr = input.question("Please enter the number of astronauts (up to a maximum of 7): ");
numberAstr = Number(numberAstr);

while (numberAstr <= 0 || numberAstr > 7 ) {
  numberAstr = input.question("Invalid input. Please enter a number 0-7: ");
  numberAstr = Number(numberAstr);
}
console.log (numberAstr);

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel-100*numberAstr >= 0) {
  altitude += 50;
  fuelLevel -= 100*numberAstr;
  console.log (fuelLevel, numberAstr);
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
  output += " Orbit achieved!";
} else {
  output += " Failed to reach orbit.";
}