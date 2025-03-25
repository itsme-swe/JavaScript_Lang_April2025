/*
💥 Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.

It is also known as a self-executing anonymous function.
*/

(function dbConnection() {
  console.log(`DB connected`);
})();

// DB Connected

console.log();

const result = (() => {
  let a = 10;
  let b = 20;
  return a + b;
})();

console.log(result); // 30

console.log();

/*
💥 IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.
*/
const counter = (() => {
  var count = 0;

  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count,
  };
})();

counter.increment();
counter.increment();

console.log(counter.getCount()); // 2

console.log(counter.count); // Output: undefined (cannot access private variable)
