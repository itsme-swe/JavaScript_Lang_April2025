/*
💥 It wait for all promises to be resolved but as soon as any promise rjects, it will throw an error. The resulting retured value is in array form.
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

Promise.all(promises)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  });

/*
  1️⃣ ◽output_1 if all promises are in  resolved successfuly. ⇨ [ 'P1 Success', 'P2 Success', 'P3 Success' ]

  2️⃣ ◽output_2 if any promise failed ⇨ P2 Fail
  */
