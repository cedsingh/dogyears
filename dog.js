function getResult() {
	var years = document.getElementById('years').value;
	var months = document.getElementById('months').value;
	years = years == ''? 0: years;
	months = months == '' ? 0: months;
	var humanAge = parseInt(years)+parseInt(months)/12;
	document.getElementById('dogAge').innerHTML = toYYMMDD(calcAge(humanAge));
	return false;
}
function calcAge(value) {
	var dogAge;
	if(value > 21) {
		dogAge = 2 + (value-21)/4;
	}
	else {
		dogAge = value/10.5;
	}
	return dogAge;
}

function toYYMMDD(years) {
	var y = Math.floor(years);
	var m = (years - y)*12;
	var d = Math.round((m - Math.floor(m))*30);
	return y+" years "+Math.floor(m)+" months "+d+" days";
}