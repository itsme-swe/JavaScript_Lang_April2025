new Promise((res, rej) => {
  setTimeout(() => {
    let error = false;
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
  });
