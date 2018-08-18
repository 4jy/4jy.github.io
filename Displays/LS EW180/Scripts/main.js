window.addEventListener("load", function() {
   document.body.style.width='100%';
   document.body.style.height='100%';
}, false);

function updateClock() {
var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentMinutes1 = currentTime.getMinutes();
var currentMinutesunit = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
var currentDate = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
timeOfDay = ( currentHours < 12 ) ? "am" : "pm";

if (Clock == "24h"){
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentMinutes1= ( currentMinutes1< 10 ? "0" : "" ) + currentMinutes1;
	currentTimeString = currentHours + currentMinutes + currentMinutesunit;
}
if (Clock == "12h"){
	currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentHours = ( currentHours == 0 ) ? "12" : currentHours;
	currentHours = ( currentHours == 13 ) ? "01" : currentHours;
	currentHours = ( currentHours == 14 ) ? "02" : currentHours;
	currentHours = ( currentHours == 15 ) ? "03" : currentHours;
	currentHours = ( currentHours == 16 ) ? "04" : currentHours;
	currentHours = ( currentHours == 17 ) ? "05" : currentHours;
	currentHours = ( currentHours == 18 ) ? "06" : currentHours;
	currentHours = ( currentHours == 19 ) ? "07" : currentHours;
	currentHours = ( currentHours == 20 ) ? "08" : currentHours;
	currentHours = ( currentHours == 21 ) ? "09" : currentHours;
	currentHours = ( currentHours == 22 ) ? "10" : currentHours;
	currentHours = ( currentHours == 23 ) ? "11" : currentHours;
	currentHours = ( currentHours == 24 ) ? "12" : currentHours;
	currentMinutes1= ( currentMinutes1< 10 ? "0" : "" ) + currentMinutes1;
	currentTimeString = currentHours + currentMinutes + currentMinutesunit;
}

document.getElementById("hour").innerHTML = currentHours;
document.getElementById("minute").innerHTML = minutestext[currentTime.getMinutes()];
document.getElementById("minutesunit").innerHTML = minutesunittext[currentMinutesunit];
document.getElementById("ampm").innerHTML = timeOfDay;
document.getElementById("Cal").textContent = shortmonths[currentTime.getMonth()] + " " + currentDate + " " + shortdays[currentTime.getDay()];
}

function init(){
updateClock();
setInterval("updateClock();", 1000);
}
