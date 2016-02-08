// two global variables
var secondsRemaining = 0;
var intervalHandle = 0;

function resetPage() {
    document.getElementById("inputArea").style.display = "block";
}



// called after every second
function tick() {
	// grab <h1>
	var timeDisplay = document.getElementById('time');

	// convert seconds into mm:ss
	var mm = Math.floor(secondsRemaining/60);
	var ss = secondsRemaining - mm * 60;

	// add a leading Zero, if value < 10
	if (ss < 10) {
		ss = "0" + ss;
	}

	var message = mm + ':' + ss;

	timeDisplay.innerHTML = message;

	// stop everything, when value goes down to Zero
	if (secondsRemaining === 0){
		alert('Done');
		clearInterval(intervalHandle);
		resetPage();
	}

	// keep on subtracting seconds
	secondsRemaining--;
}


function startCountdown(){
	// get value from 'minutes' box;
	var min = document.getElementById('minutes').value;
	console.log('min: ', min);
	// do a check of integer
	if (isNaN(min)){
		alert('Not A Number!!!');
		return;
	}
	
	// total seconds remaining
	// 'secondsRemaining' is a global variable defined at top
	secondsRemaining = min * 60;
	console.log(secondsRemaining);
	// create an interval, being called after 1 sec
	intervalHandle = setInterval(tick, 1000);
}



// as soon as the page is loaded...
window.onload = function() {

	// create input text box, give id 'minutes'
	var inputMinutes = document.createElement('input');
	inputMinutes.setAttribute('id', 'minutes');
	inputMinutes.setAttribute('type', 'text');
	

	// create a button
	var startButton = document.createElement('input');
	startButton.setAttribute('type', 'button');
	startButton.setAttribute('value', 'Start Countdown');

	startButton.onclick = function() {
		startCountdown();
	};

	document.getElementById('inputArea').appendChild(inputMinutes);
	document.getElementById('inputArea').appendChild(startButton);
};








/*


 function tick() {
    // grab the h1
    var timeDisplay = document.getElementById("time");
    
    // turn seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);
    
    // add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }
    // concatenate with colon
    var message = min + ":" + sec;
    // now change the display
    timeDisplay.innerHTML = message;
    
    // stop if down to zero
    if (secondsRemaining === 0) {
        alert("Done!");
        clearInterval(intervalHandle);
        resetPage();
    }
    // subtract from seconds remaining
    secondsRemaining--;
}
  


function startCountdown() {
    // get contents of the "minutes" text box
    var minutes = document.getElementById("minutes").value;
    // check if not a number
    if (isNaN(minutes)) {
        alert("Please enter a number!");
        return;
    }
    // how many seconds?
    secondsRemaining =  minutes * 60;
    // every second, call the "tick" function
    intervalHandle = setInterval(tick, 1000);
    // hide the form
    document.getElementById("inputArea").style.display = "none";
}

   
window.onload =  function () {
    // create input text box and give it an id of "minutes"
    var inputMinutes = document.createElement("input");
    inputMinutes.setAttribute("id", "minutes");
    inputMinutes.setAttribute("type", "text");
    // create a button
    var startButton = document.createElement("input");
    startButton.setAttribute("type", "button");
    startButton.setAttribute("value", "Start Countdown");
    startButton.onclick = function () {
        startCountdown();
    };
    // add to the DOM, to the div called "inputArea"
    document.getElementById("inputArea").appendChild(inputMinutes);
    document.getElementById("inputArea").appendChild(startButton);
};
*/
