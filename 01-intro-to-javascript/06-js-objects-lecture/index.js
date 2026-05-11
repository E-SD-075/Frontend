//  object literals
const dndChar = {
	name: 'Kaladan',
	dndClass: 'paladin',
	level: 12,
	// 'spells-list': ['divine smite', 'bless', "crusader's mantle"]
	spellsList: ['divine smite', 'bless', "crusader's mantle"],
	yellCatchPhrase() {
		return 'To smite is right!';
	},
	introduce() {
		return `My name is ${this.name} the ${this.dndClass}!`;
	}
};
// console.log(dndChar);

// console.log(dndChar.name);
const propIWant = 'dndClass';
// console.log(dndChar[propIWant]);
// console.log(dndChar['spells-list']);

dndChar.notReal = "I'm a real boy!";
dndChar.level = 13;
// console.log(dndChar);
// console.log(dndChar.notReal);
// console.log(dndChar.yellCatchPhrase());
// console.log(dndChar.introduce());

// destructuring
const myName = dndChar.name;
console.log(myName);

const { name, dndClass: myDndClass } = dndChar;
console.log(name, /*dndClass,*/ myDndClass);

const [x = 10, y = 20, z = 30] = [1, 2];
console.log(x); // Output: 1
console.log(y); // Output: 20
console.log(z); // Output: 30

console.log(console);
