class Animal {
  makeSound() {
    console.log("Some animal sound!");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound(); // Outputs: Woof!
cat.makeSound(); // Outputs: Meow!
