const GITHUB_API = "https://api.github.com/users/harshmehra";

async function handlePromise() {
  try {
    const data = await fetch(GITHUB_API);

    const jsonValue = await data.json();

    console.log(jsonValue);
  } catch (error) {
    console.error(error);
  }
}

handlePromise();
