function x() {
  var a = 10;

  function y() {
    let b = 20;
    console.log(a);
    console.log(b);
  }
  return y;
}

let z = x(); // Here variable z is holding whole function y() inside it.
/*
ƒ y() {
    let b = 20;
    console.log(a);
    console.log(b);
  }
*/

console.log(z);

z(); // 10 20 
