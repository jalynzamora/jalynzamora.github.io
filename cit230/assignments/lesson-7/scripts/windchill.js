function computeNum() {
	
	var textInput = get("aNum").value;
	if (textInput.length < 3 || isNaN(textInput)) return; // Validation return nothing
	
	var theNumber = parseInt(textInput); // OK - parse string to number
	var theValue = theNumber * Math.pow(Math.random(), 3);
	
	// Output - output to the div and round the number value to two decimal places
	get("output").innerHTML = "The value is <strong>" + theValue.toFixed(2) + "</strong>!";
}

function get(e) { return document.getElementById(e); }