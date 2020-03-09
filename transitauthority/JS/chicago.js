let url = ''; //holds the url created to query the API
let out = ''; // output function 
let station = ''; // station that is currently selected function

window.onload = function () { // onload event waits for everthing to load before excuting the getStations functions 
  getStations();
}

getStations = function () {
  let out = "<select  id=<'stationSelect'>";
  for (var x = 0; x < stations.length; x++) {
    out += "<option value = ' " + stations[x].number + "'>";
    out += stations[x].name;
    out += "</option>";
  }
  out += "</select>";
  document.getElementById('stationSched').innerHTML = out;
  document.getElementById('stationSelect').addEventListener('change', function () {
    station = document.getElementById('stationSelect').value;
    url += "access.php/?station=" + station;
    getTrains(station);
    url = "";
  });
}

//  Getting train information 

getTrains = function(station){
  fetch(url)
  .then ((resp) => resp.json())
  .then (function(data) {
    // console.log(data);
    getTrainInfo(data);
  }).then(function() {
    console.log(out);
    document.getElementById('trainInfo').innerHTML = "";
    out="";
    const trainArray = data.ctatt.eta;
    console.log(trainArray);
  })
}

// Train information to be displayed 

  getTrainInfo = function(data) {
document.getElementById('trainInfo').innerHTML = "";
out = "";
  }
