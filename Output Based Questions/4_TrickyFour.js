setTimeout(() => {
  console.log("1"); // MacroTask 1
}, 0);

Promise.resolve().then(() => {
  console.log("2"); // MicroTasked 1
});

(async function () {
  console.log("3");
  await null; // suspended as add to MicroTasked 2
  console.log("4");
})();

console.log("5"); // Sync

// 3 5 2 4 1
