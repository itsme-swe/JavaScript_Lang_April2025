/*
💥 Freezes an object. Other code cannot delete or change its properties.
*/

const person = {
  id: "101",
  name: "Harsh",
  title: "SWE",
  jobCode: 2025,
  isActive: true,
};

console.log(Object.freeze(person));

person.name = "Mukul";

console.log(person); // The name will be 'Harsh'; it will not change because we used Object.freeze().
