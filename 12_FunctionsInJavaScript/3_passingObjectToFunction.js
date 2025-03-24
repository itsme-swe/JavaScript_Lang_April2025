function handleObject(anyObj) {
  return `The username of user is ${anyObj.name}, age is ${anyObj.age} and user is from ${anyObj.city} city.`;
}

let obj = {
  name: "Harsh",
  age: 32,
  city: "Jaipur",
};

let obj1 = {
  name: "Mukul",
  age: 31,
  city: "Delhi",
};

let user1 = handleObject(obj); // Passing object as argument to the function

let user2 = handleObject(obj1);

console.log(user1); // The username of user is Harsh, age is 32 and user is from Jaipur city.

console.log(user2); // The username of user is Mukul, age is 31 and user is from Delhi city.
