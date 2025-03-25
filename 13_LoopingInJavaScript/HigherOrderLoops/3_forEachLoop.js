/*
💥 The Array.forEach() method takes a callback function as an argument, which is applied to each element of the array. The callback function receives three arguments:

    🔸 currentValue: The current element being processed in the array.

    🔸 index (optional): The index of the current element being processed.
    
    🔸 array (optional): The array forEach() was called upon.

💥 Limitations of forEach() Method

  🔸 No Break or Continue: Unlike for loops, you cannot break the forEach() loop or use continue to skip to the next iteration. It will always iterate over all elements.

  🔸 No Return Value: The forEach() loop does not return a new array, it returns undefined.
  
  🔸 Asynchronous Issues: The forEach() loop does not handle asynchronous operations well. If you need to perform asynchronous operations, consider using for…of with   async/await or Promise.all.
*/

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
