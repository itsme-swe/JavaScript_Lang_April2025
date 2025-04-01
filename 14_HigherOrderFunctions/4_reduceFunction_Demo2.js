//1️⃣ Findng max inside an array and iterating array using forEach() function.
const arr = [20, 10, 5, 40, 25];

function max(arr) {
  let max = -Infinity;

  arr.forEach((x) => {
    if (x > max) {
      max = x;
    }
  });

  return max;
}

console.log(max(arr)); // 40

console.log();

//2️⃣ Now finding max by using reduce() function

const output = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log("Max by using reduce function:", output); // output ⇨ Max by using reduce function: 40
