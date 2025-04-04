const p1 = new Promise(function (res, rej) {
  setTimeout(function () {
    rej("P1 Fail");
  }, 3000);
});

const p2 = new Promise(function (res, rej) {
  setTimeout(function () {
    rej("P2 Fail");
  }, 1000);
});
const p3 = new Promise(function (res, rej) {
  setTimeout(function () {
    rej("P3 Fail");
  }, 2000);
});

const promises = [p1, p2, p3];

Promise.any(promises)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.error(err);
  });

/*
  1️⃣ Returniong the fastest resolved promise.

  2️⃣ Returns if all promises fail ⇨

  [AggregateError: All promises were rejected] {
  [errors]: [ 'P1 Fail', 'P2 Fail', 'P3 Fail' ]
}
  */
