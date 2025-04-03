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

// 2️⃣ Now we'll be using Promise Chaining to handle callback hell

api
  .createOrder(cart)
  .then(function (orderId) {
    api.makePayment(orderId);
  })
  .then(function (paymentInfo) {
    api.showOrderSummary(paymentInfo);
  })
  .then(function (orderSummary) {
    api.updateWallet(orderSummary);
  });
