let a = [10, 20, 15, 30];

let b = a;

b[1] = 50;

console.log(b); // [ 10, 50, 15, 30 ]

console.log(a); // [ 10, 50, 15, 30 ]

/*
🔸 Changes will be made in both the objects
*/

console.log();

let obj1 = {
  name: "Harsh",
  age: 32,
};

let obj2 = obj1;

obj2.age = 33;

console.log(obj1);  // { name: 'Harsh', age: 33 }

console.log(obj2);  // { name: 'Harsh', age: 33 }
