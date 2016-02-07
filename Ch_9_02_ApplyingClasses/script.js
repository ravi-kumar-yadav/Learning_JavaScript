// changing the Style of the div 'mainContent'
function changeStyle() {
	document.getElementById('mainContent').onclick = function() {
		if (document.getElementById('mainContent').className == "") {
			document.getElementById('mainContent').className = "example";
		} else {
			document.getElementById('mainContent').className = "";
		}
	};
}


window.onload = function() {
	changeStyle();
}
