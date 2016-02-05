
document.onclick = function() {
	alert("You Clicked somewhere in the Document");
};


var image = document.getElementById('mainImage');
image.onclick = function() {
	alert("You Clicked somewhere in the main Image");
};




// use the commented-out code for reference, or just write your own. 

//document.onclick = function() {
//	alert("You clicked somewhere in the document");
//};

//function prepareEventHandlers() {	
//	var myImage = document.getElementById("mainImage");
//	myImage.onclick =  function() {
//		alert("You clicked the image");
//	}
//}

//window.onload = function() {
	// prep anything we need to
//	prepareEventHandlers();
//};
