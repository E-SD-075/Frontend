if (true) {
	console.log('Print me');
}
if (false) {
	console.log("I won't print");
}

if (0) {
	console.log('Will I print?');
}

const myObj = {
	firstKey: 'first value'
};
if (!myObj.secondKey) {
	console.log('secondKey is missing');
}

if ([]) {
	console.log('I am truthy');
}
if ([].length /*array.length === 0*/) {
	console.log('I am falsy');
}
