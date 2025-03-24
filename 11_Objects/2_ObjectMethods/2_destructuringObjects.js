const person = {
  name: "Harsh",
  city: "Jaiput",
  age: 32,
};

const { name, city, age } = person;

console.log(name); // Harsh
console.log(city); // Jaipur
console.log(age); // 32

console.log();

// 🔸 Even we can rename the properties of objects using destructuring

const { name: fullName, age: years } = person;

console.log(fullName); // Harsh
console.log(years); // 32

console.log();

// 🔸 Nested Object Destructuring

let carDetails = {
  carName: "Virtus",
  compName: "Volkswagen",
  engine: { spec: "1.5 ltr", color: "grey", price: 2000000 },
};

const {
  carName,
  compName,
  engine: { spec, color, price },
} = carDetails;

console.log(spec);
console.log(color);
console.log(price);
