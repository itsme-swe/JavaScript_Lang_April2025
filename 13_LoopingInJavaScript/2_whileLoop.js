let idx = 0;

while (idx <= 10) {
  console.log(`Value of index is ${idx}`);
  idx += 2;
}

/*

Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10

*/

console.log();

//🔸 Iterating array using while loop
let arr = [10, 15, 20, 5, 10];

let i = 0;

while (i < arr.length) {
  process.stdout.write(arr[i] + " ");
  i++;
}

// 10 15 20 5 10
