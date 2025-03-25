/*
1️⃣ Using 'this' in a method

In the context of an object method in JavaScript, the this keyword refers to the object itself, allowing access to its properties and methods within the method’s scope. It allows you to interact with an object's data and behavior, making it easy to access and modify its state.
*/

const person = {
  name: "Amit",
  age: 32,
  greet() {
    console.log(
      `Hello my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

person.greet(); // Hello my name is Amit and I am 32 years old.

// 🔸 Here we are modifying the state of object person
person.name = "John";
person.age = 30;

person.greet(); // Hello my name is John and I am 30 years old.

console.log();

/*
2️⃣ Using 'this' in a Function

In a JavaScript function, the behavior of the this keyword varies depending on how the function is invoked.
*/

function greet() {
  console.log(`Hello my name is, ${this.name}`);
}

const person1 = {
  name: "Alex",
  age: 26,
  sayHello: greet,
};

greet(); // Hello my name is, undefined

person1.sayHello(); // Hello my name is, Alex

/*
💥 Returns after using this keyword

🔸 When used within a method of an object, this points to that object.

🔸 When used by itself, this points to the global object.

🔸 Within a function, this typically points to the global object.

🔸 In a function under strict mode, this becomes undefined.

🔸 During an event, this points to the element that triggered the event.

🔸 Methods such as call(), apply(), and bind() can reassign this to any desired object.
*/
