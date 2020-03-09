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
// creating the promise to work sync

 getTrains = function(station){  //get the information from the url 
  fetch(url)
   .then ((resp) => resp.json())  //make it into a JSON file 
  .then (function(data) {   //pass the data to get train infomation 
    // console.log(data);

    getTrainInfo(data);  //parse the information 
  }).then(function() {
    console.log(out);
    document.getElementById('trainInfo').innerHTML = out;  //display the data  
    
   

    console.log(trainArray);
  }).catch(error => console.log(error));  //catch's errors that come along the way 
}

// Train information to be displayed 

  getTrainInfo = function(data) {
document.getElementById('trainInfo').innerHTML = out;
out = "";
const trainArray = data.ctatt.eta;
console.log(trainArray);
const station = trainArray[0].staNm;
out += "<h1>" + station + "</h1>";

for (var x=0; x <trainArray.length; x++){
  const destination = trainArray[x].destNm;
  let arrivalTime = trainArray[x].arrT;
  arrivalTime = moment.tz(arrivalTime, "America/Chicago");
  arrivalTime = moment(arrivalTime).fromNow();
  const rt = trainArray[x].rt;
  const description = trainArray[x].stpDe;
  const approaching = trainArray[x].isApp;
}
  }
