/*
💥 The JavaScript for…in loop iterates over the properties of an object. It allows you to access each key or property name of an object.
*/

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

for (const key in car) {
  console.log(key + ":" + car[key] + " ");
}

/*
make:Toyota
model:Corolla
year:2020
*/
