/*
🔸 The Object.assign() method copies properties from one or more source objects to a target object.
Properties in the target object are overwritten by properties in the sources if they have the same key.
*/

const target = { a: 1, b: 2 };

const source = { b: 4, c: 5 };

const returnedObj = Object.assign({}, target, source);

console.log(returnedObj); // { a: 1, b: 4, c: 5 }
