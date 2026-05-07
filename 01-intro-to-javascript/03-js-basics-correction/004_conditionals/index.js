// #### Tasks:

// 1.  Define a variable `temperature` and set it to
// any integer to represent the temperature in degrees Celsius.
let advice;
let temperature = 31;
// 2.  Use `if/else` to advise wearing a coat if the temperature is below 15 degrees.
if (temperature < 15) {
	// 3.  Use `if/else if/else` to give advice based on three temperature ranges:
	advice = 'Wear a coat.';
	// console.log('Wear a coat');
	//     *   Below 15 degrees: suggest a coat.
} else if (temperature >= 15 && temperature <= 25) {
	//     *   Between 15 and 25 degrees: suggest a sweater.
	advice = 'Wear a sweater';
	//     *   Above 25 degrees: suggest a t-shirt.
} else if (temperature > 25 && temperature <= 30) {
	advice = 'Wear a t-shirt';
} else {
	advice = 'Be naked!';
}
console.log(advice);

// 4.  Use a `switch` statement to provide advice based
// on specific temperatures (just a few for example): 10, 20, and 30 degrees.
switch (temperature) {
	case 10:
		console.log('Wear a nice coat.');
		break;
	case 20:
		console.log('Wear a nice sweatshirt');
		break;
	case 30:
		console.log('Go to the beach!');
		break;
	default:
		console.log('Do what you want, follow your heart.');
}

// 5.  Print the results for each task to the console.

// Play with different values for `temperature` and different scenarios!
