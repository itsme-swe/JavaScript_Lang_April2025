getName(); // Throws an error " Uncaught ReferenceError: getName is not defined ", bcoz its an function expression

getName2(); // Hello World

let god = function getName() {
  console.log("Om Namah Shivaye");
};

function getName2() {
  console.log("Hello World");
}
