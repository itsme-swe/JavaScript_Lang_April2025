/*
💥 Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
*/

const person = {
  id: "101",
  namer: "Harsh",
  title: "SWE",
  jobCode: 2025,
  isActive: true,
};

console.log(Object.values(person)); // [ '101', 'Harsh', 'SWE', 2025, true ]
