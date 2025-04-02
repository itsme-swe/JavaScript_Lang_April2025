//💥 Now we are handling promise with the help of 'async await' instead of then & catch

//1️⃣ Creating Promise

const promiseFive = new Promise(function (res, rej) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      res({
        username: "Harsh",
        email: "harsh@gmail.com",
        number: "+9190023456",
      });
    } else {
      rej("Something went wrong");
    }
  }, 1000);
});

//2️⃣ Here we are consuming promise using 'async await'
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
