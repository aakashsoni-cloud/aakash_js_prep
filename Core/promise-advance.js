const promise1 = new Promise((resolve, reject) => {
  resolve("Promise is resolved");
});

promise1.then((res) => console.log(res));
