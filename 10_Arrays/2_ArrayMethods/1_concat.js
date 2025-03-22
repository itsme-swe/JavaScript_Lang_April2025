let a = [2, 6, 8];

let b = [1, 3, 7];

let c = a.concat(b);

console.log(c); // [ 2, 6, 8, 1, 3, 7 ]

/*
💥 The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 
💥 And, even we can use spread operator to merge the arrays.
*/

console.log();

let arr = [2, 4, 6, 8];

let str = ["Harsh", "Juhu", "Vandana", "Gaurav"];

let cars = ["Roxx", "i20", "Nexon"];

let newArr = [...arr, ...str, ...cars];

console.log(newArr);
