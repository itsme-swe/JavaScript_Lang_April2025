const obj = {
  name: "Harsh",
  age: 32,
  color: "fair",

  x: function () {
    console.log(this);
  },
};

obj.x(); // ◽ output: { name: 'Harsh', age: 32, color: 'fair', x: [Function: x] }
