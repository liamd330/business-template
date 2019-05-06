	function validateUpperForm() {
			
		if (document.forms[0].upperEmailAddress.value == "") {
			alert("Please enter your email address.");
			return false;
			}
		if (/\w+@\w+\.\w+/.test(document.forms[0].upperEmailAddress.value) == false) {
			alert("Please enter a valid email address.");
			return false;
		}
			return true;
		}
		
	function validateLowerForm() {
			
		if (document.forms[1].lowerEmailAddress.value == "") {
			alert("Please enter your email address.");
			return false;
			}
		if (/\w+@\w+\.\w+/.test(document.forms[1].lowerEmailAddress.value) == false) {
			alert("Please enter a valid email address.");
			return false;
		}
			return true;
		}