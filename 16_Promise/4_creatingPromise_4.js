new Promise((res, rej) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      res({ name: "xyz", email: "abc@yzx.com", phone: "apple" });
    } else {
      rej("ERROR: Something went wrong");
    }
  }, 1000);
})
  .then((user) => {
    console.log(user);
    return user.email;
  })
  .then((userEmail) => {
    console.log(userEmail);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

/*
output ⇨ 
ERROR: Something went wrong
The promise is either resolved or rejected
*/
