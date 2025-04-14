async function async1() {
  console.log("A");
  await async2();
  console.log("B");
}

async function async2() {
  console.log("C");
  queueMicrotask(() => console.log("D"));
}

console.log("E");
async1();
console.log("F");
