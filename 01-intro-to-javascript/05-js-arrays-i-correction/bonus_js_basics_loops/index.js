// **Tasks:**

// Yes, yes, we could do this with array methods! But those declarative approaches use these basic loop constructs under the hood! So we better learn them! 😊
// Array of animals in the zoo
const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];

// 1.  Use a `for` loop to count the total number of animals.
let totalAnimals = 0;
for (let i = 0; i < animals.length; i++) {
	totalAnimals++;
}

console.log('totalAnimals:', totalAnimals);

// 2.  Use a `while` loop to count animals whose names have five or more letters.
// You can check the [length of a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
let animals5CharOrMore = 0;
let i = 0;
while (i < animals.length) {
	if (animals[i].length <= 5) {
		animals5CharOrMore++;
	}
	i++;
}

console.log('animals5CharOrMore:', animals5CharOrMore);

// 3.  Use a `do...while` loop to count animals until you encounter an animal whose name starts with 'm'
let count = 0;
do {
	if (animals[count].startsWith('m')) {
		break;
	}
	count++;
} while (count < animals.length);

console.log(`Count until m animal: ${count}`);
