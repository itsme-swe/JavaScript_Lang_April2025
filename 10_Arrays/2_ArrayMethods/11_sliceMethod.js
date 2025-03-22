/*
💥 The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments. And slice does not change the original array.

*/

const a = [1, 2, 3, 4, 5];

const res = a.slice(1, 4);

console.log("Original Array:", a); // [ 1, 2, 3, 4, 5 ]

console.log(res); // [ 2, 3, 4 ]

console.log("Original Array:", a);
