/*
💥 The map() method is an ES5 feature that creates a new array by applying a function to each element of the original array. It skips empty elements and does not modify the original array.

*/

// 1️⃣ Double each element of an array
const arr = [2, 4, 6, 8];

const newArr = arr.map((ele) => ele * 2);

console.log("Modified Array:", newArr); // [ 4, 8, 12, 16 ]

console.log("Original Array:", arr); //  [ 2, 4, 6, 8 ]

console.log();

// 2️⃣ Given an array of singular nouns, create a new array that stores the plural noun of each of the words in the first array, and log it to the console (assume that the singular nouns can be made plural by adding a 's').

let givenArr = ["car", "book", "pen"];

let pluralArr = givenArr.map((x) => x + "s");

console.log(pluralArr); // [ 'cars', 'books', 'pens' ]
