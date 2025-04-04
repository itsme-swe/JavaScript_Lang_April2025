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

handlePromise();

/*
◽ output ⇨
₁ I am async await
₂ Promise resolved
*/

console.log();

//2️⃣ Using .then()
function getData() {
  p.then((res) => console.log(res)).catch((err) => console.error(err));
  console.log("Promise resolved using .then()");
}

getData();

/*
◽ output ⇨
₁ Promise resolved using .then()
₂ Promise resolved
*/
