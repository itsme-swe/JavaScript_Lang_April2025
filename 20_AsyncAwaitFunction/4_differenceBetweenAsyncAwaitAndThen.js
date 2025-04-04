/*
In this example we'll be seeing the difference between .then() and async await when we handle the promise
*/

const p = new Promise(function (res, rej) {
  setTimeout(function () {
    res("Promise resolved");
  }, 10000);
});

//1️⃣ Using async await
async function handlePromise() {
  const val = await p;
  console.log("I am async await");
  console.log(val);
}

console.log();
