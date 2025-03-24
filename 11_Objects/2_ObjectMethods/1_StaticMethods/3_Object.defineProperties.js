/*
💥 Object.defineProperties() is a JavaScript method that lets you add or change multiple properties on an object at the same time.

 🔸 You give it an object where you want to define properties.

 🔸 You provide a list of properties with details like their values, whether they can be changed, or whether they should be hidden.

 🔸 It returns the same object, but with the new/updated properties.
*/

let person = {};

Object.defineProperties(person, {
  name: {
    value: "Harsh",
    writable: false,
  },
  age: {
    value: 32,
    writable: true,
  },
  greet: {
    value: function () {
      return `Good Morning, ${this.name}`;
    },
    enumerable: true,
  },
});

person.name = "Amit";

console.log(person.name); // Harsh

person.age = 33;

console.log(person.age); // 33

console.log(person.greet());
