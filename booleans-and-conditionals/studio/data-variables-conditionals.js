// Initialize Variables below
let date = "Monday 2019-03-18";

let time = "10:05:34 AM";

let astronautCount = 7;

let astronautStatus = "ready";

let averageAstronautMassKg = 80.7;

let crewMassKg = astronautCount * averageAstronautMassKg;

let fuelMassKg = 760000;

let shuttleMassKg = 74842.31;

let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;

let maximumMassLimit = 850000;

let fuelTempCelsius = -225;

let minimumFuelTemp = -300;

let maximumFuelTemp = -150;

let fuelLevel = "100%";

let weatherStatus = "clear";

let preparedForLiftOff = true;

let astronautCountCheck = true;

let astronautReady = true;

let massCheck = true;

let temperatureCheck = true;

let fuelCheck = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if ( astronautCount >= 7) {
    astronautCountCheck = true
} else {
    astronautCountCheck = false
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    astronautReady = true
} else {
    astronautReady = false
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) {
    massCheck = true
} else {
    massCheck = false
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= maximumFuelTemp && fuelTempCelsius >= minimumFuelTemp) {
    temperatureCheck = true
} else {
    temperatureCheck = false
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    fuelCheck = true
} else {
    fuelCheck = false
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    preparedForLiftOff = true
} else {
    preparedForLiftOff = false
}
// Verify shuttle launch can proceed based on above conditions
if (astronautCountCheck && astronautReady && massCheck && temperatureCheck &&  fuelCheck && preparedForLiftOff) {
    console.log("All the systems are a go!");
    console.log ("Date:", date);
    console.log ("Time:", time);
    console.log ("Astronaut Count:", astronautCount);
    console.log ("Crew Mass Kg:", crewMassKg);
    console.log ("Fuel Mass:", fuelMassKg);
    console.log ("Shuttle Mass Kg:", shuttleMassKg);
    console.log ("Total Mass Kg:", totalMassKg);
    console.log ("Fuel Temperature Celsius:", fuelTempCelsius);
    console.log ("Weather Status:", weatherStatus);
    console.log ("Have a safe trip Astronauts!");
} else {
    console.log("Systems not ready.")
}