const users = fetch("https://jsonplaceholder.typicode.com/users");


users.then((data) => data.json()).then((data) => console.log(data));

const cart = ["shoes", "shirt", "kurtas", "iphone"];

// Custom Promise

// This is to consume the promise
createOrder(cart)
  .then(function (orderId) {
    console.log("order id -> ", orderId);
    // orderId passed to proceedToPayment
    return orderId;
  })
  .catch(function (error) {
    handleError(error.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    // Attach to ProceedToPayment promise
    console.log(paymentInfo);
  })
  .catch(function (error) {
    handleError(error);
  })
  .then(function () {
    console.log("No matter what happens, I will definitely run this");
  });

// Producer

// This Produce the promises
// just to reject and resolve the promise
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // validateCart
    if (validateCart(cart)) {
      const error = new Error("Cart is not valid");
      reject(error);
    }

    // logic to create Order
    const orderId = "1234";

    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 2000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return false;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve(`Payment Successful with ${orderId}`);
  });
}

function handleError(error) {
  console.log(error);
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved");
  }, 1000);
});

function getData() {
  p.then((d) => console.log(d));
  console.log("Withoutn");
}
