var email = document.getElementById('email');

email.onfocus = function() {
	if (email.value == "your email") {
		email.value = "";
	}
};

email.onblur = function() {
	if (email.value == "") {
		email.value = "your email";
	}	
};

