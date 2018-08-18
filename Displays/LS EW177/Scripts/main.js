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

if (Clock == "24h"){
	currentHours1 = ( currentHours < 10 ? "0" : "" ) + currentHours;
	currentMinutes1= ( currentMinutes1< 10 ? "0" : "" ) + currentMinutes1;
	currentTimeString = currentHours + currentMinutes + currentMinutesunit;
}
if (Clock == "12h"){
	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
	currentHours = ( currentHours == 0 ) ? 12 : currentHours;
	currentMinutes1= ( currentMinutes1< 10 ? "0" : "" ) + currentMinutes1;
	currentTimeString = currentHours + currentMinutes + currentMinutesunit;
}

document.getElementById("hour").innerHTML = hourtext[currentHours];
document.getElementById("minute").innerHTML = minutestext[currentTime.getMinutes()];
document.getElementById("minutesunit").innerHTML = minutesunittext[currentMinutesunit];
document.getElementById("weekday").innerHTML = shortdays[currentTime.getDay()];
document.getElementById("date").innerHTML = currentDate;
document.getElementById("month").innerHTML = shortmonths[currentTime.getMonth()];
document.getElementById("year").innerHTML = currentTime.getFullYear();
}

function init(){
updateClock();
setInterval("updateClock();", 1000);
}
