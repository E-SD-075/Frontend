// Loops
// for
// for (let i = 0; i < 5; i++) {
// 	console.log("It's party time!");
// }

// let myStr = 'No loop.';
// for (let i = 0; i < 5; i++) {
// 	// string concatenation
// 	console.log('The current value of i is: ' + i);
// 	// template literal
// 	console.log(`The current value of i is: ${i}`);
// }

// console.log(myStr);

// while
// while (true) {
// 	console.log('Infinite money glitch!');
// }

let percentLoaded = 0;
// while (percentLoaded < 100) {
// 	console.log('Loading...');

// 	percentLoaded += 10;
// }

let stillLoading = true;

// while (stillLoading) {
// 	console.log('Loading...');

// 	stillLoading = false;
// }

// do... while
// while (false) {
// 	console.log('Will I print?');
// }

// do {
// 	console.log('What about me?');
// } while (false);

// Arrays
const wizard = 'wizard';
const rogue = 'rogue';
const bard = 'bard';
const paladin = 'paladin';

const dndClasses = ['wizard', 'rogue', 'bard', 'paladin'];

const mixedArray = [true, 'string', 45, null];
// console.log('dndClasses:', dndClasses);
// console.log('dndClasses length:', dndClasses.length);

// console.log(dndClasses[0]);
// console.log(dndClasses[1]);
// console.log(dndClasses[2]);
// console.log(dndClasses[3]);
// console.log(dndClasses[4]); // undefined

dndClasses[3] = 'monk';
// console.log(dndClasses[3]);
dndClasses[4] = 'paladin';
// console.log(dndClasses[4]);

// for loop over an array
for (let i = 0; i < dndClasses.length; i++) {
	// console.log(dndClasses[i]);
}

// for... of
for (const dndClass of dndClasses) {
	// console.log(dndClass);
}

// Array methods

// push
const newLength = dndClasses.push('fighter');
// console.log(newLength);
// console.log(dndClasses);

// pop
dndClasses.pop();
// console.log(dndClasses);

// shift (remove first item) and unshift (add item to beginning)

// reverse() toReversed()
// dndClasses.reverse();
const reversedClasses = dndClasses.toReversed();

console.log(dndClasses);
// console.log(reversedClasses);

// .splice() .toSpliced()
// dndClasses.splice(1, 3);
// dndClasses.splice(2, 1, 'sorcerer');

//  .slice()
console.log(dndClasses.slice(0, 3));
console.log(dndClasses);

//  .join()

const dndClassesStr = dndClasses.join();
console.log(dndClassesStr);

console.log(dndClassesStr.split(','));
