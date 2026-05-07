// What is this?
/* This is a 


multi-line comment
*/

// console.log(20 + 5);

// Variables
let result = 20 + 5;
// console.log('result:', result);

result = '25';

const somethingToKeep = "Don't let me go!";
const somethingtokeep = 'A new variable! But use camelCase!';
// somethingToKeep = 'Changed!';

// console.log(somethingToKeep);
// console.log(somethingtokeep);

var dontUseMe =
	"Don't use me! Only if you need really old browser compatibility";

// Arithmetic
let myNum = 0;

myNum = 1;
// console.log('myNum:', myNum);
myNum = myNum + 1;
myNum += 1;
myNum++;

// console.log('myNum:', myNum);

// simple comparison
// Don't use this one - usually
// console.log(10 == 10);
// console.log(10 == 11);
// console.log(10 == '10');
// console.log(false == 0);
// console.log(true == 1);

// strict comparison
// console.log(10 === 10);
// console.log(10 === '10');
// console.log(10 !== 10);
// console.log(10 !== 11);

//  logical operators

// logical AND
// console.log(10 === 10 && 5 > 3);
// console.log(7 <= 7 && 6 < 6);

// logical OR
// console.log(7 === 7 || 5 < 3);

// logical NOT
// console.log(!true);

// Conditionals
let weatherToday;
let temp = 20;

if (temp >= 20) {
	// let weatherToday = 'toasty';
	weatherToday = 'warm';
	// console.log('weatherToday in if:', weatherToday);
} else if (temp >= 10 && temp < 20) {
	weatherToday = 'chilly';
} else {
	weatherToday = "I'm not sure of the weather today.";
}

// console.log('weatherToday:', weatherToday);

// ternary operator
let isPlayTime = true;

// if (isPlayTime) {
// 	console.log('Yay, time to play!');
// } else {
// 	console.log('Oh no, I have to work :(');
// }

// isPlayTime
// 	? console.log('Yay, time to play!')
// 	: console.log('Oh no, I have to work :(');

// switch statements
let characterClass = 'sorcerer';

// switch (characterClass) {
// 	// (characterClass === 'fighter')
// 	case 'fighter':
// 		console.log("I'm very strategic!");
// 		break;
// 	// (characterClass === 'monk')
// 	case 'monk':
// 		console.log('Who needs weapons, when I have my fists!');
// 		break;
// 	case 'wizard':
// 		console.log('I get my magic from books!');
// 	case 'sorcerer':
// 	case 'warlock':
// 		console.log('I can do powerful magic!');
// 		break;
// 	default:
// 		console.log('I love DnD!');
// }

// Functions
// function declarations - are hoisted
sayHelloWorld();
function sayHelloWorld() {
	console.log('Hello world!');
}

function writeAMessage() {
	return 'Hello world!';
}

const helloMsg = writeAMessage();
console.log(helloMsg);

// function expressions
const goodByeWorld = function () {
	console.log('Goodbye, cruel world!');
};
goodByeWorld();

// arrow functions
const makeASandwich = () => {
	console.log("Here's your sandwich!");
};

makeASandwich();

const square = (num) => {
	return num * num;
};

const squareOf7 = square(7);
console.log(squareOf7);

const multiply = (num1, num2) => {
	return num1 * num2;
};

console.log(multiply(3, 4));
