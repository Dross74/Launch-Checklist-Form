// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;

      if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
         alert("All fields are required!");
      }
      else if (fuelLevel < 10000) {
         document.getElementById("faultyItems").style.visibility = 'visible';
         document.getElementById('fuelStatus').innerHTML = 'Fuel level to low for launch';
         document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = 'red';
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`; 
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch`;
         
      }
      else if (cargoMass > 10000) {
         document.getElementById("faultyItems").style.visibility = 'visible';
         document.getElementById('cargoStatus').innerHTML = 'To much mass for shuttle to take off';
         document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = 'red';
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`; 
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch`;
      }
      else {
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
         document.getElementById("launchStatus").style.color = 'green';
      }

   });
});

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
   response.json().then(function (json) {
      let missiontarget = json;
      let printMe = document.getElementById('missionTarget')     
      printMe.innerHTML = `

      <h1>Mission Destination</h1>
   <ol>
   <li><strong>Name:</strong> ${missiontarget[0].name}</li>
   <li><strong>Diameter:</strong> "${missiontarget[0].diameter}"</li>
   <li><strong>Star:</strong> ${missiontarget[0].Star}</li>
   <li><strong>Distance from Earth:</strong>' ${missiontarget[0].distance}'</li>
   <li><strong> Number of Moons:</strong> ${missiontarget[0].moon}</li>
   </ol>
   <img src = "${missiontarget[0].image}" />

   `
   })
});
 