class Node {
  constructor(data1, next1, prev1) {
    this.data = data1;
    this.next = next1;
    this.back = prev1;
  }
}

class DoublyLinkedList {
  createDoubleLinkedList(arr) {
    let head = new Node(arr[0], null, null);

    let mover = head;

    for (let i = 1; i <= arr.length; i++) {
      let newNode = new Node(arr[i], null, mover);
      mover.next = newNode;
      mover = newNode;
    }

    return head;
  }

  printDoubleLinkedList(head) {
    let temp = head;
    let str = "";

    while (temp.next !== null) {
      str += " " + temp.data;
      temp = temp.next;
    }
    console.log(str);
  }

  insertBeforeHead(head, ele) {
    let newHead = new Node(ele, head, null);
    head.back = newHead;
    return newHead;
  }

  insertBeforeLast(head, ele) {
    if (head.next == null) {
      return this.insertBeforeHead(head, ele);
    }

    let temp = head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }

    let prev = temp.back;

    let newTail = new Node(ele, temp, prev);
    prev.next = newTail;
    temp.back = newTail;
    return head;
  }

  insertBeforePosition(head, ele, pos) {
    if (head == null || pos == 1) {
      return this.insertBeforeHead(head, ele);
    }
    let count = 0;
    let temp = head;

    while (temp.next.next != null) {
      count++;
      if (count == pos) break;
      temp = temp.next;
    }

    let prev = temp.back;

    let newNode = new Node(ele, temp, prev);
    prev.next = newNode;
    temp.back = newNode;
    return head;
  }

  insertBeforeValue(node, val) {
    let prev = node.back;
    let newNode = new Node(val, node, prev);
    prev.next = newNode;
    node.back = newNode;
  }
}

let arr = [2, 3, 4, 1, 7];
let doublyLinkedList = new DoublyLinkedList();
let mainHead = doublyLinkedList.createDoubleLinkedList(arr);

console.log("Print Main DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(mainHead);

let insertBeforeHead = doublyLinkedList.insertBeforeHead(mainHead, 9);
console.log("Insert Before the head of DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(insertBeforeHead);

let insertBeforeLast = doublyLinkedList.insertBeforeLast(mainHead, 10);
console.log("Insert Before the last of DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(insertBeforeLast);

let insertBeforePosition = doublyLinkedList.insertBeforePosition(
  insertBeforeLast,
  5,
  3
);
console.log("Insert Before position of DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(insertBeforePosition);

let insertBeforeValue = doublyLinkedList.insertBeforeValue(
  insertBeforePosition.next.next,
  100
);
console.log("Insert before value of DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(insertBeforeValue);
