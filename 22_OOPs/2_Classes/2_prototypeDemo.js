function createUser(username, price) {
  this.username = username;
  this.price = price;
}

createUser.prototype.increment = function () {
  this.price++;
};

createUser.prototype.printMe = function () {
  console.log(`Price is ${this.price}`);
};

const user1 = new createUser("Honda", 13);

const user2 = new createUser("Venue", 18);

user1.printMe();  // Price is 13
user1.increment();
user1.printMe();  // Price is 14

user2.printMe();  // Price is 18
