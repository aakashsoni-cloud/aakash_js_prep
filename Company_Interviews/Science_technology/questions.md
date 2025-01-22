## Question 1

    console.log(a);
    var a = 5;

### **Output** (`Undefined`) -> Accessing var variable before memory allocation as declaration is hosted not initialization

## Question 2

    function test() {
        console.log(a);
        var a = 10;
    }
    test();

### **Output** (`Undefined`) -> Accessing var variable before memory allocation as declaration is hosted not initialization

## Question 3

    function test() {
        var a = 10;
        console.log(a);
        var a = 20;
    }
    console.log(a);
    test();

### **Output** (`Reference Error: a is not defined`) ->On each execution lexical scope is created and a is not present in outer scope Due to now present it its lexical scope

## Question 4

    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1000);
    }

### **Output** (`print 3 , 3 times `) ->On each execution lexical scope is created and a is not present in outer scope Due to now present it its lexical scope

## Question 5

    console.log([] == ![]);

### **Output** (` true `) -> Due to `[] == ![]` => JavaScript attempts to convert `[]` the object to a primitive value using the ToPrimitive operation first calls the `toString()` method, `[].toString()` returns an empty string `  ("")` JavaScript converts the empty string to a number. `""` is coerced to `0`. `[] == false` => `0 == 0` => true 

## Question 6

    const obj = {
        name: 'JavaScript',
        getName: () => {
            console.log(this.name);
        }
    };

    obj.getName();

### **Output** (` undefined `) -> As value of this keyword in arrow function will be enclosed ` lexical context `

## Question 7

    console.log(typeof function(){});
    console.log(typeof new function(){});

### **Output** (` function, object `) 

## Question 8

    function Person() {}
        Person.prototype.greet = function() {
        return 'Hello';
    };

    const john = new Person();
    john.greet = function() {
        return 'Hi';
    };

    delete john.greet;
    console.log(john.greet());

### **Output** (` Hello `) -> As the new object of function is created will have all properties but when it deleted it means the copy is deleted not the original one so the value for function greet `Hello` will return. 


## Question 9

    console.log('5' - 3);
    console.log('5' + 3);

### **Output** (` 2, 53 `)  -> in sub (-) the string is converted to number and in addition (+) it act like concat and convert the number to string.

## Question 10

    console.log([] instanceof Array);
    console.log([] instanceof Object);
    console.log([] instanceof String);

### **Output** (` true, true, false`) 


## Question 11

## Problem: Longest Substring Without Repeating Characters

    s = "abcabcbb"
    output = 3
    Explanation: The answer is "abc", with the length of 3.

    abcdabcbb
    4


## Question 12

console.log([] + {});