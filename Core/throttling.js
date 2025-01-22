const expensive = () => {
  console.log("expensive");
};

// throttle
// fn -> function
// limit -> duration after function should be executed
const throttle = function (fn, limit) {
  let timer;
  let flag = true;

  return function () {
    // closer
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      timer = setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const betterFunction = throttle(expensive, 1000);

window.addEventListener("resize", betterFunction);

let count = 0;
const fire = () => {
  console.log("Fire the Machine gun", count++);
};

const fireTheGun = throttle(fire, 500);
window.addEventListener("click", fireTheGun);
