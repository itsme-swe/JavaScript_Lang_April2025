/*
💥 Returns an array containing the names of all of the given object's own enumerable string properties.
*/
const person = {
  id: "101",
  namer: "Harsh",
  title: "SWE",
  jobCode: 2025,
  isActive: true,
};

console.log(Object.keys(person)); // [ 'id', 'namer', 'title', 'jobCode', 'isActive' ]
