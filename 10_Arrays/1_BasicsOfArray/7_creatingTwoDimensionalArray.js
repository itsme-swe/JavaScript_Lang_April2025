let arr = [
  [2, 4, 6],
  [1, 3, 5],
  [7, 8, 9],
];

let m = arr.length;
let n = arr[0].length;

//🔸 Here we are using tempelate literal because template literal automatically converts to string
for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write(`${arr[i][j]}` + " ");
  }
  console.log();
}

/*

2 4 6
1 3 5
7 8 9

*/

console.log();

//🔸 using forEach loop to iterate 2D Array
arr.forEach((row) => {
  row.forEach((ele) => {
    process.stdout.write(ele + " ");
  });
  console.log();
});
