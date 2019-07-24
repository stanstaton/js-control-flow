var grade = 88;

if (grade >= 90) {
	console.log("Your grade is an A")
} else if (grade >= 80) {
	console.log("Your grade is a B")
} else if (grade >=70) {
	console.log("Your grade is a C")
} else if (grade >= 60) {
	console.log("Your grade is a D")
} else {
	console.log("Your grade is an F")
}

grade = (Math.floor(grade/10)*10);


switch(grade) {
	case 100:
	case 90:
	console.log("A")
	break;
	case 80:
	console.log("B")
	break;
	case 70:
	console.log("C")
	break;
	case 60:
	console.log("D")
	break;
	default:
	console.log("F")

}