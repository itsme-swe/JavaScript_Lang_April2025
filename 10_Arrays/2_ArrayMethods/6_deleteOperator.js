/*
🔸 The delete operator is used to delete the given value which can be an object, array, or anything. The operator does not change the length of an array after deleting the element. Instead, it leaves an empty slot.
*/

let arr = ["BMW", "Audi", "Mercedes", "Mahindra", "Tata"];

console.log("Before deleting:", arr);
console.log(arr.length);

console.log(delete arr[2]); // true
console.log("After deleting:", arr); // After deleting: [ 'BMW', 'Audi', <1 empty item>, 'Mahindra', 'Tata' ]

console.log(arr.length); // 5
