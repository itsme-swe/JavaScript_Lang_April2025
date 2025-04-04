//💥 Async function will always return an promise, but in this example we are  returning a value directly, it gets automatically wrapped in a resolved Promise.

async function getData() {
  return { username: "Harsh", password: "ha2025", emailId: "shiv@jaiho.com" };
}

const dataPromise = getData();

// ◽ consuming promise
dataPromise.then((res) => console.log(res)).catch((err) => console.error(err));

/*
◽ output -- { username: 'Harsh', password: 'ha2025', emailId: 'shiv@jaiho.com' }
*/
