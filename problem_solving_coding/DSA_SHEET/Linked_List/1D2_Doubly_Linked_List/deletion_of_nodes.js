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

  deleteFromHead(head) {
    if (head == null || head.next == null) return null;

    let temp = head;
    head = head.next;

    head.back = null;
    temp.next = null;
    delete temp.next;
    return head;
  }

  deleteFromTail(head) {
    if (head == null || head.next == null) return null;
    let temp = head;
    let tail;

    while (temp.next !== null) {
      temp = temp.next;
    }
    tail = temp.back;
    temp.back = null;
    tail.next = null;
    delete temp.next;
    delete temp.back;

    return head;
  }

  deleteFromPosition(head, k) {
    if (head == null) return null;

    let temp = head;
    let count = 0;

    while (temp.next !== null) {
      count++;
      if (count == k) break;
      temp = temp.next;
    }

    let prev = temp.back;
    let front = temp.next;

    // Case 1 single item
    if (prev == null && front == null) {
      return null;
    } else if (prev == null) {
      return this.deleteFromHead(head);
    } else if (front == null) {
      return this.deleteFromTail(head);
    } else {
      prev.next = front;
      front.back = prev;
      temp.next = null;
      temp.back = null;
      return head;
    }
  }

  deleteANode(head, n) {
    if (head == null) return null;

    let temp = head;

    while (temp.next !== null) {
      if (temp.data == n) break;
      temp = temp.next;
    }

    let prev = temp.back;
    let front = temp.next;

    if (front == null) {
      prev.next = null;
      temp.back = null;
      return head;
    } else {
      prev.next = front;
      front.back = prev;
      temp.back = temp.next = null;
      return head;
    }
  }
}

let arr = [2, 3, 4, 1, 7, 9, 0, 5, 8];
let doublyLinkedList = new DoublyLinkedList();
let mainHead = doublyLinkedList.createDoubleLinkedList(arr);

console.log("Print Main DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(mainHead);

let deleteAtHead = doublyLinkedList.deleteFromHead(mainHead);
console.log("Deleted from head of DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(deleteAtHead);

// // https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1
let deleteFromLast = doublyLinkedList.deleteFromTail(deleteAtHead);
console.log("Deleted from tail of DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(deleteFromLast);

let deleteFromPosition = doublyLinkedList.deleteFromPosition(deleteFromLast, 8);
console.log("Delete from position of DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(deleteFromPosition);

let deleteANode = doublyLinkedList.deleteANode(deleteFromPosition, 4);
console.log("Delete a node of DoublyLinkedList");
doublyLinkedList.printDoubleLinkedList(deleteANode);
