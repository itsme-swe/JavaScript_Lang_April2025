let char = "A";

let asciiVal = char.charCodeAt(0); // converting character to ASCII value

console.log(asciiVal); // 65

let num = 70;

let charForm = String.fromCharCode(num); // checking the mapped ascii value with the number

console.log(charForm); // 'F'

let rollNum = 101;

console.log(typeof rollNum); // number type

console.log(typeof rollNum.toString()); // string type
