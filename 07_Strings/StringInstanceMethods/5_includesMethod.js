let str1 = "Hello World";

let check = str1.includes("W");

console.log(check); // true

let check1 = str1.includes("o", 4);

console.log(check1); // true

let check2 = str1.includes("or", 9);

console.log(check2); // false

/*
🔸 The includes() method returns true if a string contains a specified string. Otherwise, it returns false.
*/
