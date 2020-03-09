<?phpheader('Access-Control-Allow-Origin: http://lapi.transitchicago.com');

$station = $_REQUEST['station'];

// The URL that we want to get

$url = 'http://lapi.transitchicago.com/api/1.0/ttarivals.aspx?key='
$url .= $station;
$url .= "&outputType=JSON";

// echo ("<h1>" , $url "<h1>" )
// If $contents is not a boolean FALSE value 

if($contents !== false){
  // Printe out the contents 
  echo $contents;
}
//  Need to learn how to convert this to express , becuase I belive this is doing the same thing that a express server would do 