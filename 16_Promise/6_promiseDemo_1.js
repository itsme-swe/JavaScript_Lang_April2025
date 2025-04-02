const cart = ["shoes", "t-shirt", "watch", "laptop bag"]; // ⇨ items added to the cart

// 1️⃣ Handling asynchronous operations using callbacks (before Promises were introduced)
createOrder(cart, function (orderId) {
  makePayment(orderId);
});

// 2️⃣ Handling asynchronous operations using Promises (modern approach)
const promise = createOrder(cart); // ⇨ 'createOrder' now returns a Promise

// Earlier we were passing callback function to createOrder() function, but here we are attaching callback function to the promise object using .then().
promise.then(function (orderId) {
  makePayment(orderId);
});
