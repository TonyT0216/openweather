function gettingJSON() {
    alert("jquery loaded");
    var zip = document.getElementById('zipCode').value;
    var country = document.getElementById('countryCode').value;
    var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + country + "&APPID=fe8de29f7b69b5e5b6898e1d9af5d072";
    $.getJSON(weather, function(json) {
         document.getElementById("out").innerHTML += "<p>" + json.weather[0].main + "</p>";
         document.getElementById("out").innerHTML += "<p>" + json.weather[0].description + "</p>";
    });
}
