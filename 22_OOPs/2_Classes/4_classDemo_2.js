//1️⃣ Here we are creating class and declaring properties and methods inside it.

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
}

const user1 = new User("Harsh", "harsh@gmail.com", "zogoh");

console.log(user1);

console.log();

// 2️⃣ Now we using functional programning before ES6, the way we create user

function createUser(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

createUser.prototype.changeUserName = function () {
  return `${this.userName.toUpperCase()}`;
};

const user2 = new createUser("juhi", "juhu@gmail", "jjp123");

console.log(user2.changeUserName()); // JUHI
