// Data Abstraction

// Example 1
/*
interface ICar {
    applyBrakes(): string;
    applyAccelerate(): string
    applyHandBrake(): string
}

class Car implements ICar {
    applyBrakes(): string {
        return "Brakes applied";
    }
    applyAccelerate(): string {
        return "Accelerate applied";
    }
    applyHandBrake(): string {
        return "Hand brake applied";
    }
}

const hondaCar = new Car();
const marutiCar = new Car();

console.log(hondaCar.applyBrakes());
console.log(hondaCar.applyAccelerate());
console.log(hondaCar.applyHandBrake());

console.log(marutiCar.applyBrakes());
console.log(marutiCar.applyAccelerate());
console.log(marutiCar.applyHandBrake());

*/

// Example 2
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Abstract class 'Shape' cannot instantiated directly.");
    }
  }

  area() {
    throw new Error("You have to implement the method area!");
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

const square = new Square(5);
console.log(square.area());
