//  object literal
const person1 = {
	name: 'Sally',
	age: 54,
	describe() {
		console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old`);
	}
};
const person2 = {
	name: 'Bob',
	age: 72,
	describe() {
		console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old`);
	}
};

// global this
console.log(this);

const myArray = [1, 2, 3, 4];
console.log(myArray);

class Student {
	#name;
	#bootcamp;

	constructor(name, bootcamp) {
		this.#name = name;
		this.#bootcamp = bootcamp;
	}

	intro() {
		return `Hi, my name is ${this.#name} and I study ${this.#bootcamp}`;
	}
}

const alex = new Student('Alex', 'Web Development');
console.log(alex);
console.log(alex.intro());
