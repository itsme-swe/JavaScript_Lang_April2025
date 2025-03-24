let arr = [20, 30, 40];

let [a, b, c] = arr;

console.log(a); // 20
console.log(b); // 30
console.log(c); // 40

// 🔸 Using rest operator

let numbers = [10, 20, 30, 40, 50, 60];

let [num1, num2, ...num3] = numbers;

console.log(num1); // 10
console.log(num2); // 20
console.log(num3); // [ 30, 40, 50, 60 ]

console.log();

// 🔸 Swapping variables without temp variable

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log("x", x); // 20
console.log("y", y); // 10

console.log();

// 🔸 Function returning an array and hoilding values into variables using array destructuring

function getCoordinates() {
  return [100, 105];
}

const [lng, lat] = getCoordinates();

console.log(lng, lat); // 100 105
