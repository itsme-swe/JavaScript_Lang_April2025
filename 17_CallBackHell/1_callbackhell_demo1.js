/*
 Order Placement Steps on an E-commerce Website:
1️⃣ Add items to the cart.
2️⃣ Create an order.
3️⃣ And, then Proceed to payment.

To implement these steps, we use callbacks, which can lead to:

💥 Callback hell -- "Callback hell," also known as the "pyramid of doom," refers to a situation in programming where multiple nested callbacks are used to handle asynchronous operations, making the code difficult to read, understand, and maintain. 
*/

const cart = ["shoes", "t-shirt", "watch", "laptop bag"]; // ⇨ items added to the cart

// Here, 'makePayment' is a callback function used within 'createOrder'
api.createOrder(cart, function () {
  api.makePayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
