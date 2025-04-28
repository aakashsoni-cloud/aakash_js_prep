// Deletion of nodes
// -> Head
// -> Position
// -> Last
// -> value

class Node {
  constructor(data1, next1) {
    this.data = data1;
    this.next = next1;
  }
}

class LinkedList {
  createLinkedList(arr) {
    let head = new Node(arr[0], null);
    let mover = head;

    for (let i = 1; i < arr.length; i++) {
      let temp = new Node(arr[i], null);
      mover.next = temp;
      mover = temp;
    }

    return head;
  }

  printLinkedList(head) {
    let temp = head;
    let str = "";
    while (temp) {
      str += " " + temp.data;
      temp = temp.next;
    }
    console.log(str);
  }

  deleteFromHead(head) {
    if (head == null) return head;
    let temp = head;
    head = head.next;
    // No need to delete temp due to garbage collection mechanism in Javascript
    delete temp.next;
    delete temp.data;
    return head;
  }

  deleteFromLast(head) {
    // only single element
    if (head == null || head.next == null) return null;
    let temp = head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    // free up the temp->next;
    temp.next = null;
    return head;
  }

  deleteFromPosition(head, k) {
    if (head == null || head.next == null) return null;
    // First position
    if (k == 1) {
      let temp = head;
      head = head.next;
      delete temp.next;
      delete temp.data;
      return head;
    }
    // In between Position
    let count = 0,
      temp = head;
    let prev = null;

    while (temp) {
      count++;
      if (count == k) {
        prev.next = prev.next.next;
        break;
      }
      prev = temp;
      temp = temp.next;
    }
    return head;
  }

  deleteTheValue(head, elem) {
    if (head == null || head.next == null) return null;
    
    let temp = head;
    if (temp.data == elem) {
      head = head.next;
      temp = null;
      return head;
    }

    let prev = null;

    while (temp.next !== null) {
      if (temp.data == elem) {
        prev.next = prev.next.next;
        break;
      }
      prev = temp;
      temp = temp.next;
    }
    return head;
  }
}

let arr = [2, 3, 4, 1, 5, 9, 7];
let linkedList = new LinkedList();
let mainHead = linkedList.createLinkedList(arr);
linkedList.printLinkedList(mainHead);
// Delete from head
let newHeadDeleteHead = linkedList.deleteFromHead(mainHead);
linkedList.printLinkedList(newHeadDeleteHead);
// Delete from last
let newHeadDeleteLast = linkedList.deleteFromLast(newHeadDeleteHead);
linkedList.printLinkedList(newHeadDeleteLast);
// Delete from position
console.log("Delete from position");
let newHeadDeleteFromPosition = linkedList.deleteFromPosition(
  newHeadDeleteLast,
  7
);
linkedList.printLinkedList(newHeadDeleteFromPosition);
// Delete from value
console.log("Delete the value");
let newHeadDeleteFromValue = linkedList.deleteTheValue(newHeadDeleteLast, 9);
linkedList.printLinkedList(newHeadDeleteFromValue);
