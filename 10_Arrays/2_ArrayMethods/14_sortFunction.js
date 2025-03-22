/*
💥 The sorting with JavaScript’s sort() is different from languages like C++ , Java and Python. It compares array elements alphabetically as strings rather than numbers. This causes elements to be sorted based on character Unicode values instead of numerical order.

🔸 To sort the numeric array propery we have to pass a comparator function.
*/

const arr = [10, 20, 25, 100, 40];

console.log(
  "Ascending Order:",
  arr.sort((a, b) => a - b)
);
// Ascending Order: [ 10, 20, 25, 40, 100 ]

console.log();

console.log(
  "Descending Order:",
  arr.sort((a, b) => b - a)
);

// Descending Order: [ 100, 40, 25, 20, 10 ]
