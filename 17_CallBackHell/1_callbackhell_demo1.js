/*
Here we are writing steps how we placed the order on ecom website.
1️⃣ We add items in cart.
2️⃣ Then we create order.
3️⃣ And, then we proceed to payment

So to achieve these steps callback hell comes in picture.

💥 Callback hell -- "Callback hell," also known as the "pyramid of doom," refers to a situation in programming where multiple nested callbacks are used to handle asynchronous operations, making the code difficult to read, understand, and maintain. 
*/

const cart = ["shoes", "t-shirt", "watch", "laptop bag"]; // ⇨ items added to the cart

// Here 'makePayment' is the callback function
api.createOrder(cart, function () {
  api.makePayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
