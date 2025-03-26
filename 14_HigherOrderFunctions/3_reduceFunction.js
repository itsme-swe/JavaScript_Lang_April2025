/*
💥 The JavaScript Array.reduce() method iterates over an array, applying a reducer function to each element, accumulating a single output value. It takes an initial value and processes elements from left to right, reducing the array to a single result. It is useful for doing operations like max in an array, min in an array and sum of array.

The JavaScript array reduce method returns a single value/element after traversing the complete array.

*/

// 1️⃣ Sum of array using reduce method
let arr = [2, 4, 6, 8, 10];

let sum = arr.reduce((acc, currVal) => acc + currVal, 0);

console.log(sum); // 30

console.log();

// 2️⃣ Sum of lengths of all Strings using reduce()

let str = ["Java", "Python", "Go", "Rust"];

let sumLength = str.reduce((acc, str) => acc + str.length, 0);

console.log(sumLength); // 16
