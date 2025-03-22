let a = [10, 20, { a: 20, b: 30 }, 50];

let b = JSON.parse(JSON.stringify(a));

b[2].b = 40;

b[3] = "Harsh";

console.log("Deep Copy", b); // Deep Copy [ 10, 20, { a: 20, b: 40 }, 'Harsh' ]

console.log("Original Copy", a); // Original Copy [ 10, 20, { a: 20, b: 30 }, 50 ]

/*
🔸 By using deep copy we can create a complete new copy of the original object and now if made changes inside clone object the original object will not be changed.
*/
