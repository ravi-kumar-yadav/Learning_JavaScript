function preparePage(){
	var brochures = document.getElementById('brochures');
	brochures.onclick = function() {
		var tourSelection = document.getElementById('tourSelection');
		if (brochures.checked) {
			tourSelection.style.display = "block";
		} else {
			tourSelection.style.display = "none";
		}
	};
	
	// Invoked only once, just to hide the 'tourSelection' div
	tourSelection.style.display = "none";
}

window.onload = function() {
	preparePage();
}

