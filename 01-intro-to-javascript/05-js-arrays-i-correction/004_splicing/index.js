// 3.  **Print the Results:**

//     *   Use `console.log` to print both the original and modified arrays to verify the results.
// Array 1: Use splice() method
const array1 = [10, 20, 30, 40, 50];
// Modify array1 in place by removing and adding elements, then print the result
// 1.  **Remove the element at index 2 and add 35 and 36:**
array1.splice(2, 1, 35, 36);
console.log(array1);

// Array 2: Use toSpliced() method
const array2 = ['x', 'y', 'z'];
// Create a modified copy of array2 and print both arrays
// 2.  **Remove the element at index 1 and add b and c with toSpliced**

console.log(array2);
console.log(array2.toSpliced(1, 1, 'b', 'c'));
