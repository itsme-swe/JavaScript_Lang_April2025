/*
💥 The JavaScript Rest parameter allows a function to accept an indefinite number of arguments as an array. It is represented by three dots (…) followed by the parameter name and must be the last parameter in the function, enabling flexible and dynamic argument handling.
*/

//🔸 Here we are using "rest operator" to find the sum of array elements

function sum(...ele) {
  let sum = 0;
  for (let i = 0; i < ele.length; i++) {
    sum += ele[i];
  }
  return sum;
}

let arr = sum(20, 40);

let arr1 = sum(10, 20, 30, 40);

console.log(arr); // 60

console.log(arr1); // 100

console.log(total);
