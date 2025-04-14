
setTimeout(() => {
  console.log("Y");
  Promise.resolve().then(() => console.log("Z"));
}, 0);

Promise.resolve().then(() => {
  console.log("W");
});

console.log("V");