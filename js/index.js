var forEach = function(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

var randomIntFromInterval = function(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

var $mapPins = document.querySelectorAll('#Map-shape g');

// Setup timelines attached to each map pin
forEach($mapPins, function(index, value) {
  // Group opacity timeline
  value.groupTimeline = new TimelineMax({
    paused: true
  });
  
  value.groupTimeline
  .to(value, 0.25, {
    opacity: 0
  });
  
  // Pulse animation
  var pinTimeline = new TimelineMax({
    repeat: -1,
    delay: randomIntFromInterval(1,3),
    repeatDelay: randomIntFromInterval(0, 1)
  });
    
  pinTimeline.
  to(value.querySelector('.Pin-back'), 3, {
    scale: 50,
    transformOrigin: 'center center',
    opacity: 0
  });
});

forEach(document.querySelectorAll('.js-Location-nav [data-location]'), function(index, value) {
 
   value.addEventListener('mouseenter', function(e) {   
     var location = e.target.getAttribute('data-location');
     
     // Hide other map pins
     forEach($mapPins, function(index, value) {
       if (value.getAttribute('data-location') !== location) {
         value.groupTimeline.play();
       }
     });
   }, false);
  
  value.addEventListener('mouseleave', function(e) {
    // Reverse all hidden map pins
    forEach($mapPins, function(index, value) {
       value.groupTimeline.reverse();
    });
    
  }, false);
});