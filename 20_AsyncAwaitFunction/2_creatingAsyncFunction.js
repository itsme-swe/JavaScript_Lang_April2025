/*
💥 Now in this example we'll be returning Promise not an value.
*/

const p = new Promise(function (res, rej) {
  res("Promise resolved successfully");
});

async function testPromise() {
  return p;
}

const dataPromise = testPromise();

dataPromise.then((res) => console.log(res)).catch((err) => console.error(err));
