//TODO: Add Your Code Below
window.addEventListener("load", function () {
    // TODO: fetch planets JSON
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("container");
            html = "";
            count = 0;
            for (let i = 0; i < json.length; i++){
                let astronaut = json[i];
                count++;
                html += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${astronaut.picture}>
                    </div>
                `;
            };
            div.innerHTML = html + `<h2> Total Astronauts: ${count}</h2>`;
        });
    });
});
