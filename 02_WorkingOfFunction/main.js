var x = 100;

a();
b();

function a() {
  var x = 50;
  console.log(x);
}

function b() {
  var x = 150;
  console.log(x);
}

console.log(x);

/*
50 
150
100
*/ 