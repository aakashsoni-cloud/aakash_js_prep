# Constructor Functions

**_Constructor Functions_** are the ones which we would see in most of the codebase instead of **_Object.create_**

```js
// Constructor Functions
function CreateElf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

const peter = new CreateElf('peter', 'stones');
const sam = new CreateElf('sam', 'fire');
console.log(sam.name); // 'sam'
```

```js
//adding prototype chain to constructor function
CreateElf.prototype.attack = function () {
  return 'attack with' + this.weapon;
};

//this refers to the one which calls, (whatever on left of the dot I mean)
```

```js
//FINAL CODE 😊😊
// Constructor Functions
function CreateElf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

CreateElf.prototype.attack = function () {
  return 'attack with ' + this.weapon;
};

const peter = new CreateElf('peter', 'stones');
👉// console.log(peter.prototype) // undefined 👈
console.log(peter.attack()); // 'attack with stones'

const sam = new CreateElf('sam', 'fire');
console.log(sam.attack()); // 'attack with fire'
```

# Object Oriented Programming Concepts
    - In OOP everything revolves around the object 
    - The main aim of OOPs is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.

## 1. Object
    - Object are the real life entities which contain its own properties and methods/behavior.
    - An Object is an instance of a class
    - like dog, car, bank, atm, laptop, school etc.

### Example

<details>

- Car is a Object 
    - **Properties** - Color, Modal, HorsePower, Company, Capacity, safetyFeatures etc
    - **Behavior** - driving, getModal, getColor, getCapacity, start, stop etc.

- Dog is a Object 
    - **Properties** - Color, Breed, Age etc
    - **Behavior** - eat, sleep, bark etc.

</details>

## 2. Classes
    - They are called as boilerplate or skeleton of an objects
    - Classes are required to create the object
    - From one class we can create multiple objects
    - Class name always start from upperCase like Student, Vehicle etc.

### Example 
    
```js
class Student {
    let age;
    let name;
    let address;

    getName() {}
    getAge() {}
    getAddress() {}
    updateAddress() {}
}

```

# 4 Pillar of OOPS

## 1. Abstraction

- Only show the essential information to the user and hide the internal implementation.

### Example

- Car provide a paddle to apply brake, but it works internally is not required by the user
- Cellphone for making a call we click on number but how it went to the same person mobile 


### Advantages

- Improves the security
- Confidentiality
- Simpler the client code


## 2. Encapsulation (Data Hiding) (Data+Methods)

- The way of bundling the data and the code to work with that data in a single unit
- Also known as Data hiding
- This provides the class full control over the data of class.
- Access Specify -> Public, Private, Protected, Default

### Example

- Let take a bank class which has a method to fetch and update the balance. 
- Can not take the data outside the class without methods


### Advantages

- Reduce the rise of data loos
- Increase the Security


## 3. Inheritance

- Capability of a child class to inherit the properties and methods of parent class
- It inherit both the function and variables
- using **extends** keyword inheritance can be possible

### Types

- Single Inheritance A -> B
- MultiLevel Inheritance A -> B -> C
- Hierarchical Inheritance A -> B A-> C
- Multiple Inheritance A -> C B -> C

### Example

- Dog is a Animal Animal -> Dog
- Bike is a vehicle Vehicle -> Bike


### Advantages

- Code Reusability 
- Code Maintainability


## 4. PolyMorphism

- Poly -> Many, Morphism -> Form
- A same function in class has behaves different in different situation

### Example

- A person can be a father, husband, and employee etc
- Water can be solid, liquid, gas, etc.

### Types

- Method Overloading / Static PolyMorphism / Compile time 
- Method Overriding / Dynamic PolyMorphism / Runtime 

### Code

**Method Overloading / Static PolyMorphism / Compile time**
- Method name should be same but the argument number and type is changed in same class
```javascript
class Sum {

    doSum(let a, let b) {
        return a+b;
    }

    doSum(let a, let b, let c) {
        return a+b+c;
    }
}
```

**Method Overriding / Dynamic PolyMorphism / Runtime**
- Argument type, return type and Method name should be same
- Same methods in child class also
- On runtime decide which function to call
```javascript
class A {

    doSum(let a, let b) {
        return a+b;
    }
}

class B {
    doSum(let a, let b) {
        return a+b;
    }
}


const objA = new A();
objA.doSum();

const objB = new B();
objB.doSum();
```