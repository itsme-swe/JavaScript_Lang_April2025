const GITHUB_API = "https://api.github.com/users/harshmehra";

console.log(typeof GITHUB_API); // output ⇨ string

const user = fetch(GITHUB_API);

console.log(user); // ◽ output:  The fetch() returns an promise object ⇨ Promise { <pending> }

console.log(typeof user); // ◽ output: object
