let greet = () => {
  let userName = "Harsh";
  console.log(this.userName);
};

greet(); // undefined

console.log();

const add = (a, b) => a + b;

console.log(add(5, 5)); // 10

console.log();

const pow = (a) => {
  return Math.pow(a, 5);
};

console.log(pow(2)); // 32

/*

1️⃣ Whenever we use curly brackets we need to mention return keyword.

2️⃣ If we don't want to use curly braces we wrap it inside parenthesis.

*/
