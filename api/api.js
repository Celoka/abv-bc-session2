function getGeo(){

var http = require('https'), apiKey = "AIzaSyC5Tt3obMbm5l2BF-IbLG3lYtMogl_HCDQ", apiAddress ="https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=";
var request = http.get( apiAddr+ apiKey, function(res){
	    var body = '';
	    res.on('data', function(chunk){
		    body += chunk
	    });
	    res.on ('end', function(){
		    var location = JSON.parse(body);
		    console.log(location);
	    });
    });
};