const cart = ["Shoes", "Jeans", "Undergarments", "Shorts", "Water bottle"];

const promise = createOrder(cart);

console.log(promise);

//◽ Consuming Promise
promise
  .then((orderId) => {
    console.log(orderId);
  })
  .catch((err) => {
    console.log(err.message);
  });

//◽ Creating Promise
function createOrder(cart) {
  const pr = new Promise((res, rej) => {
    if (!validateCart(cart)) {
      const error = new Error("Cart is not valid");
      rej(error);
    }

    const orderID = "12345";
    if (orderID) {
      setTimeout(function () {
        res(orderID);
      }, 1000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false;
}
