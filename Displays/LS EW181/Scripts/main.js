window.addEventListener("load", function() { 
   document.body.style.width='100%';
   document.body.style.height='100%';
}, false);

function updateClock() { 
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

if (Clock == "24h"){
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
}
if (Clock == "12h"){
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentTimeString = currentHours + ":" + currentMinutes;
}

document.getElementById("hour").innerHTML = currentHours;
document.getElementById("minute").innerHTML = currentMinutes;
document.getElementById("ampm").textContent = timeOfDay;
document.getElementById("weekday").innerHTML = shortdays[currentTime.getDay()];
document.getElementById("date").textContent = currentDate;
document.getElementById("month").innerHTML = shortmonths[currentTime.getMonth()];
document.getElementById("year").innerHTML = currentTime.getFullYear();
}

function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
              tmp = item.split("=");
              if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }

getWeather();
    function getWeather(){
        var latitude = findGetParameter("latitude");
        var longitude = findGetParameter("longitude");
        $.ajax('http://api.wunderground.com/api/c6dc8e785d943109/conditions/forecast/forecast/q/'+latitude+','+longitude+'.json', {
            dataType: 'jsonp',
            success: function(json) {
                document.getElementById('temp').innerHTML = json.current_observation.temp_c + "&deg;";
                document.getElementById('desc').innerHTML = json.current_observation.weather;
            }
        });
    }

function init(){
updateClock();
mainUpdate();
setInterval("updateClock();", 1000);
}