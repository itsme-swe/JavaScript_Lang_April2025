const cart = ["shoes", "t-shirt", "watch", "laptop bag"];

//1️⃣ Here, 'makePayment' is a callback function used within 'createOrder' -- It is a traditional way to handle callbacks
api.createOrder(cart, function () {
  api.makePayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

console.log();

// 2️⃣ Now we'll be using Promise Chaining to come out of callback hell

api
  .createOrder(cart)
  .then(function (orderId) {
    return api.makePayment(orderId);
  })
  .then(function (paymentInfo) {
    return api.showOrderSummary(paymentInfo);
  })
  .then(function (orderSummary) {
    return api.updateWallet(orderSummary);
  });
