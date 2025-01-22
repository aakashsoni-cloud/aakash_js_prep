function a() {
  let x = 10,
    y = 20;
  console.log("a called");
  return function b() {
    console.log("b called", x);
  };
}

var outer = a();
outer();
