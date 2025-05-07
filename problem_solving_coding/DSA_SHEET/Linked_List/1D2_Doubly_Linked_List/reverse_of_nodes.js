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

    while (temp !== null) {
      str += " " + temp.data;
      temp = temp.next;
    }
    console.log(str);
  }

  reverseOfNodes(head) {
    let temp = head;
    let stack = [];
    while (temp.next != null) {
      stack.push(temp.data);
      temp = temp.next;
    }

    let temp2 = head;
    while (temp2.next !== null) {
      temp2.data = stack.pop();
      temp2 = temp2.next;
    }

    return head;
  }

  reverseOfNodesOptimized(head) {
    if (head === null || head.next === null) {
      return head;
    }

    let current = head;
    let last = null;

    while (current !== null) {
      last = current.back;
      current.back = current.next;
      current.next = last;
      current = current.back;
    }

    return last.back;
  }
}

let arr = [2, 3, 4, 1, 7];
let doublyLinkedList = new DoublyLinkedList();
let mainHead = doublyLinkedList.createDoubleLinkedList(arr);

console.log("Print Main DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(mainHead);

let reverseDLL = doublyLinkedList.reverseOfNodes(mainHead);
console.log("Brute Force Approach -> Reverse of DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(reverseDLL);

let reverseDLLOptimized = doublyLinkedList.reverseOfNodesOptimized(mainHead);
console.log("Optimized Approach -> Reverse of DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(reverseDLLOptimized);
