/*
💥 The object literal syntax allows you to define and initialize an object with curly braces {}, setting properties as key-value pairs.
*/

let jsUser = {
  name: "Harsh",
  age: 32,
  location: "Jaipur",
  email: "harshm@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Friday"],

  greetings: function () {
    console.log(`Hello JS User, ${this.name}`);
  },
};

//🔸 Accessing Objects

console.log(jsUser.age); // 32

console.log(jsUser["lastLoginDays"]); // [ 'Monday', 'Friday' ]

jsUser.greetings(); // Hello JS User, Harsh
