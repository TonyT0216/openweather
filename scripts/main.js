function geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        return;
    }

    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var timestamp = position.timestamp;
        var date = new Date(timestamp).toLocaleString();

        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";


        output.appendChild(img);

        displayWeather(latitude, longitude);
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }

    output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);

    function displayWeather(latitude, longitude) {
        var weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=fe8de29f7b69b5e5b6898e1d9af5d072";
        var json;
        output = document.getElementById("out2");
        $.ajax({
            type: 'POST',
            url: weather,
            dataType: 'json',
            success: function(results) {
                console.log(results);
                output.innerHTML = "<p>" + JSON.stringify(results.weather[0].description) + "</p>";
            }
        });
    }
}

function getWeather()
{
  var zip = document.getElementById('zipCode').value;
  var country  = document.getElementById('countryCode').value;
  var weather = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + country + "&APPID=fe8de29f7b69b5e5b6898e1d9af5d072";
  $.ajax({
    type: 'POST',
    url: weather,
    dataType: 'json',
    success: function(results) {
      console.log(results);
    }
  });
}

