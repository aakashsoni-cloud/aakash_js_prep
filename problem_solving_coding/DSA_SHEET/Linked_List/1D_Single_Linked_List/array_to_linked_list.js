class Node {
  constructor(data1, next1) {
    (this.data = data1), (this.next = next1);
  }
}

function createArrayToLL(arr) {
  let head = new Node(arr[0], null);
  let mover = head;

  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null);
    mover.next = temp;
    // mover= mover.next; or
    mover = temp;
  }

  return head;
}

function lengthOfLL(head) {
  let temp = head;
  let count = 0;

  while (temp) {
    count++;
    temp = temp.next;
  }
  return count;
}

function checkIfPresent(head, key) {
  let temp = head;
  while (temp) {
    if (temp.data == key) {
      return true;
    }
    temp = temp.next;
  }
  return false;
}

let arr = [2, 3, 1, 4];
let head = createArrayToLL(arr);
let temp = head;

// Traversal of LL
while (temp) {
  console.log("LL Traversal", temp.data);
  temp = temp.next;
}

// Length of LL
console.log("Length of LL", lengthOfLL(head));
// Search in LL
console.log("Search in LL", checkIfPresent(head, 0));
