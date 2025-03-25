let arr = ["Java", "Python", "Swift", "Go", "Rust"];

arr.forEach(function (val) {
  console.log(val);
});

console.log();

// 2️⃣ Arrow Function

arr.forEach((ele) => {
  console.log(ele);
});

console.log();

// 3️⃣ Passing another function as parameter in forEach Loop

function printElements(items) {
  console.log(items);
}

arr.forEach(printElements); // Here we are just passing reference of the function
