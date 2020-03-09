let url = '';
let out = '';
let station = '';

window.onload = function(){
  let out = "<select  id=<'stationSelect'>";
  for (var x = 0; x < stations.length; x++){
    out += "<option value = ' " + stations[x].number + "'>";
    out += stations[x].name;
    out += "</option>";
  }
  out += "</select>";
  document.getElementById('stationSched')innerHTML = out;
this.document.getElementById('stationSelect').addEventListener('change', function ())
}