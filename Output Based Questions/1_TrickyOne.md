🧠 Code Breakdown:
```js
setTimeout(() => console.log("A"), 0); // Task 1 - macrotask

Promise.resolve()
  .then(() => {
    console.log("B"); // Microtask 1
    return new Promise(resolve => setTimeout(() => {
      console.log("C"); // Task 2 - macrotask inside promise chain
      resolve();        // resolves inner promise
    }, 0));
  })
  .then(() => {
    console.log("D"); // Microtask 2 — chained to inner promise
  });

(async () => {
  console.log("E");   // Synchronous
  await null;         // Microtask 3
  console.log("F");
})();

console.log("G");      // Synchronous
```


✅ Execution Order — Let’s simulate the event loop
1. Synchronous phase:
    Executed first, top to bottom:

    console.log("E"); → E
    console.log("G"); → G
2. Microtask queue:
    .then(() => { console.log("B"); ... }) → logs B

    Inside it, we register a new setTimeout (macrotask) for "C" and return a promise (which resolves later)

    (async () => { ... }) → after await null, logs F (microtask)

    .then(() => console.log("D")) → only executed after the promise for "C" resolves

    So microtasks right now:

        1. Log "B"
        2. Log "F"
        3. Macrotask queue (after microtasks):
    Now we have:

```js
1. setTimeout(() => console.log("A")) — scheduled early
2. setTimeout(() => { console.log("C"); resolve(); }) — scheduled during microtask execution
```

# Here’s the crucial twist 🌀:

    The setTimeout for "A" was registered during the initial synchronous phase.
    The setTimeout for "C" was registered during the execution of microtask (i.e., in .then(() => { ... })).

    However — both have a delay of 0, so technically they’re both scheduled to run ASAP in the next macrotask phase.

# BUT…

# 🛑 Here's the KEY POINT:
    Browsers preserve ordering of setTimeouts by when they're added to the queue, BUT not strictly if one was added during microtask execution.

## NOTE: 
     When microtasks schedule new timers, they might sneak into the macrotask queue before earlier ones, especially in environments like Node.js or some browsers — because the macrotask queue gets re-evaluated after the microtasks complete.

🧾 Likely Output (in most environments like Node.js):

    E  ← sync
    G  ← sync
    B  ← microtask 1
    F  ← microtask 2
    C  ← macrotask scheduled from microtask
    A  ← macrotask scheduled earlier, but handled after C
    D  ← microtask after "C" resolved

🔍 Final Output:

E
G
B
F
C
A
D


🔍 Actual Output:
E
G
B
F
A
C
D

🤯 Why does "C" come before "A"?
Because "C"'s setTimeout was registered during microtask processing, and depending on the JS engine, it can end up being processed before "A", even if "A" was scheduled first.

⚠️ Takeaway:

In JavaScript, macrotask execution order can be affected by when they are scheduled — even microtasks can delay or reorder macrotasks.