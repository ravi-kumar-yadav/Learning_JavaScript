// attaching the EventHandler
// Defining the functionality also
function prepareEventHandlers() {
	document.getElementById('frmContact').onsubmit = function() {
		var errorNode = document.getElementById('errorMessage');
		if (document.getElementById('email').value == ""){
			errorNode.innerHTML = "Cannot submit with blank email id, so please do not leave emailid blank";
			// stop the form from getting submitted
			console.log("TRUE");
			return false;
		} else {
			errorNode.innerHTML = "";
			console.log("FALSE");
			return true;
		}
	};
}


// attaching the Handler after whole form is loaded
window.onload = function() {
	prepareEventHandlers();
}


