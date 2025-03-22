/*
💥 JavaScript array.values() is an inbuilt method in JavaScript that is used to return a new array Iterator object that contains the values for each index in the array i.e., it prints all the elements of the array. 
*/

let fruits = ["apple", "banana", "orange", "melon", "watermelon"];

let iterator = fruits.values();

for (let i of iterator) {
  console.log(i);
}

console.log();

let cars = ["Audi", "BMW", "Tata", "Mahindra"];

let it = cars.values();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
