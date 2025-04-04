const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise 1 resolved !! ");
  }, 4000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise 2 resolved !! ");
  }, 10000);
});

async function handlePromise() {
  const val1 = await p1;
  console.log("Handling Promise 1");
  console.log(val1);

  const val2 = await p2;
  console.log("Handling promise 2");
  console.log(val2);
}

handlePromise();

/*

◽ output ⇨ 
₁ Handling Promise 1
₂ Promise 1 resolved !!
₃ Handling promise 2
₄ Promise 2 resolved !!

*/
