/*

💥 Object.fromEntries() is a JavaScript method that converts an array of key-value pairs into an object.

 */

const person = {
  id: "101",
  name: "Harsh",
  title: "SWE",
  jobCode: 2025,
  isActive: true,
};

let listOfArr = Object.entries(person);

console.log(listOfArr);

console.log(Object.fromEntries(listOfArr));

/*
{
  id: '101',
  name: 'Harsh',
  title: 'SWE',
  jobCode: 2025,
  isActive: true
}
*/
