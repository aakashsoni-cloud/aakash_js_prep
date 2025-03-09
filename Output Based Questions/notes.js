// Question 1
function sayHi() {
  console.log(name);
  //   console.log(a);
  var name = "aakash";
  let a = 1;
}

sayHi();

//Question 2

function loop() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
}
loop();

// Question 3

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
``;
console.log(shape.diameter());
console.log(shape.perimeter());

// Question 4

console.log("+true", +true);

console.log("!`Aakash`", !"Aakash");
