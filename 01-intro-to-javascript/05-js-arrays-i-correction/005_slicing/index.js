// 1.  You will be given an array.
// 2.  Use the `slice` method to extract different portions of the array.
// 3.  Print the original array and the sliced portions to the console.

// Is the original array affected?
const array = [2, 4, 6, 8, 10, 12, 14, 16];
// Extract different portions of the array and print the results
const firstSlice = array.slice(3, 5);
console.log(array);
console.log(firstSlice);

const secondSlice = array.slice(5);
console.log(secondSlice);
console.log(array.slice(-3));
