function greet(name, callBack) {
  console.log(`Hello, ${name}`);
  callBack();
}

function sayGoodBye() {
  console.log("Goodbye!!");
}

greet("Harsh", sayGoodBye);

/*
Hello, Harsh
Goodbye!!
*/
