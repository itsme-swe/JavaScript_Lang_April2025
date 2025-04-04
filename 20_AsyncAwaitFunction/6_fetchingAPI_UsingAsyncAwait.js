const GITHUB_API = "https://api.github.com/users/harshmehra";

async function handlePromise() {
  const data = await fetch(GITHUB_API);

  const jsonValue = await data.json();

  console.log(jsonValue);
}

handlePromise();
