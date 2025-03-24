/*
💥 Object.entries() is a JavaScript method that converts an object into an array of its key-value pairs.

    🔸 It takes an object as input.

    🔸 It returns an array where each item is a small array containing a key and its value.

    🔸 It only includes properties that are enumerable (i.e., ones that can be seen in a for...in loop).
*/

const person = {
  id: "101",
  namer: "Harsh",
  title: "SWE",
  jobCode: 2025,
  isActive: true,
};

console.log(Object.entries(person));

/*

[
  [ 'id', '101' ],
  [ 'namer', 'Harsh' ],
  [ 'title', 'SWE' ],
  [ 'jobCode', 2025 ],
  [ 'isActive', true ]
]

*/
