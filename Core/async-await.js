/*
async is function attribute which makes a function always return a promise
it if does not return a promise then it automatically wrap into a promise and returns a promise 

    // async function getData(params) {
    //   return "Async/Await";
    // }

    // const dataPromise = getData();
    // {Promise <>}


*/

// const p = new Promise((resolve, reject) => {
//   resolve("Promise is resolved value!!");
// });

// async function getData(params) {
//   //   return "Async/Await";
//   return p;
// }

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));


// using await with async

// await is keyword only be used inside an async functions to resolve a promise
// it make the js engine to *** suspend *** the execution of the function until the promise is resolved
// Till the promise get resolved the call-stack remain empty and once it resolved the suspended function start executing from where it left.

///// very very important ///////
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Using await keyword - p1");
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Using await keyword - p2");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("Hello");
//   const val1 = await p1;
//   console.log("Promise 1");
//   console.log(val1);

//   const val2 = await p2;
//   console.log("Promise 2");
//   console.log(val2);
// }

// handlePromise();

////////////

const API_URL = "https://api.github.com/users/aakashsoni-cloud";
async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }

  //   fetch().then((res) => res.json()).then((res) => console.log(res))
}

handlePromise();
