const p1 = new Promise(function (res, rej) {
  setTimeout(function () {
    res("P1 Success");
  }, 3000);
});

const p2 = new Promise(function (res, rej) {
  setTimeout(function () {
    res("P2 Success");
  }, 1000);
});
const p3 = new Promise(function (res, rej) {
  setTimeout(function () {
    rej("P3 Fail");
  }, 2000);
});

const promises = [p1, p2, p3];

Promise.race(promises)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.error(err);
  });

//◽ Output ⇨ P2 Success
