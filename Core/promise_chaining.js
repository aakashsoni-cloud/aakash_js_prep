// 🔥 Q1. Deep Promise Nesting

Promise.resolve()
  .then(() => {
    console.log("X");
    return Promise.resolve();
  })
  .then(() => {
    console.log("Y");
    return Promise.resolve().then(() => {
      console.log("Z");
    });
  })
  .then(() => {
    console.log("W");
  });

console.log("Done");



// 🔥 Q2. await vs .then timing difference
Promise.resolve().then(() => console.log("A"));

(async () => {
  await Promise.resolve();
  console.log("B");
})();

Promise.resolve().then(() => console.log("C"));