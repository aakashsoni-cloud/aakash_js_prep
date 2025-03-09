
### 1. Single Responsibility Principle (SRP)
**Essence:**  
Every module, class, or function should have one—and only one—reason to change. Keep concerns separated.

**JavaScript Example:**

```js
// Logger handles logging only.
class Logger {
  log(message) {
    console.log(`[LOG]: ${message}`);
  }
}

// OrderProcessor handles order processing only.
class OrderProcessor {
  constructor(logger) {
    this.logger = logger;
  }
  
  process(order) {
    // Process the order...
    this.logger.log('Order processed');
  }
}

const logger = new Logger();
const processor = new OrderProcessor(logger);
processor.process({ id: 1, items: ['apple', 'banana'] });
```

---

### 2. Open-Closed Principle (OCP)
**Essence:**  
Design modules so they can be extended without modifying their existing source code. Use abstractions, inheritance, or composition.

**JavaScript Example:**

```js
// Base class that defines an interface.
class Shape {
  area() {
    throw new Error("area() must be implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
}

// New shapes can be added without modifying existing code.
function printArea(shape) {
  console.log(shape.area());
}

printArea(new Rectangle(10, 20));
printArea(new Circle(5));
```

---

### 3. Liskov Substitution Principle (LSP)
**Essence:**  
Subtypes must be substitutable for their base types without altering the desirable properties of the program. Ensure that derived classes honor the contracts defined by their base classes.

**Note** Subtype extends the capability of the parent class not narrow it down  

**JavaScript Example:**

```js
// Given the Shape interface from above:
function displayArea(shape) {
  // shape.area() should work correctly regardless of the specific shape type.
  console.log(`Area: ${shape.area()}`);
}

const rectangle = new Rectangle(10, 20);
const circle = new Circle(5);

displayArea(rectangle);
displayArea(circle);
```


*Key point:* Any subclass (like `Rectangle` or `Circle`) should fully implement the contract of `Shape` so that `displayArea()` works without concern for the specific type.


**JavaScript Example:**

## Problem

```js
class Vehicle {
    getNoOfTyres() {
        return 2;
    }

    hasEngineStart() {
        return true;
    }
}


class MotorCycle extends Vehicle {

}

class Car extends Vehicle {

}

class ByCycle extends Vehicle {
    // breaks as there is no engine To starte
}

```

## Solution 

```js
// Given the solution forß above:

class Vehicle {
    getNoOfTyres() {
        return 2;
    }
}


class EngineVehicle extends Vehicle {
    hasEngineStart() {
        return true;
    }
}


class MotorCycle extends EngineVehicle {

}

class Car extends EngineVehicle {

}

class ByCycle extends Vehicle {

}

```

**NOTE**: Only add the generic methods in the parent class 

---

### 4. Interface Segregation Principle (ISP)
**Essence:**  
Clients should not be forced to depend on methods they do not use. Instead of one fat interface, use smaller, more focused ones.
Divide the interface into small chunks or pieces 

**JavaScript Example:**

```js
// Rather than a single "Machine" with many methods:
interface IPrinter {
    print() 
}

interface IScanner {
    scan() 
}


class Printer implements IPrinter {
  print(doc) {
    console.log("Printing:", doc);
  }
}

class Scanner implements IScanner {
  scan() {
    return "Scanned document";
  }
}

// A multi-function device can be composed from smaller, focused classes.
class MultiFunctionMachine {
  constructor(printer, scanner) {
    this.printer = printer;
    this.scanner = scanner;
  }
  
  print(doc) {
    this.printer.print(doc);
  }
  
  scan() {
    return this.scanner.scan();
  }
}

const printer = new Printer();
const scanner = new Scanner();
const mfm = new MultiFunctionMachine(printer, scanner);

mfm.print("Document.pdf");
console.log(mfm.scan());
```

*Key point:* Break larger interfaces into specialized ones so that classes only implement what they need.

---

### 5. Dependency Inversion Principle (DIP)
**Essence:**  
High-level modules should depend on abstractions (interface), not on concrete classes. In JavaScript, this often means using dependency injection to supply dependencies.

**JavaScript Example:**

```js
// A simple data service abstraction.
class DataService {
  fetchData() {
    return "Data from service";
  }
}

// A Controller that depends on an abstraction.
class Controller {
  constructor(dataService) {
    this.dataService = dataService;
  }
  
  render() {
    const data = this.dataService.fetchData();
    console.log("Rendering with:", data);
  }
}

// Inject the dependency at creation time.
const dataService = new DataService();
const controller = new Controller(dataService);
controller.render();
```

*Key point:* By depending on an abstraction (here, the `DataService` interface), you can swap out implementations (e.g., a mock service for testing) without changing the `Controller` code.

---

### Final Thoughts
- **Balance:** While SOLID principles originated in statically typed languages, they remain valuable in JavaScript. Adapt them to suit dynamic typing and functional paradigms.
- **Practicality:** Avoid overengineering. Use SOLID as a guide to improve modularity and maintainability, not as strict rules.
- **Evolution:** As your codebase grows, SOLID can help manage complexity by promoting loosely coupled and highly cohesive components.