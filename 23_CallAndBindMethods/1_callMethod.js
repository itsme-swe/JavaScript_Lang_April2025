function setUserName(username) {
  this.username = username;
}

//💥 Here we are using call() method to call the another function inside the cureent function
function createUser(username, email, password) {
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const user1 = new createUser("Harsh", "harsh@googl", "123@123");

console.log(user1);

/*
createUser {
  username: 'Harsh',
  email: 'harsh@googl',
  password: '123@123'
}
*/
