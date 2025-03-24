/*
💥 The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
*/

const person = {
  id: "101",
  namer: "Harsh",
  title: "SWE",
  jobCode: 2025,
  isActive: true,
};

const person1 = Object.create(person);

person1.id = "1-2";
person1.name = "Mukul";
person1.title = "SWE";
person1.jobCode = 2025;
person1.isActive = false;
console.log(person1);
