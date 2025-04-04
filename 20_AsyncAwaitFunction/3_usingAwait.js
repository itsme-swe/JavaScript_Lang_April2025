/*
💥 Now await keyword is used with async function to handle the promise. Instead of '.then()' we'll be using 'await' keyword. 
*/

//1️⃣ Creating Promise
const p = new Promise((res, rej) => {
  res("Promise resolved");
});

//2️⃣ Now handling promise using async await function
async function handlePromise() {
  const val = await p;
  console.log(val);
}

handlePromise(); // ◽ output: Promise resolved
