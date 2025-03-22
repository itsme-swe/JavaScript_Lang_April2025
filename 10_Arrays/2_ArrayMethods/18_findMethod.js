/*
💥 The find() method finds out the first value which passes the user-specified conditions.
*/

let arr = [20, 5, 10, 40];

let ele = arr.find((x) => x > 10);

console.log(ele); // 20

let idx = arr.findIndex((x) => x > 20); // it return the index value  of first value

console.log(idx); // 3
