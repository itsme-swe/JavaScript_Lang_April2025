function showName(username = "Adam") {
  return `Good Morning ! ${username}`;
}

let person1 = showName(); // Here we are not passing any argument, so the default value will be printed

console.log(person1);

let person2 = showName("Harsh");

console.log(person2); // Good Morning ! Harsh
