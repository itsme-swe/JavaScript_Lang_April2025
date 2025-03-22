/*
🔸 The flat() method in JavaScript creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. If no depth is provided, it defaults to 1.
*/

let arr = [2, 4, [10, 12, 14, [20, 25], "Harsh", "Roxx"]];

let newArr = arr.flat(Infinity);

console.log(newArr); // [ 2, 4, 10, 12, 14, 20, 25, 'Harsh', 'Roxx' ]
