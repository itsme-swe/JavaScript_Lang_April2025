/*
💥 The for...of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, maps, sets, and more. It provides a concise and readable way to loop through values without dealing with index management.

*/

// 1️⃣ Iterating over an array
const numbers = [10, 20, 30, 40];

for (const ele of numbers) {
  process.stdout.write(ele + " ");
}

// 10 20 30 40

console.log();

// 2️⃣ Iterating Over a String

let carName = "Toyota Fortuner";

for (const char of carName) {
  process.stdout.write(char);
}

// Toyota Fortuner

console.log();

// 3️⃣ If you we want both index and value in an array, use entries():
for (let [index, val] of numbers.entries()) {
  process.stdout.write(index + ":" + val + " ");
}

// 0:10 1:20 2:30 3:40
