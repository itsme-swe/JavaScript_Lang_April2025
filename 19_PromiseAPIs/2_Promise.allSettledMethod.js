/*
💥 It waits for all promises to be settled (either resolved or rejected). It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.
*/

const p1 = new Promise(function (res, rej) {
  setTimeout(function () {
    res("P1 Success");
  }, 3000);
});

const p2 = new Promise(function (res, rej) {
  setTimeout(function () {
    rej("P2 Fail");
  }, 1000);
});
const p3 = new Promise(function (res, rej) {
  setTimeout(function () {
    res("P3 Success");
  }, 2000);
});

const promises = [p1, p2, p3];

Promise.allSettled(promises)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.error(err);
  });

/*
◽output ⇨ 
[
  { status: 'fulfilled', value: 'P1 Success' },
  { status: 'rejected', reason: 'P2 Fail' },
  { status: 'fulfilled', value: 'P3 Success' }
]
*/
