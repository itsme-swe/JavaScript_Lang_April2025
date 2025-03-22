/*
💥 The JavaScript Array forEach() method is a built-in function that executes a provided function once for each array element. It does not return a new array and does not modify the original array. It’s commonly used for iteration and performing actions on each array element.

*/

let str = ["Harsh", "Mukul", "Joker", "Anurag", "Harsh"];

str.forEach((ele) => {
  process.stdout.write(ele + " ");
});

// Harsh Mukul Joker Anurag Harsh