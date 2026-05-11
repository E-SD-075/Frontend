// *   **Simple Array Destructuring**
// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];

//     Extract the first two elements from the `fruits` array and store them in
// variables `fruit1` and `fruit2`.
const [fruit1, fruit2] = fruits;
console.log('fruit1, fruit2: ', fruit1, fruit2);

// *   **Skipping Elements in Array Destructuring**

//     Extract the first and third elements from the `fruits` array, skipping the second element.
const [first, , third] = fruits;

console.log('first, third:', first, third);

// *   **Simple Object Destructuring**
// Initial object
const person = {
	name: 'John Doe',
	age: 30,
	address: {
		city: 'New York',
		zip: '10001'
	}
};

//     Extract the `name` and `age` properties from the `person` object.
const { name, age } = person;
console.log('name, age:', name, age);

// *   **Nested Object Destructuring**

//     Extract the `city` from the `address` property of the `person` object.
const {
	address: { city }
} = person;
console.log('city:', city);
// console.log(address); // uncaught reference error

// *   **Destructuring in Function Parameters**
//     `displayPerson` is function that takes a `person` object
// and logs the `name` and `age` properties using dot notation.
// Modify the function to destructure the `name` and `age` properties directly in the parameters.
// Initial function
// function displayPerson(person) {
// 	console.log(`Name: ${person.name}, Age: ${person.age}`);
// }
function displayPerson({ name, age }) {
	console.log(`Name: ${name}, Age: ${age}`);
}

displayPerson(person);

function exampleFunc({ param1, param2, param3 }) {
	console.log(param1, param2, param3);
}
const exampleObj = {
	param1: "I'm first!",
	param2: "I'm second",
	param3: "I'm third!"
};

// exampleFunc("I'm second", "I'm first", "I'm third");
exampleFunc(exampleObj);
