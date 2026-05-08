// 1.  **Initialize an Array:**

//     *   Create an array called `myArray` containing the following values in order: `1`, `2`, `3`, `4`, `5`.
const myArray = [1, 2, 3, 4, 5];
// 2.  **Add Elements to the End of the Array:**

//     *   Use the `.push` method to add the values `6` and `7` to the end of the array.
const returnedFromPush = myArray.push(6, 8);

//     *   Print the array to the console.
console.log(myArray);
console.log(returnedFromPush);
// 3.  **Remove the Last Element from the Array:**

//     *   Use the `.pop` method to remove the last element of the array.
const returnedFromPop = myArray.pop();
//     *   Print the array to the console.
console.log(myArray);
console.log(returnedFromPop);

// 4.  **Remove the First Element from the Array:**

//     *   Use the `.shift` method to remove the first element of the array.
const returnedFromShift = myArray.shift();
//     *   Print the array to the console.
console.log(myArray);
console.log(returnedFromShift);
// 5.  **Add Elements to the Beginning of the Array:**

//     *   Use the `.unshift` method to add the values `0` and `-1` to the beginning of the array.
myArray.unshift(-1, 0);
//     *   Print the array to the console.
console.log(myArray);
