//1️⃣ Finding all odd elements in array

const arr = [5, 1, 3, 2, 6];

const output = arr.filter((x) => x % 2);

console.log("Odd Numbers:", output); // output ⇨ Odd Numbers: [ 5, 1, 3 ]

console.log();

// 2️⃣ Finding all the even numbers

let op = arr.filter(function (x) {
  return x % 2 === 0;
});

console.log("Even numbers:", op); // output ⇨ Even numbers: [ 2, 6 ]
