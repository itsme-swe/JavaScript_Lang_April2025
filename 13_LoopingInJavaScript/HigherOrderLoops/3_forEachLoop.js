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

console.log();

// 4️⃣ forEach Loop takes total 3 parameters not just element
arr.forEach((ele, indexVal, arr) => {
  console.log(ele, indexVal, arr);
});

/*
Java 0 [ 'Java', 'Python', 'Swift', 'Go', 'Rust' ]
Python 1 [ 'Java', 'Python', 'Swift', 'Go', 'Rust' ]
Swift 2 [ 'Java', 'Python', 'Swift', 'Go', 'Rust' ]
Go 3 [ 'Java', 'Python', 'Swift', 'Go', 'Rust' ]
Rust 4 [ 'Java', 'Python', 'Swift', 'Go', 'Rust' ]
*/
