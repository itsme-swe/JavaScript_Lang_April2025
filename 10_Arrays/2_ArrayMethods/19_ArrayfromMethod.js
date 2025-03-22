/*
💥 The Array.from() method is used to create a new array from any iterables like array, objects, and strings.
    
    🔸 Syntax =>   Array.from(object, mapFunction, thisValue);

    PARAMETERS:
    🔸 object: This parameter holds that object that will convert into an array.

    🔸 mapFunction: This parameter is optional and used to call on each item of the array.
    
    🔸 thisValue: This parameter is optional, it holds the context to be passed as this is to be used while executing the mapFunction. If the context is passed, it     will be used like this for each invocation of the callback function, otherwise undefined is used as default.

*/

let st = new Set([10, 20, 30]);

console.log(st); // Set(3) { 10, 20, 30 }

let arr = Array.from(st);

console.log(arr); // [ 10, 20, 30 ]

console.log();

// 🔸 Converting object to array

const obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };

let ob1 = Array.from(Object.keys(obj));
let ob2 = Array.from(Object.values(obj));
let ob3 = Array.from(Object.entries(obj));

console.log("Array of keys:", ob1); // Array of keys: [ 'a', 'b', 'c', 'd', 'e' ]

console.log("Array of values:", ob2); // [ 10, 20, 30, 40, 50 ]

console.log("Array of key Value pair:", ob3); // Array of key Value pair: [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ], [ 'e', 50 ] ]
