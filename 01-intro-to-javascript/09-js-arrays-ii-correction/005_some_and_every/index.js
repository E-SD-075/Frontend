// 1.  **Initialize an Array of Numbers:**

//     *   Create an array called `numbers` containing the following values in order: `4`, `8`, `15`, `16`, `23`, `42`.
const numbers = [4, 8, 15, 15, 23, 42];

// 2.  **Use the `some` Method to Check for Numbers Greater Than 20:**

//     *   Use the `some` method to check if there are any numbers in
// `numbers` that are greater than `20`.
//     *   Print the result to the console (should be `true`).
console.log(
	'any number > 20:',
	numbers.some((num) => num > 20)
);
// 3.  **Use the `every` Method to Check for Numbers Less Than 50:**

//     *   Use the `every` method to check if all numbers in `numbers` are less than `50`.
//     *   Print the result to the console (should be `true`).
console.log(
	'all < 50:',
	numbers.every((num) => num < 50)
);

// 4.  **Initialize an Array of Objects:**

// 5.  **Use the `some` Method to Check if Any Student Failed:**
const students = [
	{ name: 'Alice', age: 25, passed: true },
	{ name: 'Bob', age: 22, passed: false },
	{ name: 'Charlie', age: 27, passed: true },
	{ name: 'David', age: 20, passed: true }
];

//     *   Use the `some` method to check if there are
//  any students in `students` who have `passed` set to `false`.
console.log(
	'any student failed:',
	students.some((student) => !student.passed)
);

//     *   Print the result to the console (should be `true`).
// 6.  **Use the `every` Method to Check if All Students are Older Than 18:**

//     *   Use the `every` method to check if all students in
// `students` are older than `18`.
//     *   Print the result to the console (should be `true`).
const allOver18 = students.every((student) => student.age > 18);
console.log('all students older than 18:', allOver18);
