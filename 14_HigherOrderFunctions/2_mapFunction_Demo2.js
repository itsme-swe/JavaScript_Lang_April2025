//1️⃣ Doubling elements of an array

let arr = [2, 4, 6, 8];

let newArray = arr.map((ele) => ele * 2);

console.log("Returned array by map function: ", newArray); // output ⇨ Returned array by map function:  [ 4, 8, 12, 16 ]

console.log("Original Array:", arr); // output ⇨ Original Array: [ 2, 4, 6, 8 ]

console.log();

// 2️⃣ Converting element into binary

let arr1 = [5, 1, 3, 2, 6];

let output = arr1.map(function toBinary(x) {
  return x.toString(2);
});

console.log(output); // output ⇨ [ '101', '1', '11', '10', '110' ]
