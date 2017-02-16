/* Retrieve the JSON from OpenWeather API, depending on the zip code, and country code that the user inputs */
function gettingJSON() {
    alert("jquery loaded");
    var zip = document.getElementById('zipCode').value;
    var country = document.getElementById('countryCode').value;
    var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + country + "&APPID=fe8de29f7b69b5e5b6898e1d9af5d072";
    $.ajax({
    	url: weather,
    	jsonp: 'callback',
    	dataType: 'jsonp',
    	success: function(response){
    		document.getElementById("out").innerHTML += "<p>" + response.weather[0].main + "</p>";
    	    document.getElementById("out").innerHTML += "<p>" + response.weather[0].description + "</p>";
    	},
    	error: function (request, status, error){
    		alert(request.responseText);
    	}
    });
    // $.getJSON(weather, function(json) {
    //      document.getElementById("out").innerHTML += "<p>" + json.weather[0].main + "</p>";
    //      document.getElementById("out").innerHTML += "<p>" + json.weather[0].description + "</p>";
    // });
}
