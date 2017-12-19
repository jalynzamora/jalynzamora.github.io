function windChill(temp, speed){
	var f = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275  * temp * Math.pow(speed, 0.16));
	return f;
}
 
	var result = windChill(40, 5);

	document.getElementById('output').innerHTML = result;

