/*
💥 A sparse array is an array in which not all elements have been assigned a value. This means that there are "holes" or undefined slots in the array where no value is explicitly set.
*/

let arr = [2, 4, , 6, , , "Harsh"];

console.log(arr); // [ 2, 4, <1 empty item>, 6, <2 empty items>, 'Harsh' ]
