/*
💥The push() method is used to add an element at the end of an Array. As arrays in JavaScript are mutable objects, we can easily add or remove elements from the Array.

💥 The unshift() method is used to add elements to the front of an Array.

*/

let arr = [2, 4, 6, 8];

console.log(arr); // [ 2, 4, 6, 8 ]

arr.push("Mahindra Roxx");

console.log(arr); // [ 2, 4, 6, 8, 'Mahindra Roxx' ]

arr.unshift("Harsh");

console.log(arr); // [ 'Harsh', 2, 4, 6, 8, 'Mahindra Roxx' ]
