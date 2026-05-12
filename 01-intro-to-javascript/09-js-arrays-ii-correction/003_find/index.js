// 1.  **Initialize an Array of Numbers:**

//     *   Create an array called `numbers` containing the following values in order: `10`, `20`, `30`, `40`, `50`.
const numbers = [12, 20, 30, 40, 50];
// 2.  **Use the `find` Method to Locate a Number Greater Than 25:**

//     *   Use the `find` method to locate the first number in
// `numbers` that is greater than `25`.
const findNumber = numbers.find((number) => number > 25);

//     *   Print the found number to the console.
console.log('findNumber: ', findNumber);

// 3.  **Initialize an Array of Objects:**

const people = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 30 },
	{ name: 'Charlie', age: 35 },
	{ name: 'David', age: 40 }
];
// 4.  **Use the `find` Method to Locate a Person Named "Charlie":**

//     *   Use the `find` method to locate the first object in
// `people` where the `name` property is `"Charlie"`.
const namedCharlie = people.find((person) => person.name === 'Charlie');
//     *   Print the found object to the console.
console.log('namedCharlie:', namedCharlie);
