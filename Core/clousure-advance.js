// closure examples

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}
outer()();

// 10

// Using let inside the close as let is blocked Scope
function x() {
  function y() {
    console.log(a);
  }
  let a = 10;
  return y;
}
var close = x();
close();

// // 10

// // Scop chain with closure
function outest2(c) {
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    // var a = 10;
    return inner;
  }
  return outer;
}
var close0 = outest2("aakash")("hello");
close0();
// // 10 Hello aakash

// // With Global varible and duplicate names
function outest1(c) {
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    var a = 10;
    return inner;
  }
  return outer;
}
var a = 100;
var close1 = outest1("aakash")("hello");
close1();

// // 10 hello aakash

// // With Global varible
function outest(c) {
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    //var a = 10;
    return inner;
  }
  return outer;
}
var a = 100;
var close2 = outest("aakash")("hello");
close2();

// // 100 Hello aakash

function counter() {
  var count = 0;
  return function increment() {
    count++;
    // console.log(count);
  };
}
counter()();
console.log(count);
