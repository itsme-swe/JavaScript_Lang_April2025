/*
🔸 This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.
*/

let cars = new Array("BMW", "Audi", "Mercedes", "Mahindra", "Tata");

console.log(cars); // [ 'BMW', 'Audi', 'Mercedes', 'Mahindra', 'Tata' ]
console.log(typeof cars); // object

let newArr = cars.join("-");

console.log(newArr); // BMW-Audi-Mercedes-Mahindra-Tata

console.log(typeof newArr); // string
