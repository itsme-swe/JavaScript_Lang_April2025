//1️⃣ Creation Phase and consumping together

new Promise((res, rej) => {
  setTimeout(function () {
    console.log("Async Task Resolved");
    res();
  }, 1000);
}).then(function () {
  console.log("Promise 2 resolved");
});
