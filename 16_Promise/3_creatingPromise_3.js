const urlData = "https://api.github.com/users/harshmehra";

const promiseThree = new Promise(function (res, rej) {
  setTimeout(function () {
    res({ userNmae: "Harsh", mail: "xyz@abc.com", car: "Virtus" });
  }, 1000);
});

promiseThree.then(function (userData) {
  console.log(userData);
});
