// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const rocket = document.getElementById("rocket");
    // rocket.style.position = absolute;
    // rocket.style.left = "0px";
    // rocket.style.bottom = "0px";


    takeOffButton.addEventListener('click', event => {
        confirmation = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    landing.addEventListener('click', event => {
        alert = alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "";
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbort.addEventListener('click', event => {
        confirmation = confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    upButton.addEventListener('click', event => {
        // movement = parseInt(rocket.style.bottom)+10+"px";
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    });

    downButton.addEventListener('click', event => {
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    });

    rightButton.addEventListener('click', event => {
        
    });

    leftButton.addEventListener('click', event => {
        
    });

}

window.addEventListener("load", init);
