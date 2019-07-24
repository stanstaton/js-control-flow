var temp = 45;
var destination = "k";

if (destination.toUpperCase() === "K"){
	var kelvin = (temp - 32)*(5/9)+273.15;
	console.log(kelvin);
} else {
	var celcius = (temp-32)*(5/9);
	console.log(celcius);
}