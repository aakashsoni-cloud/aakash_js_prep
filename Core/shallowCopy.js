// Definition: A shallow copy means that certain (sub-values) are still connected to the original variable.
// Shallow refers to the same reference and that is why if
// one of array/object is changed, you would see both the 
// array/object is getting changed

function question1() {
  const arr1 = [1, 2, 3, 4];
  const arr2 = arr1; // shallowCopy
  arr2.push(10);
  arr1.push(11);
  console.log("Array 2 is " + arr2);
  console.log("Array 1 is " + arr1);

  let obj = { name: "aakash" };
  let obj2 = obj;
  obj2.name = "deep soni";
  console.log(obj);

  const original = {
    name: "Alice",
    details: {
      age: 25,
    },
  };

  const shallowCopy = { ...original };

  shallowCopy.details.age = 30;

  console.log(original.details.age); // 30 ❌ (original is affected)
}

question1();
