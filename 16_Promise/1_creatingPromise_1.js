//1️⃣ Creation Phase
const promiseOne = new Promise(function (res, rej) {
  setTimeout(function () {
    console.log("Async task is completed");
    res();
  }, 2000);
});

//2️⃣ Consumping Phase
promiseOne.then(function () {
  console.log("Promise resolved.");
});

/*

output ⇨
Async task is completed
Promise resolved.

 */
