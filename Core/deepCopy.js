/* On Primitive Types, we can make Deep Copy

- Number
- String
- Boolean
- Array
- Object


Definition: A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.

Deep copy refers to the original one once the value copies it get disconnected from original one

*/

function question1() {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [...arr1]; // deepCopy
  arr2.push(10);
  console.log("Array 2 is " + arr2);
  console.log("Array 1 is " + arr1);
}

question1();

function question2() {
  const user1 = {
    name: "Vasanth",
    channel: "uncommon_geeks",
  };
  const user2 = { ...user1 }; // Approach 1
  //   const user2 = Object.assign({}, user1); // Approach 2
  user2.name = "coolVasanth";
  console.log("user1", user1);
  console.log("user2", user2);
}

question2();

function question3() {
  const user1 = {
    name: "Vasanth",
    channel: "uncommon_geeks",
    location: {
      city: "Bengaluru",
      state: "karnataka",
    },
  };
  const user2 = JSON.parse(JSON.stringify(user1));
  user2.location.city = "Mysuru";
  console.log("user1", user1);
  console.log("user2", user2);
}

question3();

// Note: If a object is nested,
// Object.assign or Spread operator won't make a deep copy for nested object

function question4() {
  const testObject1 = {
    sampleDate: new Date(),
  };
  const testObject2 = JSON.parse(JSON.stringify(testObject1)); // Do not use this liner as it prints different dataTypes
  console.log(testObject1); // Prints date as an object
  console.log(testObject2); // Prints a String
}

question4();

function question5() {
  const testObject1 = {
    sampleFunction: console.log,
    sampleUndefined: undefined,
  };
  const testObject2 = JSON.parse(JSON.stringify(testObject1));
  console.log(testObject1); // {sampleFunction: [Function: log], sampleUndefined: undefined}
  console.log(testObject2); // {}
}

question5();
